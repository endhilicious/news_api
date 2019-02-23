const routes = require('next-routes')
module.exports = routes()
  .add({ name: 'blog', pattern: '/', page: '/blogs/blogs' })
  .add({ name: 'blogs', pattern: '/blogs', page: '/blogs/blogs' })
  .add({ name: 'articles', pattern: '/blogs/articles', page: '/blogs/articles' })
