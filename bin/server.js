var path = require( 'path' ),
    spawn = require( 'child_process' ).spawn;

process.chdir( path.normalize( __dirname + '/../lib/' ) );

if ( process.argv.length === 2 || process.argv[ 2 ] !== 'node' ) {

  var r = require( 'requirejs' );
  r.config( {
    nodeRequire: require,
    mainConfigFile: 'config',
    baseUrl: '../lib/',
    name: 'config' } );

  r( 'config' );

} else {

  try { 
    require( 'has' );

    require( '../lib/hastests' );
    require( '../lib/main' );
  } catch ( e ) {
    var vendorPath = path.normalize( __dirname + '/../vendor/' );

    process.env.NODE_PATH = vendorPath;
    var child = spawn( 'node', [ 'server.js', 'node' ], {
      cwd: __dirname
    } );
    child.stdout.pipe( process.stdout );
    child.stderr.pipe( process.stderr );
  }

}
