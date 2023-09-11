import {React} from 'react'
import ReactPlayer from 'react-player'
import {github} from '../assets'

const Projects = () => {
    const posts = [
        {
            title: "AIsop Adventure",
            media: 'youtube',
            source: 'https://youtu.be/PcnobSawn_0',
            content: "OpenAI, Vite-React - Frontend, Python/Flask - Backend, Redux, MySQL, Tailwindcss, Git",
            link: 'https://Aisop.io'
        },
        {
            title: "Rick & Morty Trivia",
            media: 'youtube',
            source: "https://www.youtube.com/watch?v=lqjzcVGT-7g",
            content: "RestAPI, Vite-React, Tailwindcss, NoSQL, Frontend and Backend Validations. Login and Reg Authentication.",
            link: 'https://github.com/illustrae/RnMTriviaGame'
        },
        {
            title: "Covert Chat",
            media: 'youtube',
            source: "https://youtu.be/oVRLuUqN9FY",
            content: "Messenger and Chat App, Python, Flask, SocketIO. Validations, Login and Registration."
        },

    ];
    return (
        <>
            <div id='projects' className="grid gap-2 lg:grid-cols-3 bg-[#ae1c1c] rounded-2xl p-10 place-items-center">
                {posts.map((items, key) => (
                    <div className="w-full rounded-2xl shadow-md bg-gray-700 lg:max-w-sm" key={key}>
                        {items.media === 'image' ? (
                            <img className="object-cover w-full rounded-2xl h-48" src={items.source} alt="image" />
                        ) : (
                            <div className="h-48">
                                <ReactPlayer
                                    className="react-player"
                                    url={items.source}
                                    controls
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        )}
                        <div className="p-4 lg:m-2 h-[200px] sm:mt-3">
                            <h4 className="text-xl drop-shadow-md bg-white p-1 mb-2 rounded-full text-center font-semibold text-[#ae1c1c]">

                                {items.title}
                            </h4>
                            <p className="mb-2 text-white h-[60px] leading-normal">
                                {items.content}
                            </p>
                            <a href={items.link} target="_blank" rel="noopener noreferrer" className='relative inset-x-1 top-8 sm:relative sm:inset-x-1 sm:top-6'>
                                <img src={github} className='w-[40px]' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Projects