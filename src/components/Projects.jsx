import { React } from 'react'
import { UilBracketsCurly, UilMobileVibrate, UilDataSharing,  UilLink } from '@iconscout/react-unicons';
import { aisopProject, docuComp, rickMorty, passGen, dataViz } from '../assets';

const Projects = () => {
    const posts = [
        {
            title: "AIsop Adventure",
            image: aisopProject,
            content: "OpenAI, Vite-React - Frontend, Python/Flask - Backend, Redux, MySQL, Tailwindcss, Git",
            link: 'https://Aisop.io',
            icon: <UilLink/>,
        },
        {
            title: "Rick & Morty Trivia",
            image: rickMorty,
            content: "Triva game with User Score Board. RestAPI, Vite-React, Tailwindcss, NoSQL, Frontend and Backend Validations. Login and Reg Authentication.",
            link: 'https://github.com/illustrae/RnMTriviaGame',
            icon: <UilLink />,
        },
        {
            title: "DataViz",
            image: dataViz,
            content: "Application to Clean Dataframes with a friendly UI for easy use.",
            link: 'https://github.com/justinacgray/DataViz_Project',
            icon: <UilLink />,
        },
        {
            title: "Internal Dev Portal",
            image: docuComp,
            content: "Company Documentation Site",
            link: 'https://sojourn-dev-portal.vercel.app',
            icon: <UilLink />,
        },
        {
            title: "Password Generator",
            image: passGen,
            content: "Generate and manage secure passwords with desktop GUI",
            link: 'https://github.com/illustrae/Password-Gen',
            icon: <UilLink />,
        },

    ];
    const skills = [
        {
            id: ".01",
            title: "Web Development",
            content: "I'm proficient in a variety of web development technologies including CSS, HTML5, Javascript, Python and Java.",
            icon: <UilBracketsCurly />,
        },
        {
            id: ".02",
            title: "Mobile Development",
            content: "I'm familiar with mobile app development technologies like React Native, Flutter, and Swift.",
            icon: <UilMobileVibrate />,

        },
        {
            id: ".03",
            title: "API Integration",
            content: "I have experience intergrating and working with RESTful APIs and also building API's using Django framework.",
            icon: <UilDataSharing />,
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
                                <div className={`w-full bg-[${key === 0 ? '#24a9c0' : '#2c2d3f'}] shadow-md rounded-2xl py-4  px-4 lg:max-w-sm border border-[#24a9c0]`} key={key}>
                                    <div className="flex justify-end w-full ">
                                        <div className="text-[32px] text-[#181822] mb-6">
                                            {items.id}
                                        </div>
                                    </div>
                                    {items.media === 'image' ? (
                                        <img className="object-cover w-full h-36 rounded-1xl" src={items.source} alt="image" />
                                    ) : (

                                        <div className="flex items-center">
                                            <div className="text-[32px] text-white ">
                                                {items.icon}
                                            </div>
                                        </div>
                                    )}
                                    <div className="h-[120px] sm:mt-3">
                                        <h4 className={`${textColor} text-xl mb-2 text-left font-semibold`}>
                                            {items.title}
                                        </h4>
                                        <hr></hr>
                                        <p className={`${textColor} mb-2 text-[#000000] text-[12px] leading-normal`}>
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
                    <div id='' className="grid gap-6 p-6 -mt-4 lg:grid-cols-3 rounded-2xl place-items-center">

                        {posts.map((items, key) => {
                            return (
                                <div className="w-full bg-[#0c0d1b] shadow-md rounded-2xl lg:max-w-sm border border-[#24a9c0]" key={key}>

                                    <img className="object-cover w-full project-img rounded-1xl" src={items.image} alt="image" />
                                    <div className="h-[150px] p-2 lg:m-2 sm:mt-3">

                                        <h4 className="text-xl drop-shadow-md mb-2 text-left font-semibold text-[#24a9c0]">
                                            {items.title}
                                        </h4>

                                        <p className="mb-4 text-[#c0c0c0] text-[12px] leading-normal ">
                                            {items.content}
                                        </p>

                                        <a href={items.link} target="_blank" rel="noopener noreferrer" className='relative inset-x-1 sm:top-1 text-[#24a9c0]'>
                                            {items.icon}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Projects