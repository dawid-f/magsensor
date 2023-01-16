import React, { useContext } from 'react'
import { Layout, Seo, Header, NewsFeed, Pagination } from '../components/index'
import { GatsbyContext } from '../context/context'
const AboutPage = () => {
  const {
    loading,
    newsData,
    setLoading,
    setNewsData,
    newsInfo,
    currentPosts,
    paginate,
    postsPerPage,
  } = useContext(GatsbyContext)
  return (
    <Layout>
      <Seo title='Aktualności' />
      <Header title='aktualności'></Header>
      <NewsFeed posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={newsData.length}
        paginate={paginate}
      />
    </Layout>
  )
}

export default AboutPage
