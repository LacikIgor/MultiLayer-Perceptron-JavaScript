/* 
 * The MIT License
 *
 * Copyright 2014 Igor Lacik.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation and source code files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The Software shall be used for Good, not Evil.
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* #############################################################################
 * ##################   GUI IMPLEMENTATION FOR THE SIMULATOR   #################
 * ############################################################################# 
 */

 // Change history:
 // ilacik 1.0 -> Initial Release 

/**
 * Constructor
 * @param {Array} inDimSize
 * @param {Array} hidDimSize
 * @param {Array} outDimSize
 * @param {Array} hidActFunctionType
 * @param {Array} outActFunctionType
 * @param {Array} weightValues
 * @param {double} alpha
 * @param {double} beta
 * @param {boolean} softmax
 * @returns {undefined}
 */
function MLP(  
        inDimSize,
        hidDimSize,
        outDimSize,
        hidActFunctionType,
        outActFunctionType,
        weightValues,
        alpha,
        beta,
        softmax
    )
{
    var generator = new MLPGenerator( 
        inDimSize, 
        hidDimSize, 
        outDimSize, 
        hidActFunctionType, 
        outActFunctionType,
        weightValues
    );
    
    
    this.inDimSize  = inDimSize;
    this.hidDimSize = hidDimSize;
    
    // initialize arrays
    this.NeuronCount  = generator.getNeuronCount();
    this.uFirstWeight = generator.getFirstWeights();
    this.uLastWeight  = generator.getLastWeights();
    this.uType        = generator.getTypes();
    this.uAFType      = generator.getAFTypes();
    
    this.WeightCount  = generator.getWeightCount();
    this.wSource      = generator.getSources();
    this.wDest        = generator.getDests();
    this.wDelay       = generator.getDelays();
    this.wValue       = generator.getValues();
    
    this.alpha = alpha;
    this.beta  = beta;
    
    this.softmax = softmax;
    
    this.ACT  = undefined;
    this.ACTD = undefined;
    
    this.string_val = generator.modelToString();
//    document.write( this.string_val );
    this.step = 1;
} // MLP

/**
 * @param {Array} input -> e.g. array( [1,0] );
 * @returns {Double} -> activation of the output neuron
 */
MLP.prototype.forwardPass = function( input )
{
    var Output = [];
    this.ACT  = undefined;
    this.ACTD = undefined;
    this.ACT  = initArrayZeros( this.NeuronCount ); 
    this.ACTD = initArrayZeros( this.NeuronCount ); 
    for ( var ui = 0; ui < this.NeuronCount; ui++ )
    {
        if ( this.uType[ui] === THRESHOLD )
        {
            this.ACT[ui] = 1.0;
        }
        else if ( this.uType[ui] === INPUT )
        {
            this.ACT[ui] = getInputValue( input, ui );
        }
        else
        {
            var iact = 0.0;
            for ( var wi = this.uFirstWeight[ui]; wi <= this.uLastWeight[ui]; wi++ )
            {
                iact += this.wValue[wi] * this.ACT[this.wSource[wi]];
            }
            this.ACT[ui]  = activationFunction( iact, this.uAFType[ui] );
            this.ACTD[ui] = derivateActivationFunction( this.ACT[ui], this.uAFType[ui] );
        }
        if ( this.uType[ui] === OUTPUT )
        {
            Output[ui] = this.ACT[ui];
        }
    }
    return Output;
}; // forwardPass

/**
 * @param {Array} input
 * @returns {String}
 */
