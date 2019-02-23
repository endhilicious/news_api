
import { Article, ArticleSeo } from 'reactism/components/containers/'
import { getDetailBlogs } from 'reactism/actions/blogs'

const Index = ({ detail}) => {
  if (detail && Object.keys(detail).length > 0) {
    console.log(detail)
    return( <ArticleSeo data={ detail } />  )
    // return ( <><h1>hai</h1><h1>hai</h1><h1>hai</h1><h1>hai</h1><h1>hai</h1><h1>hai</h1></> )
  } else {
    return ( <Article /> )
  }
}

Index.getInitialProps = async ({ req, store, query }) => {
  if (req && req.headers['user-agent'].match(/bot|facebo/gi)) {
    const action = await getDetailBlogs(query.id)
    await store.dispatch(action)
    return action(store.dispatch, store.getState).then(payload => {
      return { detail: payload }
    })
  }
}

export default Index

