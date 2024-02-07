import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
        <h1>BlogPage</h1>
    <Link href="/blog/post-1">Post 1</Link>
    <Link href="/blog/post-2">Post 2</Link>
    </div>
  )
}

export default BlogPage