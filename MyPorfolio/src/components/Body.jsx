import React from 'react'

export const Body = () => {
  return (
    <div id="about" className='h-screen w-full bg-[url("/src/assets/aboutbg.jpg")] bg-cover bg-no-repeat bg-center'>
        <div className='flex flex-col justify-center items-center'>
            <div className='pt-30'>
                <div className='flex justify-center items-center'>
                    <div className='bg-black p-2 rounded-2xl h-15 w-50'>
                        <h1 className="text-4xl text-white m-auto text-center font-bold">About me</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:flex-row'>
                <div className='md:pl-15 w-full px-5 md:w-1/2 pt-10'>
                    <p className='text-sm'>
                        I am a Software Engineer and Graphic Designer driven by the challenge of turning complex logic into seamless digital experiences. With a background rooted in engineering principles and a self-taught eye for visual communication, I specialize in building solutions that are as functional as they are aesthetically engaging.   <br /><br />
                        My approach to development is defined by a commitment to continuous growth and professional excellence. I thrive on the intersection of data-driven backend systems and intuitive frontend design, consistently seeking out projects that push me to refine my technical craftsmanship. Whether I am architecting scalable APIs or crafting visual identities for growing businesses, my goal is always the same: to deliver impactful, high-quality results that solve real-world problems.<br /><br />
                        Beyond the code, I am a firm believer in the power of collaboration and adaptability. I enjoy working with diverse teams to bridge the gap between technical requirements and user-centric design, ensuring every project I touch is built for performance and longevity.
                    </p>
                </div>
                <div className="m-auto px-10 md:w-1/2">
                    <img src="/src/assets/ab.png" alt="" />
                </div>
            </div>
            <div className='py-10'>
                <a href="Portfolio\MyPorfolio\src\assets\Gacanga Alex Mwangi CV.pdf" download><button className='bg-indigo-700 text-white font-bold w-40 h-10 rounded-2xl shadow-2xl hover:bg-indigo-600 cursor-pointer'>Download Cv</button></a>
            </div>
        </div>
    </div>
  )
}
