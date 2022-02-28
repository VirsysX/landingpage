import vercelSVg from "./vercel.svg";
import distributedServer from "./distibuted.server.png";
import collaborate from "./collaborate.png";
export const content = {
  blocks: [
    {
      type: "header",
      left: {
        h1: "We adapt <br />So you don't need to buy",
        p: "We us IPFS protocol and peer-to-peer network.For storing and sharing your data in a distributed file system.A peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge  by making the web upgradeable, resilient, and more open.",
        btn: ["Be with us", "Be one of us"],
      },
      right: {
        img: [vercelSVg],
      },
      
    },
    {
      type: "block",
      centerTxt: "Why Us",
      blocks: [
        {
          type: "block",
          left: {
            h1: "Store and sync",
            p: " Keep all your files securely stored, up to date, and accessible from any device.",
          },
          right: {
            img: [distributedServer],
          },
        },
        {
          type: "block",

          right: {
            h1: "Share",
            p: "Use World fastest File Sharing system.That can Quickly send any file—big or small—to anyone, even if they don’t have an account.",
          },
          left: {
            img: [vercelSVg],
          },
        },
        {
          type: "block",
          left: {
            h1: "Stay secure",
            p: "Full-proof security is ensured through features like blockchain technology and device authentication",
          },
          right: {
            img: [vercelSVg],
          },
        },
        {
          type: "block",

          right: {
            h1: "Collaborate",
            p: "Manage tasks, track file updates, and stay in sync with your teams and clients.",
          },
          left: {
            img: [collaborate],
          },
        },
      ],
    },
  ],
};
