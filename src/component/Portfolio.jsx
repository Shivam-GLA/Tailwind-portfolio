import React from "react";
import textAnalyzer from "../assets/portfolio/Text-Analyzer.png";
import shoeSavvy from "../assets/portfolio/ShoeSavvy.png";
import newsAPI from "../assets/portfolio/News-API.png";
import microsoft from "../assets/portfolio/Microsoft.png";
import facebook from "../assets/portfolio/Facebook.png";
import spotify from "../assets/portfolio/Spotify.png";
import windows11 from "../assets/portfolio/Windows 11.png";
import ticTac from "../assets/portfolio/Tic Tac Toe.png";
import portfolio from "../assets/portfolio/portfolio.png";
import iEducate from "../assets/portfolio/iEducate -.png";
import ml from "../assets/portfolio/ml.png";
import clock from "../assets/portfolio/Clock.png";
import cheatsheet from "../assets/portfolio/cheatsheet.png";
import carAnimation from "../assets/portfolio/Car Animation.png";
import calculator from "../assets/portfolio/Calculator.png";
import gym from "../assets/portfolio/gym.png";
import modernLogin from "../assets/portfolio/Modern Login Page.png";
import loginPage from "../assets/portfolio/Login page.png";
import food from "../assets/portfolio/online Food delivery.png";


const Portfolio = () => {


    const links=[
        {
            id:1,
            address:textAnalyzer,
            name:"Text Analyzer",
            repo:"https://shivam-gla.github.io/Text-Analyzer/"
        },
        {
            id:2,
            address:shoeSavvy,
            name:"ShoeSavvy",
            repo:"https://shoe-savvy.vercel.app/"
        },
        {
            id:3,
            address:newsAPI,
            name:"News API",
            repo:"https://news-api-phi-opal.vercel.app/"
        },
        {
            id:4,
            address:microsoft,
            name:"Microsoft - clone",
            repo:"https://microsoft-clone-rosy-seven.vercel.app/"
        },
        {
            id:5,
            address:facebook,
            name:"facebook - clone",
            repo:"https://facebook-login-page-pi.vercel.app/"
        },
        {
            id:6,
            address:spotify,
            name:"Spotify - clone",
            repo:"https://spotify-clone-two-zeta.vercel.app/"
        },
        {
          id:7,
          address:windows11,
          name:"windows 11 - dummy",
          repo:"https://windows-11-dummy.vercel.app/"
      },
        {
          id:8,
          address:ticTac,
          name:"Tic Tac - Game",
          repo:"https://tic-tac-toe-game-seven-ruby.vercel.app/"
      },
        {
          id:9,
          address:portfolio,
          name:"portfolio - website",
          repo:"https://html-portfolio-site.vercel.app/"
      },
        {
          id:10,
          address:food,
          name:"Food delivery - website",
          repo:"https://online-food-delivery-service-site.vercel.app/"
      },
        {
          id:11,
          address:iEducate,
          name:"iEducate - website",
          repo:"https://online-education-site.vercel.app/"
      },
        {
          id:12,
          address:ml,
          name:"Confusion Matrix - ML",
          repo:"https://presentation-ml.vercel.app/"
      },
        {
          id:13,
          address:clock,
          name:"Analog Clock",
          repo:"https://analog-clock-five-azure.vercel.app/"
      },
        {
          id:14,
          address:cheatsheet,
          name:"cheatsheet",
          repo:"https://cheatsheet-copy-code.vercel.app/"
      },
        {
          id:15,
          address:carAnimation,
          name:"Car Animation",
          repo:"https://github.com/Shivam-GLA/Car-Animation"
      },
        {
          id:16,
          address:calculator,
          name:"Calculator",
          repo:"https://github.com/Shivam-GLA/Calculator"
      },
        {
          id:17,
          address:gym,
          name:"GYM - website",
          repo:"https://github.com/Shivam-GLA/GYM-Website"
      },
        {
          id:18,
          address:modernLogin,
          name:"Modern Login Page",
          repo:"https://github.com/Shivam-GLA/Modern-Login-Page-04"
      },
        {
          id:19,
          address:loginPage,
          name:"Login Page",
          repo:"https://github.com/Shivam-GLA/Login-Page-01"
      },
    ]
    
  return (
    <div
      name="Portfolio" id="portfolio"
      className=" w-full px-6 py-24 sm:px-0 bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="w-11/12  flex flex-col justify-between sm:justify-start mx-auto">
        <div>
          <p className="font-bold inline border-b-2 border-gray-400 text-4xl">
            Portfolio
          </p>
          <p className="my-6">Checkout some of my work here</p>
        </div>
        <div className="pb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]" >
        {links.map(({id, address,name,repo})=>{  
             return (
                <div key={id} id="cards_experience" className="shadow-md shadow-gray-600 rounded-lg" >
                    <img id="experience" src={address} alt="Project" style={{"height":"8rem", "width":"100%"}}/>
                    <div className="flex items-center justify-center ">
                    <a href={repo} target="_parent">
                        <button className="px-6 py-2 duration-300 hover:scale-105 text-lg hover:text-yellow-500">{name}</button>
                        </a>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
