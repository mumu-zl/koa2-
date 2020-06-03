const Koa = require('koa')
const app = new Koa()

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
        ctx.body = ctx.request
        
    } 
    //其它请求显示404页面
    else {
        ctx.body = `<h1>404</h1>`
    }
})

app.listen(3001,()=>{
    console.log('starting')
})