import React, {useEffect, useState} from 'react'
import service from "../appwrite/config";
import {Container} from '../components'

import HomeCards from './HomeCards';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    
        return (
            <div className="w-full py-8 mt-4 text-center bg-gray-100">

    <Container>
     
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto animate-fade-in">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to Our Blogging Site</h1>
                <p className="text-lg text-gray-black  mb-6">Explore insightful articles, stories, and discussions from our community.</p>
                <p className="text-lg text-black mb-6 ">Let’s dive deeper into the world of ideas and creativity. 🌟✨</p>

            </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        </div>
    </aside>
    <div className="mt-4  animate-fade-in">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us?</h2>
                    <ul className="text-left text-lg text-black">
                        <li className="mb-2"><span className="text-green-500">&#10003;</span> Diverse range of topics to explore.</li>
                        <li className="mb-2"><span className="text-green-500">&#10003;</span> Engaging and thought-provoking content.</li>
                        <li className="mb-2"><span className="text-green-500">&#10003;</span> Community-driven discussions.</li>
                        <li className="mb-2"><span className="text-green-500">&#10003;</span> Regularly updated with fresh perspectives.</li>
                    </ul>
    </div>
    

    <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
    </div>
    <div className="mt-8  animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-black mb-2">At our blogging site, our mission is to provide a platform for sharing knowledge, insights, and experiences.</p>
            <p className="text-lg text-black mb-2">We aim to foster meaningful discussions and promote learning in a welcoming and inclusive environment.</p>
        </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20  animate-fade-in">
    
       <HomeCards title={"Latest Articles"} article1={"AI-Generated Valentine’s Day Love Letters"} article2={"The Rise of Sustainable Fashion"} article3={"Tips for Boosting Your Productivity"} imag={'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg'}/>
       <HomeCards title={"Featured Stories"} article1={"The Art of Mindfulness"} article2={"Finding Joy in Small Things"} article3={"Haiku of Seasons"} imag={'https://insuranceblog.accenture.com/wp-content/uploads/2019/06/Tech_Trends.jpg '}/>
       <HomeCards title={"Community Discussion"} article1={"The Future of Remote Work"} article2={"Climate Change and Renewable Energy"} article3={"Ethical Artificial Intelligence"} imag={'https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future.jpg'} />
    </div>

<div className="mt-8 pt-20  animate-fade-in">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Join Our Community Today!</h2>
                    <p className="text-lg text-black mb-2">Don't miss out on the latest insights and discussions. Become a part of our community today!</p>
                    <p className="text-lg text-black mb-2">Share your thoughts, ideas, and experiences with like-minded individuals.</p>
</div>


        </Container>
</div>

        )
    
   
}

export default Home