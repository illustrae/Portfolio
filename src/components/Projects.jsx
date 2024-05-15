import { React } from 'react'
import ReactPlayer from 'react-player'
import { github } from '../assets'

const Projects = () => {
    const posts = [
        {
            title: "AIsop Adventure",
            media: 'youtube',
            content: "OpenAI, Vite-React - Frontend, Python/Flask - Backend, Redux, MySQL, Tailwindcss, Git",
            link: 'https://Aisop.io'
        },
        {
            title: "Rick & Morty Trivia",
            media: 'youtube',
            content: "RestAPI, Vite-React, Tailwindcss, NoSQL, Frontend and Backend Validations. Login and Reg Authentication.",
            link: ''
        },
        {
            title: "Covert Chat",
            media: 'youtube',
            content: "Messenger and Chat App, Python, Flask, SocketIO. Validations, Login and Registration."
        },

    ];
    const skills = [
        {
            title: "Web Development",
            content: "OpenAI, Vite-React - Frontend, Python/Flask - Backend, Redux, MySQL, Tailwindcss, Git",
        },
        {
            title: "Mobile Development",
            content: "RestAPI, Vite-React, Tailwindcss, NoSQL, Frontend and Backend Validations. Login and Reg Authentication.",
          
        },
        {
            title: "API Integration",
            content: "Messenger and Chat App, Python, Flask, SocketIO. Validations, Login and Registration."
        },

    ];
    return (
        <>
            <div className="flex flex-col items-center sm:p-12 sm:mt-4">
                <div className="flex flex-col items-center">
                    <div className="block text-center">
                        <p className='text-[#2c2d3f] text-[12px] font-semibold mx-1 mt-4 '>SKILLS</p>
                        <p className='text-[#c0c0c0] text-[24px] font-semibold mx-1'>
                        Technical<span className='text-gradient'> Proficiencies. </span>
                        </p>
                    </div>
                    <div id='projects' className="grid gap-6 p-8 lg:grid-cols-3 rounded-2xl -mt-4 place-items-center sm:w-[70%]">
                        {skills.map((items, key) => {
                            const textColor = key === 0 ? 'text-[#000000]' : 'text-[#24a9c0]';

                            return (
                                <div className={`w-full bg-[${key === 0 ? '#24a9c0' : '#2c2d3f'}] shadow-md rounded-2xl lg:max-w-sm border border-[#24a9c0]`} key={key}>
                                    {items.media === 'image' ? (
                                        <img className="object-cover w-full h-36 rounded-1xl" src={items.source} alt="image" />
                                    ) : (
                                        <div className="h-36">
                                            
                                        </div>
                                    )}
                                    <div className="h-[120px] p-2 lg:m-2 sm:mt-3">
                                        <h4 className={`${textColor} text-xl mb-2 text-left font-semibold`}>
                                            {items.title}
                                        </h4>
                                        <hr></hr>
                                        <p className={`${textColor} mb-2 text-[#c0c0c0] text-[12px] leading-normal`}>
                                            {items.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

                <div className="flex flex-col items-center mt-4">
                    <div className="block mb-1 text-center">
                        <p className='text-[#2c2d3f] text-[12px] font-semibold mx-1'>PROJECTS</p>
                        <p className='text-[#c0c0c0] text-[24px] font-semibold mx-1'>
                            Creative <span className='text-gradient'> Endeavors. </span>
                        </p>
                    </div>
                    <div id='' className="grid gap-6 p-8 -mt-4 lg:grid-cols-3 rounded-2xl place-items-center">

                        {posts.map((items, key) => (
                            <div className="w-full bg-[#0c0d1b] shadow-md rounded-2xl lg:max-w-sm border border-[#24a9c0]" key={key}>
                                {items.media === 'image' ? (
                                    <img className="object-cover w-full h-36 rounded-1xl" src={items.source} alt="image" />
                                ) : (
                                    <div className="h-36">
                                        <ReactPlayer
                                            className="react-player"
                                            url={items.source}
                                            controls
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                )}
                                <div className="h-auto p-2 lg:m-2 sm:mt-3">

                                    <h4 className="text-xl drop-shadow-md mb-2 text-left font-semibold text-[#24a9c0]">
                                        {items.title}
                                    </h4>

                                    <p className="mb-2 text-[#c0c0c0] text-[12px] h-[40px] leading-normal">
                                        {items.content}
                                    </p>

                                    <a href={items.link} target="_blank" rel="noopener noreferrer" className='relative inset-x-1 sm:top-2'>
                                        <img src={github} className='w-[40px]' />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Projects