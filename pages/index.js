import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content copy";
import { Fragment } from "react/cjs/react.production.min";
import { SearchIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";
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

/*TODO
navbar@
btn@MobinX
list@M
subject@
cta@MobinX
card
counter
imageBottomblur

 */

const Navbar = ({ data }) => {
  return (
    <div className="row justify-around items-center px-4">
      <div className="row space-x-2">
        <div className="row center w-5 h-5 overflow-hidden">
          <Image
            className="w-full h-full"
            src={data.left.logo}
            alt="logo"
            priority={true}
          />
        </div>
        <h1 className="text-lg">{data.left.txt}</h1>
      </div>
      <div className="row space-x-4 center">
        {data.middle.map((e, i) => (
          <p key={i} className="text-base hover:text-green-500">
            {e}
          </p>
        ))}
      </div>
      <div className="row cernter">
        <div className="border-white px-3 py-2 row center space-x-1">
          <input className="input input-ghost" type="text" />
          <button className="btn btn-circle btn-sm bg-gradient-to-bl from-[#07dab5] to-[#0499e5]">
            <SearchIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Btn = ({ txt }) => {
  return (
    <div className="row center">
      <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-[#0270ef] to-[#08deb4] p-[2px]">
        <div className="w-full h-full rounded-full row center">
          <ArrowNarrowRightIcon className="w-4 h-4" />
        </div>
        <p className="text-base bg-black px-2 row center -ml-2">{txt}</p>
      </div>
    </div>
  );
};

const List = ({ items }) => {
  return (
    <div className="col items-start justify-center space-y-4">
      {items.map((e, i) => (
        <div key={i} className="row space-x-3 center text-lg">
          <p className="text-green-500">O</p> <p>{e}</p>
        </div>
      ))}
    </div>
  );
};

const Subject = ({ txt, p = false }) => {
  const px = <p className="txt-lg text-green-500">{txt}</p>;
  return p ? (
    px
  ) : (
    <div className="row center py-3 pl-2 border-2 border-l-green-500">{px}</div>
  );
};

const CTA = ({ data }) => {
  const content = data.content
  return (
    <div className={`row center px-4 md:px-7 py-3 backdrop-blur-md bg-[#0c2135] ${data.margin && "-mt-5"}`}>
      {content.type == "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {content.left && (
            <div className="col-span-2 md:col-span-1 col center">
              {content.left.h1 && (
                <h1 className="text-lg">{content.left.h1}</h1>
              )}
              {content.left.p && <p className="text-base">{content.left.p}</p>}
            </div>
          )}
          {content.right && (
            <div className="col-span-2 md:col-span-1 col center">
              {content.right.h1 && (
                <h1 className="text-lg">{content.right.h1}</h1>
              )}
              {content.right.p && (
                <p className="text-base">{content.right.p}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Card = ({content}) =>{
  return <div className="col center space-y-5">
    <div className="w-5 h-5 overflow-hidden row center">
      <Image className="w-full h-full" src={content.img} alt="icon" />
      <h1 className="text-lg text-[#08f89f]">{content.h1}</h1>
      <p className="text-base">{content.p}</p>
      </div>
    </div>
}

const Counter = ({data}) =>{
  return <div className="row center w-16">
    <h1 className="w-1/2 text-2xl text-[#08f89f]">{data.h1}</h1>
    <p className="w-1/2 text-base">{data.p}</p>
    </div>
}

const ImageBlur =({img,txt})=>{
  return <div className="relative w-full h-full">
    <div className="row center w-[70%] h-full overflow-hidden absolute inset-0 z-[2]">
      <Image className="w-full h-full" src={image} alt="image" />
      </div>
      <div className="bg-white/60 backdrop-blur-lg w-full py-4 px-2 row center absolute bottom-0 z-[4]">
        <h1 className="text-lg ">{txt}</h1>
        </div>
    </div>
}

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
    <Fragment>
      {e.type == "block" ? <div className="row center">
        {e.content.center && <div className="row center space-y-3"> 
        {e.content.center.subject_p && <Subject txt={e.content.center.subject_p} p={true} />}
        {e.content.center.h1 && <H1 txt={e.content.center.h1} />}
       
          </div>}
        </div>:""}
      {e.type == "cta" ? <CTA data={e} />:""}
      {e.type == "grid" ? <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 gap-y-6 min-h-[80vh]">
        {e.left &&  <div
        className={`col-span-2 md:col-span-1 order-1 col  space-y-2 justify-center  ${
          e.left.img ? "items-center " : "items-start"
        }`}
      > {e.left.subject && <Subject txt={e.left.subject} />}
        {e.left.h1 && <H1 txt={e.left.h1} />}
        {e.left.p && <P txt={e.left.p} />}
        {e.left.btn && e.left.btn.map((ek,i)=><Btn txt={ek} key={i} />) }
        {e.left.img && (
          <div className="w-[70%]">
            <Image src={e.left.img[0]} alt="ll" />
          </div>
        )}
      </div>}
     {e.right && <div
        className={`col-span-2 md:col-span-1  col space-y-2 justify-center md:order-1 ${
          e.right.h1 ? "" : "order-1"
        }  ${e.right.img ? "items-center " : "items-start"}`}
      >
       {e.right.subject && <Subject txt={e.right.subject} />}
        {e.right.h1 && <H1 txt={e.right.h1} />}
        {e.right.p && <P txt={e.right.p} />}
        {e.right.btn && e.right.btn.map((ek,i)=><Btn txt={ek} key={i} />) }
        {e.right.img && (
          <div className="w-[70%]">
            <Image src={e.right.img[0]} alt="ll" />
          </div>
        )}
      </div>}
      
    </div>:""}
    
    </Fragment>
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
