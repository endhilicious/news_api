import { useEffect } from 'react';
import { css } from 'emotion'
import { LoadingNews }  from 'reactism/containers'
import SubArticles from './partials/subArticles'
import InfiniteScroll from 'react-infinite-scroller';
// Redux
import { connect } from 'react-redux'
import { getBlogs } from 'reactism/actions/blogs'


const Index = ({ getBlogs, blogs }) => {
  useEffect(() => {
    getBlogs()
  }, [])

  const gridStyle = css`
    width: 60%;
    margin: auto;
    @media screen and (max-width: 600px) { 
      width: 90%;
    }
  `
  const baseStyle = css`
    padding: 100px 0px;
    .main-text {
      margin-top: 0px;
      font-size: 2.5rem;
      font-weight: 500;
    }
    hr {
      margin: 40px 0px;
      opacity: 0.2;
    }
  `
  const loadFunc = () => {

  }
  return (
    <>
      <div className={ gridStyle }>
        <div className={ baseStyle }>
          {
            blogs.length > 0
            ?
              <InfiniteScroll
                pageStart={0}
                loadMore={ loadFunc }
                hasMore={ true }
                loader={<div className="loader" key={0}>Loading ...</div>}
              >
                {
                  blogs.map((item, index) => {
                    return(
                      <div key={ index }>
                        <SubArticles items={ item } />
                      </div>
                    )
                  })
                } 
              </InfiniteScroll>
            :
              <>
                <LoadingNews />
                <LoadingNews />
                <LoadingNews />
              </>
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return { blogs: state.blogs.blogs };
};

export default connect(mapStateToProps, {
  getBlogs
})(Index)
