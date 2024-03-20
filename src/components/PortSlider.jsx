import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsList } from "../utils/data/projects";


function PortSlider() {
  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: true,
    
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {projectsList.map((project, index) => (
        <div key={index} className='flex'>
          <div className='mb-4 square'>
            <div className="p-5 text-sm text-left text-[#070064]">
              <img src={project.image} alt={project.project_name} />
              <div className="text-center text-[#CCA43B] m-2"> 
                <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Project</a>
              </div>
              <h2><span className="font-bold">Project Name:</span> {project.project_name}</h2>
              <p><span className="font-bold">Contribution:</span> {project.contribution}</p>
              <p><span className="font-bold">Tech:</span> {project.tech}</p>
              <p><span className="font-bold">Description:</span> {project.description}</p>
              
            </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default PortSlider