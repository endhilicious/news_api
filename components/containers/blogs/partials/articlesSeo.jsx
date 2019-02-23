const Index = ({ data }) => {
  return (
    <>
        <h1 className="title-article">{ data.title }</h1>
        <img width="100%" src="https://pagefair.com/wp-content/uploads/2013/09/blog6.jpg" alt="img-alt"/>
        <article>{ data.body }</article>
    </>
  )
}

export default Index
