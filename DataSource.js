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

var BIAS_THRESHOLD_VAL = -1;

var inputs = [
   [ -1, 1, 1 ],
   [ -1, 0, 1 ],
   [ -1, 1, 0 ],
   [ -1, 0, 0 ]
];

var targets = [
  [ 0 ],
  [ 1 ],
  [ 1 ],
  [ 0 ]
];

/**
 * @param {Array}   input ( E.G. [ 1,1 ] )
 * @param {Integer} neuron_index
 * @returns {Integer} one input signal based on the neuron idnex
 */
function getInputValue( input, neuron_index )
{
    neuron_index--;
    return input[neuron_index];
} // getInputValue

function getTarget( input, neuron_index )
{
    neuron_index--;
    return input[neuron_index];
} // getTarget

function getDesiredOuput( index, output_size )
{
    var res = training_data[index];
    res = res.slice( Math.max( res.length - output_size, 1 ) );
    return res;
} // getOutput