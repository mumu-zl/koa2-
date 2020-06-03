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
        let postData = await parsePostData(ctx);
        ctx.body = postData
    } 
    //其它请求显示404页面
    else {
        ctx.body = `<h1>404</h1>`
    }
})

app.listen(3001,()=>{
    console.log('starting')
})

function parsePostData(ctx) {
    return new Promise((resolve,reject)=>{
        try{
            let postData="";
            ctx.req.on('data',(data)=>{
                postData += data
            })
            ctx.req.addListener("end",function(){
                let parseData = parseQueryStr(postData)
                resolve(parseData)
            })
        }catch(error) {
            reject(error);
        }
    })
}

function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for(let[index,queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}