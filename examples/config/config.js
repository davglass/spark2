
module.exports = {
    env: 'production',
    port: 4321,
    host: '127.0.0.1',
    verbose: true,
    'no-color': true,
    eval: ['require('util').puts("anything you want!")',
           'require('util').puts("or use an array for several flags")']
}