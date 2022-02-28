import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content";

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
    <div
      className={`${
        e.left.h1 ? "col" : "col-re"
      } md:row space-x-4  center w-full min-h-screen`}
    >
      <div className={`col space-y-2 center w-full my-5 md:w-1/2`}>
        <div
          className={` flex-[0_0_50%] max-w-2xl`}
        >
          {e.left.h1 && <H1 txt={e.left.h1} />}
          {e.left.p && <P txt={e.left.p} />}
          {e.left.img && (
            <div className="aspect-[4/3]">
              <div><Image src={e.left.img[0]} alt="ll" /></div>
              
            </div>
          )}
        </div>
      </div>
      <div
        className={`col space-y-2 justify-center  ${
          e.right.img ? "items-center " : "items-start"
        } flex-1 my-5 max-w-2xl px-`}
      >
        {e.right.h1 && <H1 txt={e.right.h1} />}
        {e.right.p && <P txt={e.right.p} />}
        {e.right.img && (
          <div className="aspect-[4/3]">
            <Image src={e.right.img[0]} alt="ll" />
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto px-12 col center space-y-3 prose prose-h1:my-2 min-w-full">
      {content.blocks.map((e, i) => (
        <div key={i} className="row center w-full flex-wrap">
          {e.blocks == undefined && <Block e={e} />}

          {e.blocks != undefined &&
            e.centerTxt != undefined &&
            e.blocks.map((ex, ix) => (
              <Block key={ix} e={ex} center={<h1>{e.centerTxt}</h1>} />
            ))}
        </div>
      ))}
    </div>
  );
}
