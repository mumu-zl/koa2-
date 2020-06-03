const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

//路由设置不同层级
let home = new Router()
home.get('/jspang',async(ctx)=>{
    ctx.body = ctx.query  //ctx. 获取参数
}).get('/todo',async(ctx)=>{
    ctx.body = 'Home todo'
})

let page = new Router()
page.get('/jspang',async(ctx)=>{
    ctx.body = "Page jspang"
}).get('/todo',async(ctx)=>{
    ctx.body = 'Page todo'
})

//装载所有子路由
let router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),home.allowedMethods())

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('starting')
})