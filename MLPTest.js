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

var mlp = undefined;

/**
* IRIS FLOWER DATASET - STANDARD WAY FOR TESTING MLP CATEGORIZING FUNCTIONALITY
*/
MLP.prototype.irisTestTrain = function()
{
    var result = "<div>";
    var self = this;
    for ( var j = 0; j < 100; j++ )
    {
        self.train ( [0.224000, 0.624000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.110000, 0.502000, 0.051000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.667000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.055000, 0.584000, 0.067000, 0.082000], [1.0, 0.0, 0.0] );
        self.train ( [0.027000, 0.376000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.306000, 0.710000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.137000, 0.416000, 0.067000, 0.000000], [1.0, 0.0, 0.0] );
        self.train ( [0.416000, 0.831000, 0.035000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.306000, 0.792000, 0.051000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.388000, 0.749000, 0.118000, 0.082000], [1.0, 0.0, 0.0] );
        self.train ( [0.306000, 0.584000, 0.118000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.082000, 0.667000, 0.000000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.137000, 0.584000, 0.153000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.584000, 0.102000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.251000, 0.584000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.137000, 0.459000, 0.102000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.251000, 0.875000, 0.086000, 0.000000], [1.0, 0.0, 0.0] );
        self.train ( [0.165000, 0.459000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.333000, 0.624000, 0.051000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.027000, 0.416000, 0.051000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.624000, 0.051000, 0.082000], [1.0, 0.0, 0.0] );
        self.train ( [0.027000, 0.502000, 0.051000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.749000, 0.153000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.749000, 0.102000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.278000, 0.710000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.165000, 0.416000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.082000, 0.459000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.306000, 0.792000, 0.118000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.584000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.165000, 0.459000, 0.086000, 0.000000], [1.0, 0.0, 0.0] );
        self.train ( [0.137000, 0.584000, 0.102000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.000000, 0.416000, 0.016000, 0.000000], [1.0, 0.0, 0.0] );
        self.train ( [0.388000, 1.000000, 0.086000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.624000, 0.067000, 0.082000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.749000, 0.086000, 0.082000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.710000, 0.086000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.541000, 0.118000, 0.165000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.416000, 0.102000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.251000, 0.624000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.110000, 0.502000, 0.102000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.306000, 0.584000, 0.086000, 0.125000], [1.0, 0.0, 0.0] );
        self.train ( [0.333000, 0.918000, 0.067000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.196000, 0.502000, 0.035000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.165000, 0.667000, 0.067000, 0.000000], [1.0, 0.0, 0.0] );
        self.train ( [0.224000, 0.584000, 0.086000, 0.043000], [1.0, 0.0, 0.0] );
        self.train ( [0.055000, 0.125000, 0.051000, 0.082000], [1.0, 0.0, 0.0] );


        self.train ( [0.749000, 0.502000, 0.627000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.722000, 0.459000, 0.663000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.612000, 0.333000, 0.612000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.557000, 0.541000, 0.627000, 0.624000], [0.0, 1.0, 0.0] );
        self.train ( [0.639000, 0.376000, 0.612000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.196000, 0.000000, 0.424000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.471000, 0.082000, 0.510000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.361000, 0.376000, 0.439000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.361000, 0.416000, 0.592000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.529000, 0.082000, 0.592000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.443000, 0.502000, 0.643000, 0.459000], [0.0, 1.0, 0.0] );
        self.train ( [0.557000, 0.208000, 0.663000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.584000, 0.376000, 0.561000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.694000, 0.333000, 0.643000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.471000, 0.376000, 0.592000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.333000, 0.169000, 0.475000, 0.416000], [0.0, 1.0, 0.0] );
        self.train ( [0.416000, 0.290000, 0.490000, 0.459000], [0.0, 1.0, 0.0] );
        self.train ( [0.306000, 0.416000, 0.592000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.667000, 0.459000, 0.627000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.361000, 0.416000, 0.525000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.333000, 0.251000, 0.576000, 0.459000], [0.0, 1.0, 0.0] );
        self.train ( [0.416000, 0.251000, 0.510000, 0.459000], [0.0, 1.0, 0.0] );
        self.train ( [0.361000, 0.290000, 0.541000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.388000, 0.376000, 0.541000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.224000, 0.208000, 0.337000, 0.416000], [0.0, 1.0, 0.0] );
        self.train ( [0.584000, 0.502000, 0.592000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.333000, 0.125000, 0.510000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.388000, 0.333000, 0.592000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.165000, 0.169000, 0.388000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.251000, 0.290000, 0.490000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.443000, 0.416000, 0.541000, 0.584000], [0.0, 1.0, 0.0] );
        self.train ( [0.498000, 0.376000, 0.627000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.667000, 0.459000, 0.576000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.416000, 0.290000, 0.525000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.361000, 0.208000, 0.490000, 0.416000], [0.0, 1.0, 0.0] );
        self.train ( [0.498000, 0.333000, 0.510000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.498000, 0.333000, 0.627000, 0.459000], [0.0, 1.0, 0.0] );
        self.train ( [0.639000, 0.416000, 0.576000, 0.541000], [0.0, 1.0, 0.0] );
        self.train ( [0.667000, 0.416000, 0.678000, 0.667000], [0.0, 1.0, 0.0] );
        self.train ( [0.388000, 0.251000, 0.424000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.333000, 0.169000, 0.459000, 0.376000], [0.0, 1.0, 0.0] );
        self.train ( [0.471000, 0.290000, 0.694000, 0.624000], [0.0, 1.0, 0.0] );
        self.train ( [0.471000, 0.584000, 0.592000, 0.624000], [0.0, 1.0, 0.0] );
        self.train ( [0.557000, 0.125000, 0.576000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.333000, 0.208000, 0.510000, 0.498000], [0.0, 1.0, 0.0] );
        self.train ( [0.498000, 0.416000, 0.612000, 0.541000], [0.0, 1.0, 0.0] );

        self.train ( [0.557000, 0.541000, 0.847000, 1.000000], [0.0, 0.0, 1.0] );
        self.train ( [0.776000, 0.416000, 0.831000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.612000, 0.416000, 0.812000, 0.875000], [0.0, 0.0, 1.0] );
        self.train ( [0.165000, 0.208000, 0.592000, 0.667000], [0.0, 0.0, 1.0] );
        self.train ( [0.667000, 0.208000, 0.812000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.612000, 0.502000, 0.694000, 0.792000], [0.0, 0.0, 1.0] );
        self.train ( [0.694000, 0.416000, 0.761000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.416000, 0.333000, 0.694000, 0.957000], [0.0, 0.0, 1.0] );
        self.train ( [0.612000, 0.416000, 0.761000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.945000, 0.251000, 1.000000, 0.918000], [0.0, 0.0, 1.0] );
        self.train ( [0.722000, 0.502000, 0.796000, 0.918000], [0.0, 0.0, 1.0] );
        self.train ( [0.945000, 0.333000, 0.965000, 0.792000], [0.0, 0.0, 1.0] );
        self.train ( [0.667000, 0.541000, 0.796000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.529000, 0.333000, 0.643000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.584000, 0.333000, 0.780000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.863000, 0.333000, 0.863000, 0.749000], [0.0, 0.0, 1.0] );
        self.train ( [0.584000, 0.333000, 0.780000, 0.875000], [0.0, 0.0, 1.0] );
        self.train ( [0.498000, 0.251000, 0.780000, 0.541000], [0.0, 0.0, 1.0] );
        self.train ( [0.557000, 0.584000, 0.780000, 0.957000], [0.0, 0.0, 1.0] );
        self.train ( [0.471000, 0.416000, 0.643000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.667000, 0.459000, 0.780000, 0.957000], [0.0, 0.0, 1.0] );
        self.train ( [0.416000, 0.290000, 0.694000, 0.749000], [0.0, 0.0, 1.0] );
        self.train ( [0.667000, 0.541000, 0.796000, 1.000000], [0.0, 0.0, 1.0] );
        self.train ( [0.557000, 0.208000, 0.678000, 0.749000], [0.0, 0.0, 1.0] );
        self.train ( [0.529000, 0.584000, 0.745000, 0.918000], [0.0, 0.0, 1.0] );
        self.train ( [0.416000, 0.290000, 0.694000, 0.749000], [0.0, 0.0, 1.0] );
        self.train ( [0.557000, 0.376000, 0.780000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.918000, 0.416000, 0.949000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.835000, 0.376000, 0.898000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.804000, 0.667000, 0.863000, 1.000000], [0.0, 0.0, 1.0] );
        self.train ( [0.584000, 0.290000, 0.729000, 0.749000], [0.0, 0.0, 1.0] );
        self.train ( [0.388000, 0.208000, 0.678000, 0.792000], [0.0, 0.0, 1.0] );
        self.train ( [0.584000, 0.502000, 0.729000, 0.918000], [0.0, 0.0, 1.0] );
        self.train ( [0.945000, 0.749000, 0.965000, 0.875000], [0.0, 0.0, 1.0] );
        self.train ( [0.471000, 0.082000, 0.678000, 0.584000], [0.0, 0.0, 1.0] );
        self.train ( [0.361000, 0.333000, 0.663000, 0.792000], [0.0, 0.0, 1.0] );
        self.train ( [0.557000, 0.290000, 0.663000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.804000, 0.502000, 0.847000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.498000, 0.416000, 0.510000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.804000, 0.416000, 0.812000, 0.624000], [0.0, 0.0, 1.0] );
        self.train ( [1.000000, 0.749000, 0.914000, 0.792000], [0.0, 0.0, 1.0] );
        self.train ( [0.557000, 0.333000, 0.694000, 0.584000], [0.0, 0.0, 1.0] );
        self.train ( [0.945000, 0.416000, 0.863000, 0.918000], [0.0, 0.0, 1.0] );
        self.train ( [0.584000, 0.459000, 0.761000, 0.710000], [0.0, 0.0, 1.0] );
        self.train ( [0.722000, 0.459000, 0.745000, 0.831000], [0.0, 0.0, 1.0] );
        self.train ( [0.722000, 0.459000, 0.694000, 0.918000], [0.0, 0.0, 1.0] );
    }
    
    result += "<h3> Category 1. Setosa -> Left-most column is expected to gain values close to 1.0 </h3>";
    result += evaluatePropagation( self.propagate( [0.196000, 0.624000, 0.102000, 0.208000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.137000, 0.416000, 0.067000, 0.082000] ) );
    result += "<br />";
    result += evaluatePropagation(  self.propagate( [0.082000, 0.502000, 0.067000, 0.043000] ) );
    result += "<br />";
    result += evaluatePropagation(  self.propagate( [0.196000, 0.541000, 0.067000, 0.043000] ) );
    result += "<br />";
    result += "<br />";
    
    result += "<h3> Category 2. Versicolor  -> Middle column is expected to gain values close to 1.0 </h3>";   
    result += evaluatePropagation( self.propagate( [0.196000, 0.125000, 0.388000, 0.376000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.388000, 0.416000, 0.541000, 0.459000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.529000, 0.376000, 0.561000, 0.498000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.388000, 0.333000, 0.525000, 0.498000] ) );
    result += "<br />";
    result += "<br />";
    
    result += "<h3> Category 3. Virginica -> Right-most column is expected to gain values close to 1.0 </h3>";   
    result += evaluatePropagation( self.propagate( [0.694000, 0.502000, 0.831000, 0.918000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.667000, 0.416000, 0.714000, 0.918000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.612000, 0.416000, 0.714000, 0.792000] ) );
    result += "<br />";
    result += evaluatePropagation( self.propagate( [0.443000, 0.416000, 0.694000, 0.710000] ) );
    result += "</div>";
    return result;
}; // testTrain

