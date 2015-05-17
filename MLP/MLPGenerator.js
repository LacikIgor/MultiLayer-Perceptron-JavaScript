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

// Activation function types
var VOID = -1;
var SGM  = "SGM";
var LIN  = "LIN"; 
var TANH = "TANH";

// Neuron types
var THRESHOLD = "T";
var INPUT     = "I";
var HIDDEN    = "H";
var OUTPUT    = "O";
var AF_VOID   = "VOID";

/**
 * Constructor
 * @param {type} inDimSize
 * @param {type} hidDimSize
 * @param {type} outDimSize
 * @param {type} hidActFunctionType
 * @param {type} outActFunctionType
 * @param {Array} weightValues
 * @returns {MLPGenerator}
 */
function MLPGenerator(  
        inDimSize,
        hidDimSize,
        outDimSize,
        hidActFunctionType,
        outActFunctionType,
        weightValues
    )
{
    // all layers + 1 threshold
    this.NeuronCount = 1 + inDimSize + hidDimSize + outDimSize;
    
    this.uFirstWeight = initArrayZeros( this.NeuronCount );
    this.uLastWeight  = initArrayZeros( this.NeuronCount );
    this.uAFType      = initArrayNulls( this.NeuronCount );
    this.uType        = initArrayNulls( this.NeuronCount );
    var TS_OFFSET = 0;

    // input nodes and treshold
    for ( var i = 0; i <= inDimSize; i++ )
    {
        this.uFirstWeight[i] = VOID;
        this.uLastWeight[i]  = VOID;
        this.uAFType[i]      = AF_VOID;
        this.uType[i]        = INPUT;
    }
    this.uType[0] = THRESHOLD;
    
    // the number of connections connected to the hidden layer
    var hidLayerSpan = 1 + inDimSize;
    var outLayerSpan = 1 + ( hidDimSize === 0 ? inDimSize : hidDimSize ); // ?
    
    // hidden neurons
    var firstHiddenNeuron = inDimSize + 1;
    for ( var i = firstHiddenNeuron; i <= ( inDimSize + hidDimSize ); i++ )
    {
        // precHidCount => number of preceding hidden neurons
        var precHidCount = i - firstHiddenNeuron; 
        this.uFirstWeight[i] = precHidCount * hidLayerSpan;
        this.uLastWeight[i]  = ( precHidCount + 1 ) * hidLayerSpan - 1;
        this.uAFType[i]      = hidActFunctionType;
        this.uType[i]        = HIDDEN;
    }
    
    // output nodes
    var firstOutputNeuron = inDimSize + hidDimSize + 1;
    for ( var i = firstOutputNeuron; i < this.NeuronCount; i++ )
    {
        // precOutCount => number of preceding output neurons
        var precOutCount = i - firstOutputNeuron;
        this.uFirstWeight[i]  = hidDimSize * hidLayerSpan + precOutCount * outLayerSpan;
        this.uLastWeight[i]   = hidDimSize * hidLayerSpan + ( precOutCount + 1 ) * outLayerSpan - 1;
        this.uAFType[i]       = outActFunctionType;
        this.uType[i]         = OUTPUT;
    }
    
    this.WeightCount = hidDimSize * hidLayerSpan + outDimSize * outLayerSpan;
    this.wDest   = initArrayZeros( this.WeightCount );
    this.wSource = initArrayZeros( this.WeightCount );
    this.wDelay  = initArrayZeros( this.WeightCount );
    
    if ( weightValues === undefined )
    {
        this.wValue = initMLPRandVals( this.WeightCount );
    }
    else
    {
        this.wValue = weightValues;
    }
    
    this.WeightCount = 0;
    // hidden neuron weights
    for ( var i = inDimSize + 1; i <= ( inDimSize + hidDimSize ); i++ )
    {
        // threshold and input weights
        for ( var j = 0; j <= inDimSize; j++ )
        {
            this.wDest[this.WeightCount]   = i;
            this.wSource[this.WeightCount] = j;
            this.WeightCount++;
        }
    }
    
    // output weights
    for ( var i = inDimSize + hidDimSize + 1; i <= ( inDimSize + hidDimSize + outDimSize ); i++ )
    {
        this.wDest[this.WeightCount]   = i;
        this.wSource[this.WeightCount] = 0;
        this.WeightCount++;
        // simple perceptron
        if ( hidDimSize === 0 )
        {
            for ( var j = 1; j <= inDimSize; j++ )
            {
                this.wDest[this.WeightCount]   = i;
                this.wSource[this.WeightCount] = j;
                this.WeightCount++;
            }
        }
        // multi-layer perceptron
        if ( hidDimSize !== 0 )
        {
           for ( var j = inDimSize + 1; j <= inDimSize + hidDimSize; j++ )
           {
               this.wDest[this.WeightCount]   = i;
               this.wSource[this.WeightCount] = j;
               this.WeightCount++;
           }
        }
    }
    
} // MLPGenerator

MLPGenerator.prototype.modelToString = function()
{
    var result = "";
    result += "UNI";
    result += "<br />";
    result += getArrayToString( initArraySequence( this.NeuronCount ), "uIndex" );
    result += getArrayToString( this.uFirstWeight, "uFirstWeight" );
    result += getArrayToString( this.uLastWeight, "uLastWeight" );
    result += getArrayToString( this.uType, "uType" );
    result += getArrayToString( this.uAFType, "uAFType" );
    result += "<br />";
    result += "CON";
    result += "<br />";
    result += getArrayToString( initArraySequence( this.WeightCount ), "wIndex" );
    result += getArrayToString( this.wSource, "wSource" );
    result += getArrayToString( this.wDest, "wDest" );
    result += getArrayToString( this.wDelay, "wDelay" );
    result += getArrayToString( this.wValue, "wValue" );
    return result;
}; // modelToString

MLPGenerator.prototype.getNeuronCount = function()
{
    return this.NeuronCount;
}; // getNeuronCount

MLPGenerator.prototype.getWeightCount = function()
{
    return this.WeightCount;
}; // getWeightCount

MLPGenerator.prototype.getFirstWeights = function()
{
    return this.uFirstWeight;
}; // getFirstWeight

MLPGenerator.prototype.getLastWeights = function()
{
    return this.uLastWeight;
}; // getLastWeight

MLPGenerator.prototype.getTypes = function()
{
    return this.uType;
}; // getType

MLPGenerator.prototype.getAFTypes = function()
{
    return this.uAFType;
}; // getType

MLPGenerator.prototype.getSources = function()
{
    return this.wSource;
}; // getSource

MLPGenerator.prototype.getDests = function()
{
    return this.wDest;
}; // getDest

MLPGenerator.prototype.getDelays = function()
{
    return this.wDelay;
}; // getDelay

MLPGenerator.prototype.getValues = function()
{
    return this.wValue;
}; // getValue