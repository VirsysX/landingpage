import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content";
import { Fragment } from "react/cjs/react.production.min";
const Line = ({ txt = "" }) => {
  return (
    <>
      {txt.split("<br />").map((e, i) => (
        <>
          {e}
          {txt.includes("<br />") >= 0 && <br />}
        </>
      ))}
    </>
  );
};

const Block = ({ e, center }) => {
  const H1 = ({ txt }) => (
    <h1
      className={`${
        e.type == "header" &&
        "text-2xl md:text-5xl leading-[110%] md:leading-[110%] font-semibold"
      } ${e.type == "block" && "text-2xl md:text-4xl font-semibold"}`}
    >
      <Line txt={txt} />
    </h1>
  );
  const P = ({ txt }) => (
    <p
      className={`${
        e.type == "header" && "text-base md:text-base font-semibold"
      } ${e.type == "block" && "text-base md:text-lg font-semibold"} w-[75%]`}
    >
      <Line txt={txt} />
    </p>
  );

  console.log(e);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      
        <div className={`col-span-2 md:col-span-1 ${e.left.h1 ? "-order-1" : "order-1"} col  space-y-2 justify-center  ${
          e.left.img ? "items-center " : "items-start"
        }`}>
          {e.left.h1 && <H1 txt={e.left.h1} />}
          {e.left.p && <P txt={e.left.p} />}
          {e.left.img && (
            <div className="w-[70%]">
                <Image src={e.left.img[0]} alt="ll" />
              
            </div>
          )}
        
      </div>
      <div
        className={`col-span-2 md:col-span-1 ${e.right.h1 ? "-order-1" : "order-1"} col space-y-2 justify-center  ${
          e.right.img ? "items-center " : "items-start"
        }`}
      >
        {e.right.h1 && <H1 txt={e.right.h1} />}
        {e.right.p && <P txt={e.right.p} />}
        {e.right.img && (
          <div className="w-[70%]">
            <Image src={e.right.img[0]} alt="ll" />
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen min-w-full overflow-y-scroll">
      
      <div className="absolute inset-0 w-full min-h-full">
        <div className="container mx-auto px-12  prose prose-h1:my-2 min-w-full">
          {content.blocks.map((e, i) => (
            <Fragment key={i}>
              {e.blocks == undefined && <Block e={e} />}

              {e.blocks != undefined &&
                e.centerTxt != undefined &&
                e.blocks.map((ex, ix) => (
                  <Block key={ix} e={ex} center={<h1>{e.centerTxt}</h1>} />
                ))}
            
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