function goIrisTest()
{
    var _inputNeuronCount  = 4;
    var _hiddenNeuronCount = 6;
    var _outputNeuronCount = 3;


    var _hidActvt = SGM;
    var _outActvt = LIN;

    var _alpha = 0.1;
    var _beta  = 0.0;

    // if undefined than they are chosen randomly
    var predefined_weight_values = undefined;
    
    var is_softmax = true;
    var mlp = new MLP( 
        _inputNeuronCount, 
        _hiddenNeuronCount, 
        _outputNeuronCount, 
        _hidActvt,
        _outActvt, 
        undefined,
        _alpha, 
        _beta,
        is_softmax
    );
    document.getElementById( "iris_test" ).innerHTML += mlp.irisTestTrain();
} // goIrisTest

function goXorTest()
{
    var _inputNeuronCount  = 3;
    var _hiddenNeuronCount = 20;
    var _outputNeuronCount = 1;
    var _hidActvt = SGM;
    var _outActvt = LIN;
    var _alpha = 0.1;
    var _beta  = 0.0;

    // if undefined than they are chosen randomly
    var predefined_weight_values = undefined;
    var is_softmax = false;
    var mlp = new MLP( 
        _inputNeuronCount, 
        _hiddenNeuronCount, 
        _outputNeuronCount, 
        _hidActvt,
        _outActvt, 
        undefined,
        _alpha, 
        _beta,
        is_softmax
    );
    document.getElementById( "x-or" ).innerHTML += mlp.testXOR();
} // goXorTest

