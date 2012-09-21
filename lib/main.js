/*
 * boilerplate-has-test
 * https://github.com/mzgoddard/boilerplate-has-test
 *
 * Copyright (c) 2012 Michael "Z" Goddard
 * Licensed under the MIT license.
 */

 /*global define:false*/

;(function( window, undefined ) {
  var freeExports = false;
  // must be loaded before! ( this may be done for r.js with the include option )
  // wait how to do get has?
  var has = window.has || require( 'has' );
  // has understands AMD and will define itself that way if available

  if ( has( 'module.exports' ) ) {
    freeExports = exports;
    if ( has( 'module.global' ) ) { window = global; }
  }

  var defineModule = function( $$deps$$ ) {
    console.log( 'hello world', typeof define, typeof require, !!has( 'module.nodejs' ), !!has( 'env.nodejs' ) );
    if ( typeof document === 'object' ) {
      var p = document.createElement( 'p' );
      p.innerText = 'hello world';
      document.body.appendChild( p );
    }
    var $$module$$ = function() {};
    return $$module$$;
  };

  if ( has( 'module.amd' ) ) {
    // define as an anonymous module
    require([  ], defineModule );
  }

  else if ( has( 'module.exports' ) ) {
    // var $$deps$$   = require( '$$deps$$' );
    var $$module$$ = defineModule(  );

    // in Node.js or RingoJS v0.8.0+
    if ( has( 'module.nodejs' ) ) {
      module.exports = $$module$$;
    }

    // in Narwhal or RingoJS v0.7.0-
    else {
      freeExports.$$module$$ = $$module$$;
    }
  }

  else {
    // in a browser or Rhino
    window.$$module$$ = defineModule( window.$$deps$$ );
  }

}( this ));
