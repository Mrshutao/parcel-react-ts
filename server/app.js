const koa = require('koa')
const router = require('koa-router')()
const app = new koa()
const path = require('path')
const static = require('koa-static')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

const static_path = path.join(__dirname, '../build')
app.use(static(static_path))
app.use(
    views(static_path, {
        map: {
            html: 'ejs',
        },
    })
)

router.get('*', async (ctx, next) => {
    if (ctx.query && ctx.query.mockId) {
        await proxy(ctx, next)
    } else {
        await ctx.render('index.html')
    }
})
app.use(router.routes())

const argv = process.argv
let port_index = argv.findIndex(item => item === 'port')
let port = port_index !== -1 ? argv[port_index + 1] : 9000

app.listen(port, '0.0.0.0', 'localhost', () => {
    console.log('app start from koa')
})
