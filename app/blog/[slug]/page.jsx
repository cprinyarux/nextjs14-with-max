import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import React from 'react'

const Blog
 = ({params}) => {
  return (
    <div>
        <h1> Blog details</h1>
        <p>{params.slug}</p>

    </div>
  )
}

export default Blog
