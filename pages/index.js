import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content";

const Block = ({e,center}) => {
  console.log(e)
  return (
    <div className="row space-x-4 center">
      
      <div className="col space-y-2 justify-start items-center">
        {e.left.h1 && <h1>{e.left.h1}</h1>}
        {e.left.p && <p>{e.left.p}</p>}
        {e.left.img && <Image src={e.left.img[0]} alt="ll" />}
      </div>
      <div className="col space-y-2 justify-start items-center">
        {e.right.h1 && <h1>{e.right.h1}</h1>}
        {e.right.p && <p>{e.right.p}</p>}
        {e.right.img && <Image src={e.right.img[0]} alt="ll" />}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="col center space-y-3 prose">
      {content.blocks.map((e, i) => (
        <div key={i} className="row center">
          
          {console.log(content.blocks[0])}
          
            <Block e={content.blocks[0]} />
          
          {(e.blocks != undefined  && e.centerTxt != undefined) && e.blocks.map((ex,ix)=><Block key={ix} e={ex} center={<h1>{e.centerTxt}</h1>} />)}
        </div>
      ))}
    </div>
  );
}
