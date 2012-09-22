if ( process.argv.length === 2 || process.argv[ 2 ] !== 'node' ) {

  var r = require( 'requirejs' );
  r.config( {
    nodeRequire: require,
    mainConfigFile: 'config',
    name: 'config' } );

  r( 'config' );

} else {

  // either set node path for vender libs or create fake node_modules
  process.env.NODE_PATH = '../vendor/';

  require( './hastests' );
  require( './main' );

}
