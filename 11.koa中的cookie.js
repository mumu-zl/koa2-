const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=> {
    if(ctx.url==='/index') {
        ctx.cookies.set(
            'Myname' , 'jsPang'
        )
        ctx.body = 'cookie is ok'
    } else {
        ctx.body = 'helow world'
    }
})

app.listen(3000,()=>{
    console.log('starting')
})