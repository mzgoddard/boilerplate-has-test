// either set node path for vender libs or create fake node_modules
process.env.NODE_PATH = '../vendor/';

require( './hastests' );
require( './main' );
