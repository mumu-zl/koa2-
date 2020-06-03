//对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中。

const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(async(ctx)=>{
    if(ctx.url==="/"&&ctx.method==="GET") {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName"/> <br/>
                <p>age</p>
                <input name="age"/> <br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    } 
    //当请求时POST请求时
    else if(ctx.url==="/"&&ctx.method==="POST") {
        let postData = ctx.request.body;
        ctx.body = postData;
    } 
    //其它请求显示404页面
    else {
        ctx.body = `<h1>404</h1>`
    }
})

app.listen(3001,()=>{
    console.log('starting')
})