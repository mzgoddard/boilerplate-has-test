// requirejs config
require.config({
  deps: [ 'main' ],

  paths: {
    vendor: '../vendor',
    has: '../vendor/has'
  },

  shim: {
    main: {
      deps: [ 'has', 'hastests' ]
    }
  }
});
