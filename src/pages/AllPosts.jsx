import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    service.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full '>
        <h1 className=' text-2xl font-serif font-bold text-blue-800 text-center pb-14 pt-14 animate-fade-in'>Delve into your post archive, a rich tapestry of your thoughts and experiences, waiting to be explored!</h1>
        <Container>
            <div className='flex flex-wrap gap-32 '>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4 pb-10 '>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts