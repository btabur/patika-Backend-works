const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if(ctx.path==='/') {
        ctx.body = 'Anasayfaya hoşgeldiniz';
    }else if(ctx.path==='/about') {
        ctx.body = 'Hakkımızda Sayfası';
    }else if(ctx.path==='/contact') {
        ctx.body = 'İletişim Sayfası';
    }else {
        ctx.body = '404 Not found page';
    }
 
});

app.listen(3000);