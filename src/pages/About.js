import React, { useEffect, useRef } from 'react'
import "../PageStyles/About.css";
import Fade from 'react-reveal/Fade';

const expressLink = "https://camo.githubusercontent.com/219d6a3630f0e1bf015780dec8b485c5bd09a541ae52ce3380c8ad0baf680622/68747470733a2f2f6d706e672e737562706e672e636f6d2f32303139303430312f7a73662f6b697373706e672d6d6f6e676f64622d646f63756d656e742d6f7269656e7465642d64617461626173652d6e6f73716c2d6f70656e73686966742d7765622d6170702d646576656c6f706d656e742d736572766369652d696e2d646568726164756e2d35636131623863623861306633322e333730383237383131353534313032343735353635352e6a7067" ;

const frontend_skills = [
  "html",
  "css3",
  "sass",
  "bootstrap",
  "figma",
  "tailwind",
  "material",
  "javascript",
  "typescript",
  "react",
  "redux",
  "nextjs",
];
const backend_skills = [
  "nodejs",
  "express",
  "mongodb",
  "mysql",
  "sequelize",
  "laravel",
  "prisma",
  "docker",
  "digitalocean",
  "firebase",
  "strapi"
];
const native_skills = [
  "react-native",
  "expo",
  "styled-components",
]

function About() {
  const containerRef = useRef(null);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0 && containerRef.current) {
      // Scroll to the container element
      containerRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='about'>
      <div className='about_me' ref={containerRef}>
        <Fade bottom cascade>
          <div className='about_me_headings'>
            <h1 className='heading'>Who Am I?</h1>
            <h2>Few words about me.</h2>
            <div>
              <p>
              Full Stack Developer with three years of experience, I have worked on a range of projects, developing expertise in frontend technologies like HTML, CSS, JavaScript, React, and Next.js, along with backend skills in Node.js, MySQL, MongoDB, Sequelize, and Laravel. My proficiency also extends to mobile development using React Native, and I possess advanced DevOps skills, including version control, shell scripting, deployment strategies, and experience with tools like Docker and DigitalOcean. These additional capabilities enable me to ensure high-quality and efficient project outcomes while maintaining a robust and streamlined development workflow.
              </p>
            </div>
          </div>
          
          <div className='about_me_headings'>
            <div className='about_me_services_headings'>
              <h1>What I can do?</h1>
              <h2>My services</h2>
            </div>

            <div className='about_me_services_containers'>
              <Fade>
                <div>
                  <h3>Frontend Apps</h3>
                  <p>
                    Ensuring that website visitors can easily interact with the page. 
                    Use modern tech such as React Js , Sass and redux.
                  </p>
                  {/* list of frontend skills dotted*/}
                  <div className='about_me_services_containers_list'>
                  {frontend_skills.map((skill, index) => (
                    <div key={index}>
                      <img src={`./assets/frontend/${skill}.png`} alt={skill}/>
                    </div>
                  ))}
                  </div>
                </div>
              </Fade>
              
              <Fade>
                <div>
                  <h3>Backend Apps</h3>
                  <p>
                  Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB.
                  </p>
                  <div className='about_me_services_containers_list'>
                  {backend_skills.map((skill, index) => (
                    <div key={index}>
                      <img src={`./assets/backend/${skill}.png`} alt={skill}/>
                    </div>
                  ))}
                  </div>
                </div>
              </Fade>
              
            <Fade>
              <div>
                <h3>Native Apps</h3>
                <p>
                Use React Native for building simple native mobile applications. React Native is modern, fast, cross-platform, and popular.
                </p>
                <div className='about_me_services_containers_list'>
                {native_skills.map((skill, index) => (
                  <div key={index}>
                    <img src={`./assets/native/${skill}.png`} alt={skill}/>
                  </div>
                ))}
                </div>
              </div>
            </Fade>
              
            </div>

          </div>


        </Fade>

      </div>
      
      
    </div>
  );
};



export default About;