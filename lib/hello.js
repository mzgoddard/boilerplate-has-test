/*
 * boilerplate-has-test
 * https://github.com/mzgoddard/boilerplate-has-test
 *
 * Copyright (c) 2012 Michael "Z" Goddard
 * Licensed under the MIT license.
 */

/*global define:false*/

;(
  /**
   * @param {Window} window
   * @param {?=} undefined
   */
  function( window, undefined ) {
    var freeExports = false;
    // must be loaded before! ( this may be done for r.js with the include option )
    // wait how to do get has?
    var has = window.has || require( 'has' );
    // has understands AMD and will define itself that way if available

    if ( has( 'module.exports' ) ) {
      freeExports = exports;
      if ( has( 'module.global' ) ) { window = global; }
    }

    /** @return {Hello} */
    var defineModule = function( has, hastests ) {

      var test = {};

      /**
       * @constructor */
      function Hello() {}

      test.Hello = Hello;

      /** @deprecated I'm deprecated, LOL. */
      Hello.prototype.hello = function() {
        console.log( 'hello world', typeof define, typeof require, !!has( 'module.nodejs' ), !!has( 'env.nodejs' ), !!has( 'env.browser' ) );
        if ( has( 'env.browser' ) ) {
          var p = document.createElement( 'p' );
          p.innerText = 'hello world';
          document.body.appendChild( p );
        }
      };

      /**
       * @deprecated
       * @return {Hello} */
      Hello.create = function() {
        return new Hello();
      };

      new Hello().hello();

      Hello.create().hello();

      return new Hello();

    };

    if ( has( 'module.amd' ) ) {
      // define as an anonymous module
      define( [ 'has', 'hastests' ], defineModule );
    }

    else if ( has( 'module.exports' ) ) {
      var hello = defineModule( has, require( 'hastests' ) );

      // in Node.js or RingoJS v0.8.0+
      if ( has( 'module.nodejs' ) ) {
        module.exports = hello;
      }

      // in Narwhal or RingoJS v0.7.0-
      else {
        freeExports.hello = hello;
      }
    }

    else {
      // in a browser or Rhino
      window.hello = defineModule( has, window.hastests );
    }

  }( this ));
