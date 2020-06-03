const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 在所有的路径前面都加上一个jspang层级，把路径变成http://127.0.0.1:3000/jspang/todo.这时候就可以使用
// 层级来完成这个功能。路由在创建的时候是可以指定一个前缀的，这个前缀会被至于路由的最顶层，也就是说，这个路由
// 的所有请求都是相对于这个前缀的。设置前缀一般都是全局的，并不能实现路由的层级
const router = new Router({
    prefix:'/jspang'   //关键代码
})

router.get('/', (ctx,next)=>{
    ctx.body = 'hello world'
})
.get('/todo',(ctx,next)=>{
    ctx.body = 'hello todo'
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    app.listen(3000,()=>{
        console.log('starting')
    })