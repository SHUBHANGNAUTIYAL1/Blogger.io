import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>


<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:shadow-2xl">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={service.getFilePreview(featuredImage)} alt={title}    className="w-full h-full"    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal ">
      {title}
    </h5>
   
  </div>

</div>  

    </Link>
  )
}

export default PostCard