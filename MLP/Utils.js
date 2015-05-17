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

function initArraySequence( size )
{
    var res = [];
    for ( var i = 0; i < size; i++ )
    {
        res.push( i );
    }
    return res;
} // initialiseArraySequence

function initArrayZeros( size )
{
     var res = [];
     for ( var i = 0; i < size; i++ )
    {
        res.push( 0 );
    }
    return res;
} // initialiseArrayZeros

function initArrayNulls( size )
{
    var res = [];
    for ( var i = 0; i < size; i++ )
    {
        res.push( null );
    }
    return res;
} // initialiseArrayZeros

function initArrayRandVals( size )
{
    var res = [];
    for ( var i = 0; i < size; i++ )
    {
        res.push( Math.random() * 2 - 1 );
    }
    return res;
} // initArrayRandVals

function initMLPRandVals( size )
{
    var res = [];
    for ( var i = 0; i < size; i++ )
    {
        res.push( ( Math.random() * 2 - 1 ) * 0.1 );
    }
    return res;
} // initArrayRandVals

function getArrayToString( arr, name )
{
    var result = name + ', ';
    for ( var key in arr )
    {
        if ( arr.hasOwnProperty( key ) )
        {
            result += arr[key] + ', ';
        }
    }
    result += '<br />';
    return result;
} // getgetArrayToString

function shuffleArray( arr )
{
    for ( 
        var j, x, i = arr.length; 
        i; j = Math.floor(Math.random() * i), 
        x = arr[--i], arr[i] = arr[j], arr[j] = x 
    );
    return arr;
} // shuffleArray

function checkUndefined( obj ) 
{
    if ( obj === undefined )
    {
        console.log( "Can be undefined" );
    }
} // checkUndefined

function checkNaN( obj )
{
    if ( isNaN( obj ) )
    {
        console.log( "Can be NaN" );
    }
} // checkNaN

function precise_round( num, decimals ) 
{
    return Math.round( num * Math.pow( 10, decimals ) ) / Math.pow( 10, decimals );
}