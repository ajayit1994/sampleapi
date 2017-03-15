/**
 * Module Dependency
 */
var koa = require('koa');
var router = require('koa-router')();
// create koa fremwork instance
var app = new koa();


// api routes
router.get('/', function*(next) {
    console.log('router / get');
    this.body = "Hello World";
    yield next;
});

// middleware
app.use(router.routes())
    .use(router.allowedMethods());

// api listiening on port 4002
app.listen(4002, function() {
    console.log('app listening on port 4002');
})