import React from 'react'

function HomeCards({title,article1,article2,article3,imag}) {
  return (
    <div className="relative flex flex-col h-full min-w-0 p-4 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border hover:shadow-2xl hover:bg-black ">
  <div className="relative h-full overflow-hidden bg-cover rounded-xl" style={{ backgroundImage: `url(${imag})` }}>
    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
    <div className="relative z-10 flex flex-col flex-auto h-full p-4">
      <h5 className="pt-2 mb-6 font-bold text-white">{title}</h5>
      <ul className="divide-y divide-gray-300">
            <li className="py-2">
                <a href="#" className="text-white  hover:text-blue-600 ">{article1}</a>
            </li>
            <li className="py-2">
                <a href="#" className="text-white  hover:text-blue-600">{article2}</a>
            </li>
            <li className="py-2">
                <a href="#" className="text-white  hover:text-blue-600">{article3}</a>
            </li>
    
        </ul>
    </div>
  </div>
</div>
  )
}

export default HomeCards