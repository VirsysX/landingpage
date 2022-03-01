import logo from "./logo.png";
import robotImg from "./robot-removebg-preview.png";
import robotHand from "./robot_hand-removebg-preview.png";
import robotTab from "./tab_robot-removebg-preview.png"
import card2Ico from "./remove-removebg-preview.png"
import card3Ico from "./icon3-removebg-preview.png"

export const content = {
  util: {
    navbar: {
      left: {
        txt: Virsys,
        logo: logo,
      },
      middle: [Home, Service, Robotics, Project, Contac],
      right: "search",
    },
  },

  blocks: [
    {
      type: "grid",
      left: {
        subject: "NEXT GENERATION PLATFORM",
        h1: "Discover Horizon Robotics Al Inference Platform",
        p: "Robots take operations to the next level. They work hand in hand with humans balancing the imperative for safety with the need for flexibility and productivity.",
        btn: ["Get Started"],
      },
      right: {
        img: [robotImg],
      },
    },
    {
      type: "cta",
      margin: true,
      content: {
        type: "grid",
        left: {
          h1: "Tapping Intelligence Through Talent.",
        },
        right: {
          p: "Felis augue donec aenean enim malesuada vitae sapien. Aliquet enim a tristique curae porta auctor sollicitudin senectus consectetur. Dolor ultricies feugiat augue faucibus justo molestie plated congue. ",
        },
      },
    },
    {
      type: "grid",

      right: {
        subject:"SECURE DATA",
        h1: "Next generation platform for secure data by Al",
        list: ["We always focus on technical excellence", "Wherever you're going, we bring ideas and excitement", "We're consultants, guides, and partners for brands"],
        btn:["Learn More"]
      },
      left: {
        img: [robotHand],
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
          img:[]
        }
      ]
    }
  ],
};
