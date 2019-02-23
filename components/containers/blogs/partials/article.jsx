import { useState, useEffect } from 'react'
import { css } from 'emotion'
import { LoadingDetail }  from 'reactism/containers'
import { withRouter } from 'next/router'
import { InView } from 'react-intersection-observer'
// Redux
import { connect } from 'react-redux'
import { getDetailBlogs } from 'reactism/actions/blogs'

const Index = ({ getDetailBlogs,...props}) => {

  const [ detail, setDetail ] = useState(detail)
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDetailBlogs(props.router.query.id)
    .then(() => {
      setIsLoading(false);
    })
    .catch(() => console.log('err'))

  }, [detail])
  const baseStyle = css`
    width: 100%;
    float: left;
    padding: 10px 0px;
    a {
      text-decoration: none;
      color: #1798D1;
    }
    .action {
      width: 100%;
      float: left;
      .category {
        float: left;
      }
      .comments {
        float: right;
        span {
          font-size: 0.9rem;
          padding: 4px;
          opacity: 0.4;
          position: relative;
          top: -5px;
        }
        .icons-share {
          padding-left: 43px;
        }
      }
    }
    .creator-date {
      font-size: 0.8rem;
      opacity: 0.3;
    }
    .title-article {
      font-size: 1.3rem;
      font-weight: 500;
    }
    .content {
      font-size: 0.85rem;
      opacity: 0.7;
      line-height: 24px;
    }
    .category {
      font-size: 0.85rem;
      color: #1798D1;
    }
    .text-comments {
      background-color: #F5F7FA;
      padding: 10px;
      margin: 10px auto;
      p {
        margin: 0px;
      }
      img {
        border-radius: 50%;
        width: 40px;
      }
      .user-detail-comments {
        width: 100%;
        height: 50px;
        img {
          float: left;
        }
        p {
          padding-left: 50px;
        }
        .name {
          padding-top: 7px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .time {
          font-size: 0.7rem;
          opacity: 0.3;
        }
      }
      .text-detail-comments {
        font-size: 0.85rem;
        opacity: 0.7;
        padding-left: 50px;
        width: calc((100% - 50px));
      }
    }
    .button-more-comments {
      text-align: center;
      padding: 15px;
    }
    @media screen and (max-width: 600px) {
      .action .comments {
        float: left;
        margin: 16px 0px;
      }
      .action {
        display: grid;
      }
    }
  `
  return (
    <div className={ baseStyle }>
    {
      Object.keys(props.detail).length > 0 && isLoading === false
      ?
        <>
          <div>
            <p className="title-article">{ props.detail.title }</p>
            <div className="contents-article">
            <InView>
              {({ inView, ref }) => (
                <img ref={ ref } width="100%" src={ inView ? "https://pagefair.com/wp-content/uploads/2013/09/blog6.jpg" : null } alt="img-alt"/>
              )}
            </InView>
              <p className="content">{ props.detail.body }</p>
            </div>
          </div>
        </>
      :
      <LoadingDetail />
    }

    </div>
  )
}

const mapStateToProps = state => ({
  detail: state.blogs.detail
})

export default withRouter(connect(mapStateToProps, {
  getDetailBlogs
})(Index))