MLP.prototype.testXOR = function() {
    var result = "<div>";
    var self = this;
    for ( var j = 0; j < 500; j++ )
    {
        self.train ( [0,0,0], [0] );
        self.train ( [1,0,0], [1] );
        self.train ( [0,1,0], [1] );
        self.train ( [0,0,1], [1] );
        self.train ( [1,1,0], [1] );
        self.train ( [1,0,1], [1] );
        self.train ( [0,1,1], [1] );
        self.train ( [1,1,1], [0] );
    }
    result += "<h3>Propagating to test results</h3>"
    result += "self.propagate( [0,0,0] ) neural net returns " + self.propagate( [0,0,0] ) + " which is correct: " + isAboveChance( self.propagate( [0,0,0] ), 0, 0.1 ) + " <br />";
    result += "self.propagate( [1,0,0] ) neural net returns " + self.propagate( [1,0,0] ) + " which is correct: " + isAboveChance( self.propagate( [1,0,0] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [0,1,0] ) neural net returns " + self.propagate( [0,1,0] ) + " which is correct: " + isAboveChance( self.propagate( [0,1,0] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [0,0,1] ) neural net returns " + self.propagate( [0,0,1] ) + " which is correct: " + isAboveChance( self.propagate( [0,0,1] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [1,1,0] ) neural net returns " + self.propagate( [1,1,0] ) + " which is correct: " + isAboveChance( self.propagate( [1,1,0] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [1,0,1] ) neural net returns " + self.propagate( [1,0,1] ) + " which is correct: " + isAboveChance( self.propagate( [1,0,1] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [0,1,1] ) neural net returns " + self.propagate( [0,1,1] ) + " which is correct: " + isAboveChance( self.propagate( [0,1,1] ), 1, 0.1 ) + " <br />";
    result += "self.propagate( [1,1,1] ) neural net returns " + self.propagate( [1,1,1] ) + " which is correct: " + isAboveChance( self.propagate( [1,1,1] ), 0, 0.1 ) + " <br />";
    result += "</br>"
    result += "</div>";
    return result;
} // testXOR


/** 
* @param {Array} The result of a propagation
* @return {String} The values close to 100% (1.0) are green
**/
function evaluatePropagation( arr ) {
    var res = "";
    for ( var key in arr ) {
        if ( arr.hasOwnProperty( key ) ) {
            if ( isAboveChance( arr[key], 1.0, 0.15 ) ) {
                res += "<font color='#009900'>&nbsp;" + arr[key] + "&nbsp;</font>";
            }
            else {
                res += "&nbsp;" + arr[key] + "&nbsp;";
            }
        }
    }
    return res;
} // evaluatePropagation

/**
* @param {Integer} percent
* @return {boolean} Return true if the absolute difference of the numbers is less than tollerance
**/
function isAboveChance( num1, num2, tollerance ) {
    return Math.abs( num1 - num2 ) < tollerance;
} // isAboveChance

function testXOR() {

} // testXOR