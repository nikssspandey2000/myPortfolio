import React from 'react'
// import Posts from './articles/Posts'
import ArticleCard from './articles/ArticleCard'

const Articles = () => {
  return (
    <div className='p-8'>
      <h2 className='text-center text-2xl font-semibold font-mono'>My Articles ✒️</h2>
      <ArticleCard/>
    </div>
  )
}

export default Articles