MLP.prototype.forwardPassSoftmax = function( input )
{
    var expSum = 0.0;
    var Output = [];
    this.ACT  = undefined;
    this.ACTD = undefined;
    this.ACT  = initArrayZeros( this.NeuronCount ); 
    this.ACTD = initArrayZeros( this.NeuronCount ); 
    for ( var ui = 0; ui < this.NeuronCount; ui++ )
    {
        if ( this.uType[ui] === THRESHOLD )
        {
            this.ACT[ui] = 1.0;
        }
        else if ( this.uType[ui] === INPUT )
        {
            this.ACT[ui] = getInputValue( input, ui );
        }
        else
        {
            var iact = 0.0;
            for ( var wi = this.uFirstWeight[ui]; wi <= this.uLastWeight[ui]; wi++ )
            {
                iact += this.wValue[wi] * this.ACT[this.wSource[wi]];
            }
            if ( this.uType[ui] === OUTPUT )
            {
                var value = Math.exp( iact );
                this.ACT[ui] = value;
                expSum += value;
            }
            else
            {
                this.ACT[ui] = activationFunction( iact, this.uAFType[ui] );
            }
            this.ACTD[ui] = derivateActivationFunction( this.ACT[ui], this.uAFType[ui] );
        }
    }
    
    if ( expSum == 0 )
    {
        console.log( "Zero output for " + input );
        expSum = -1;
    }
    
    for ( var ui = 0; ui < this.NeuronCount; ui++ )
    {
        if ( this.uType[ui] === OUTPUT )
        {
            this.ACT[ui] = this.ACT[ui] / expSum;
            Output[ui] = this.ACT[ui];
        }
    }
    return Output;
}; // forwardPassSoftmax

/**
 * @param {array} input
 * @param {array} targets
 * @returns {undefined}
 */
MLP.prototype.train = function( input, targets )
{
    var self = this;
    
    var result = "";
    if ( this.softmax )
    {
        result += self.forwardPassSoftmax( input );
    }
    else
    {
        result += self.forwardPass( input );
    }
    
    var DE_DNA = initArrayZeros( this.WeightCount );
    var DLT_W  = initArrayZeros( this.WeightCount );
    
    for ( var ui = this.NeuronCount - 1; ui >= 0; ui-- )
    {
        DE_DNA[ui] = 0.0;
    }
    
    for ( var ui = this.NeuronCount - 1; ui >= 0; ui-- )
    {
        if ( this.uType[ui] === INPUT )
        {
            break;
        }
        
        if ( this.uType[ui] === OUTPUT )
        {
            DE_DNA[ui] += (self.getTarget( ui, targets ) - this.ACT[ui]);
            result += "Target => " + self.getTarget( ui, targets ) + "<br />";
        }
        DE_DNA[ui] *= this.ACTD[ui];
        for ( var wi = this.uLastWeight[ui]; wi >= this.uFirstWeight[ui]; wi-- )
        {
            if ( wi === -1 )
            {
                continue;
            }
            if ( ( this.uType[this.wSource[wi]] !== INPUT ) && 
                 ( this.uType[this.wSource[wi]] !== THRESHOLD ) )
            {
                DE_DNA[this.wSource[wi]] += this.wValue[wi] * DE_DNA[ui];
            }
            DLT_W[wi] += this.alpha * DE_DNA[ui] * this.ACT[this.wSource[wi]];
        }
    }
    for ( var wi = 0; wi < this.WeightCount; wi++ )
    {
        this.wValue[wi] += DLT_W[wi];
        DLT_W[wi] *= this.beta;
    }
    result += getArrayToString( this.wValue, "Altered Weights" );
    result += "End one step train <br />";
    return result;
}; // backPropagate

/**
 * @param {Array} input
 * @param {Array} targets
 * @param {Integer} steps
 */
MLP.prototype.batchTrain = function( input, targets, steps )
{
    var self = this;
    for ( var j = 0; j < steps; j++ )
    {
        self.train( input, targets );
    }
}; // batchTrain

/**
 * @param {type} input
 * @returns {String}
 */
MLP.prototype.propagate = function( input )
{
    var self = this;
    var result = undefined;
    if ( this.softmax )
    {
        result = self.forwardPassSoftmax( input );
    }
    else
    {
        result = self.forwardPass( input );
    }
    return getOutputFromNetwork( result );
}; // propagate

MLP.prototype.toString = function()
{
    return this.string_val;
}; // toString

/**
 * 
 * @param {Integer} ui
 * @param {Array} target
 * @returns {Integer}
 */
MLP.prototype.getTarget = function( ui, target )
{
    return target[ui - ( this.inDimSize + this.hidDimSize + 1 )];
}; // getTarget

/**
 * @param {Array} propagated_output
 * @returns {Array|getOutputFromNetwork.result}
 */
function getOutputFromNetwork( propagated_output )
{
    var result = [];
    for ( var key in propagated_output )
    {
        if ( propagated_output.hasOwnProperty( key ) )
        {
            if ( propagated_output[key] !== '' )
                result.push( propagated_output[key] );
        }
    }
    return result;
}; // getOutputFromNetwork