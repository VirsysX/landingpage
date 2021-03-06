import logo from "./logo.png";
import robotImg from "./robot.png";
import robotHand from "./robothand.png";
import robotTab from "./robot_tab.png"
import card1Ico from "./bug-removebg-preview.png"
import card2Ico from "./remove-removebg-preview.png"
import card3Ico from "./icon3-removebg-preview.png"
import card4Ico from "./icon4-removebg-preview.png"
import pics from "./pic.png"
import {IoLogoFacebook,IoLogoInstagram,IoLogoTwitter,IoLogoGithub} from "react-icons/io"
export const content = {
  util: {
    navbar: {
      left: {
        txt: "Virsys",
        logo: logo,
      },
      middle: [{title:"Home",link:"/"},{title:"Project",link:"https://virsysx.cf/"},{title:"About",link:"/about"},{title:"Contact",link:"/contact"}],
      right: "search",
    },
    footer:{
      left:{
        txt: "Virsys",
        logo: logo,
      },
      middle:{
        email:"virsys@pm.me",
        tel:"+880 12345 67891"
      },
      right:{
        link:["Company","Service","Contact Us", "Privacy Policy","Terms of Use"],
        rights:"© Robotic (AI) ALL Right Reserved",
        icons:[IoLogoFacebook,IoLogoInstagram,IoLogoTwitter,IoLogoGithub]

      },
      cta: {
        type: "cta",
        margin: true,
        content: {
          type: "grid",
          left: {
            h1: "Tapping Intelligence Through Talent.",
          },
          right: {
            p: " Machine Intelligence is the last invention that humanity will ever need to make.-Nick Bostrom ",
          },
        },
      },
    }
  },

  blocks: [
    {
      type: "grid",
      left: {
        subject: "NEXT GENERATION PLATFORM",
        h1: "Discover Al Inference Platform",
        p: "Robots take operations to the next level. They work hand in hand with humans balancing the imperative for safety with the need for flexibility and productivity.",
        btn: ["Get Started"],
      },
      right: {
        img: [robotImg],
      },
      cta: {
      type: "cta",
      margin: true,
      content: {
        type: "grid",
        left: {
          h1: "Tapping Intelligence Through Talent.",
        },
        right: {
          p: "Machine Intelligence is the last invention that humanity will ever need to make.-Nick Bostrom",
        },
      },
    },
    },
   
    {
      type: "grid",

      right: {
        subject:"SECURE DATA",
        h1: "Next generation platform for secure data by Al",
        list:["We always focus on technical excellence Wherever you're going"," We bring ideas and excitement", "We're consultants, guides, and partners for brands"]
      },
      left: {
        img: [robotHand],
        highAspect:true
      },
    },
    
    {
      type: "grid",
      left: {
        subject: "DATA ANALYSES",
        h1: "Turn data into data board for smart technology",
        p: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your software development.",
        btn: ["Learn More"],
      },
      right: {
        img: [robotTab],
      },
    },
    {
      type:"block",
      content:{
        center:{
          subject_p:"SERVICES",
          h1:"Our Purpose Is To Deliver Excellence <br /> In Service And Execution"
        }
      }
    },
    {
      type:"cards",
      cards:[
        {
          img:[card1Ico],
          h1:"Robotic Automation",
          p:"Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting  with digital systems and software. "

        },
        {
          img:[card2Ico],
          h1:"Predictive Analytics",
          p:"Analytics Needs With Actionable Insights. Inquire With Us Now! Get the scale needed to meet your business need and make informed decisions. Inquire now! Create Informed Decisions. Real-Time Processing."

        },
        {
          img:[card3Ico],
          h1:"Deep Learning",
          p:"Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge. While traditional machine learning algorithms are linear."
          
        },
        {
          img:[card4Ico],
          h1:"Data Mining",
          p:" Data mining, also known as knowledge discovery in data (KDD), is the process of uncovering patterns and other valuable information from large data sets. Data mining has improved."

        },
      ]
    },{
      type: "grid",

      right: {
        subject:"WHO WE ARE",
        h1: "We specialise in Serving businesses by hard implementing AI",
        counts:[{h1:"5",p:"Years of exprience"}]
      },
      left: {
        img: [pics],
      },
    },
    {
      type: "grid",
      left: {
        subject: "MEET THE TEAM",
        h1: "We are intelligent in action.",
        p: "Our leadership team brings many years of experience in Artificial Intelligence and technology innovation.",
        
      },
      right: {
        img: [robotImg],
      },
    },

  ],
};
