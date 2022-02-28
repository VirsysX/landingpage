import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content";

const Line = ({txt=""}) => {
  return <>
  {txt.split("<br />").map((e,i)=><>
  {e}{(txt.includes("<br />") >= 0 ) && <br />}
  </>)}
  </>
}

const Block = ({e,center}) => {
  console.log(e)
  return (
    <div className={`${e.left.h1 ? "col" : "col-re"} md:row space-x-4 center w-full min-h-screen`}>
      
      <div className={`col space-y-2 justify-center  ${e.left.img ? "items-center " :"items-start"} w-full md:w-10/12`}>
        {e.left.h1 && <h1 className={`${((e.type == "header") && "text-5xl md:text-6xl font-semibold")}`}><Line txt={e.left.h1} /></h1>}
        {e.left.p && <p>{e.left.p}</p>}
        {e.left.img && <div className="aspect-[4/3]"><Image src={e.left.img[0]} alt="ll" /></div>}
      </div>
      <div className={`col space-y-2 justify-center  ${e.right.img ? "items-center " :"items-start"} w-full md:w-1/2`}>
        {e.right.h1 && <h1>{e.right.h1}</h1>}
        {e.right.p && <p>{e.right.p}</p>}
        {e.right.img && <div className="aspect-[4/3]"><Image src={e.right.img[0]} alt="ll" /></div>}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 col center space-y-3 prose min-w-full">
      {content.blocks.map((e, i) => (
        <div key={i} className="row center w-full flex-wrap">
          
          {(e.blocks == undefined ) && <Block e={e}  />}
          
          
          
          {(e.blocks != undefined  && e.centerTxt != undefined) && e.blocks.map((ex,ix)=><Block key={ix} e={ex} center={<h1>{e.centerTxt}</h1>} />)}
        </div>
      ))}
    </div>
  );
}
