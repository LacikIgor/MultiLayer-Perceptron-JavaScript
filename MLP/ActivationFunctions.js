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
 * @param {type} iact
 * @param {type} type
 * @returns {Number}
 */
function activationFunction( iact, type )
{
    var result = 0.0;
    if ( type === LIN )
    {
        result = iact;
    }
    else if ( type === SGM )
    {
        result = 1 / ( 1 + Math.exp( -iact ) );
    }
    else if ( type === TANH )
    {
        result = ( Math.exp( iact ) - Math.exp( -iact ) ) / ( Math.exp( iact ) + Math.exp( -iact ) );
    }
    else
    {
        alert( "INVALID ACTIVATION FUNCTION TYPE " + type );
    }   
    
    return result;
} // activation function

/**
 * @param {type} iact
 * @param {type} type
 * @returns {Number}
 */
function derivateActivationFunction( iact, type )
{
    var result = 0.0;
    if ( type === LIN )
    {
        result = 1.0;
    }
    else if ( type === SGM )
    {
        result = iact * ( 1 - iact );
    }
    else if ( type === TANH )
    {
        result = 1.0 - iact * iact;
    }
    else
    {
        alert( "INVALID ACTIVATION FUNCTION TYPE " + type );
        result = 1.0;
    }
    
    return result;
} // activationFunctionDerivation