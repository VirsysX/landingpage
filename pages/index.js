import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { content } from "../assets/content copy";
import { Fragment } from "react/cjs/react.production.min";
import Fade from 'react-reveal/Fade';

import {
  SearchIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useRouter } from 'next/router';


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

function NavLink({ href, exact, children,classac, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
      props.className += classac;
      //demo
      //demo 2 
  }

  return (
      <Link href={href}>
          <a {...props}>
              {children}
          </a>
      </Link>
  );
}



export const Navbar = ({ data }) => {
  return (
    <div className="row justify-start md:justify-between items-center  w-full md:px-4  mb-5">
      <div className="row center space-x-2 md:mr-5">
        <div className="row center w-8 h-8 overflow-hidden">
          <Image
            className="w-full h-full"
            src={data.left.logo}
            alt="logo"
            priority={true}
          />
        </div>
        <h1 className="text-lg font-bold cursor-pointer">{data.left.txt}</h1>
      </div>
      <div className="row space-x-6 hidden md:flex flex-1 center">
        {data.middle.map((i, e) => (
         <NavLink key={e} exact href={i.link} className="text-base  no-underline font-bold cursor-pointer hover:text-green-500" classac={" text-teal-300"}>{i.title}</NavLink>
        ))}
      </div>
      <div className="row cernter hidden md:flex">
        <div className="bg-gradient-to-bl from-[#07dab5] to-[#0499e5] p-[2px] rounded-3xl row center">
        <div className="border w-full h-full bg-black border-transparent group  focus:border-white rounded-3xl px-1 pl-2 py-1 row center space-x-1">
          <input
            className="bg-transparent h-6 w-[90%] text-white group-focus:border-white focus:outline-none"
            type="text"
          />
          <button className="btn btn-circle btn-xs bg-gradient-to-bl from-[#07dab5] to-[#0499e5]">
            <SearchIcon className="w-3 h-3" />
          </button>
        </div>
      </div></div>
    </div>
  );
};

const Btn = ({ txt }) => {
  return (
    <div className="row group center cursor-pointer hover:text-[#0270ef]  text-[#08deb4] ">
      <div className="w-14 h-14 rounded-full bg-gradient-to-bl from-[#0270ef] to-[#08deb4] p-[2px]">
        <div className="w-full bg-black h-full rounded-full row center">
          <ArrowRightIcon className="w-6 h-6 group-hover:ml-1 transition-all" />
        </div>
      </div>
      <p className="text-lg font-bold bg-black px-2 row center -ml-4 row center h-10 transition">
        {txt}
      </p>
    </div>
  );
};

const List = ({ items }) => {
  return (
    <div className="col items-start justify-center space-y-1">
      {items.map((e, i) => (
        <div
          key={i}
          className="row space-x-3  items-start justify-start text-lg font-bold"
        >
          <p className="text-green-500 font-semibold">O</p> <p>{e}</p>
        </div>
      ))}
    </div>
  );
};

const Subject = ({ txt, p = false }) => {
  return (
    <p
      className={`txt-lg border-2 my-1 font-semibold border-black ${
        !p && "border-l-[#08f498]"
      } text-[#08f498] py-0 h-5 tracking-wider row center pl-2`}
    >
      {txt}
    </p>
  );
};
const CTA = ({ data,cls='' }) => {
  const content = data.content;
  return (
    <div
      className={`row center px-6 md:px-5 py-6  backdrop-blur-3xl z-[3] bg-[#0c2135]/30 ${cls} ${
        data.margin && "-mt-1/2"
      }`}
    >
      {content.type == "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {content.left && (
            <div className="col-span-2 md:col-span-1 col center">
              {content.left.h1 && (
                <h1 className="text-lg md:text-3xl md:w-[80%]">
                  {content.left.h1}
                </h1>
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

const Card = ({ content, cls }) => {
  return (
    <Fade right>
    <div className={`${cls}`}>
      <div className={` col center space-y-3`}>
        <div className="w-24 h-20 overflow-hidden hover:scale-125 transition-all cursor-pointer row center">
          <Image className="w-full h-full" src={content.img[0]} alt="icon" />
        </div>
        <h1 className="text-lg text-center text-[#08f89f]">{content.h1}</h1>
        <p className="text-sm md:text-base text-center">{content.p}</p>
      </div>
    </div></Fade>
  );
};

const Counter = ({ data }) => {
  return (
    <div className="row center h-20 mx-3 w-24">
      <h1 className="w-1/2 text-5xl text-[#08f89f] mr-4">{data.h1}</h1>
      <p className="w-1/2 text-sm">{data.p}</p>
    </div>
  );
};

const ImageBlur = ({ img, txt }) => {
  return (
    <div className="relative w-full h-full">
      <div className="row center w-[70%] h-full overflow-hidden absolute inset-0 z-[2]">
        <Image className="w-full h-full" src={img} alt="image" />
      </div>
      <div className="bg-white/60 backdrop-blur-lg w-full py-4 px-2 row center absolute bottom-0 z-[4]">
        <h1 className="text-lg ">{txt}</h1>
      </div>
    </div>
  );
};

const Block = ({ e, center }) => {
  const H1 = ({ txt, cls = null }) => (
    <h1
      className={`${
        e.type == "header" &&
        "text-2xl md:text-5xl leading-[110%] md:leading-[110%] font-semibold"
      } ${e.type == "blockk" && "text-2xl md:text-4xl font-semibold"} ${cls}`}
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

  return (
    <Fragment>
      {e.type == "block" ? (
        <Fragment>
          {e.content.center && (
            <Fade top>
            <div className="col center space-y-3 my-10">
              {e.content.center.subject_p && (
                <Subject txt={e.content.center.subject_p} p={true} />
              )}
              {e.content.center.h1 && (
                <H1 txt={e.content.center.h1} cls="text-center" />
              )}
            </div></Fade>
          )}{" "}
        </Fragment>
      ) : (
        ""
      )}
      {e.type == "cta" ? <Fade right><CTA data={e} /></Fade>  : ""}
      {e.type == "cards" ? (
      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-14 gap-y-10">
          {e.cards.map((card, ins) => (
            <Card content={card} key={ins} cls="col-span-1" />
          ))}
        </div>
      ) : (
        ""
      )}
      {e.type == "grid" ? (
        
        <div className="col center md:-space-y-5 -space-y-12 my-14 w-full h-full">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 my-2 gap-y-10 min-h-[120vh] md:min-h-full">
            {e.left && (
              <Fade left>
              <div
                className={`col-span-2 md:col-span-1 order-1 col  md:space-y-5 space-y-3 justify-center  ${
                  e.left.img ? "items-center " : "items-start"
                }`}
              >
                {" "}
                {e.left.subject && <Subject txt={e.left.subject} />}
                {e.left.h1 && <H1 txt={e.left.h1} />}
                {e.left.p && <P txt={e.left.p} />}
                {e.left.btn &&
                  e.left.btn.map((ek, i) => <Btn txt={ek} key={i} />)}
                {e.left.list && <List items={e.left.list} />}
                {e.left.counts && (
                  <div className="row justify-start space-x-8 items-center">
                    {e.left.counts.map((ed, id) => (
                      <Counter data={ed} key={id} />
                    ))}
                  </div>
                )}
                {e.left.imgx && (
                  <div className="row space-x-8 center">
                    {e.left.imgx.map((ed, id) => (
                      <ImageBlur img={ed} txt="Robot" key={id} />
                    ))}
                  </div>
                )}
                {e.left.img && (
                  <div className={`w-[70%] ${e.left.highAspect ? "w-[85%] -ml-[35%]" : "w-[70%]"}`}>
                    <Image src={e.left.img[0]} alt="ll" />
                  </div>
                )}
              </div></Fade>
            )}
            {e.right && (
              <Fade right>
              <div
                className={`col-span-2 md:col-span-1  col space-y-2 justify-center md:order-1  ${
                  e.right.h1 ? "" : "order-1"
                }  ${e.right.img ? "items-center " : "items-start"}`}
              >
                {e.right.subject && <Subject txt={e.right.subject} />}
                {e.right.h1 && <H1 txt={e.right.h1} />}
                {e.right.p && <P txt={e.right.p} />}
                {e.right.btn &&
                  e.right.btn.map((ek, i) => <Btn txt={ek} key={i} />)}
                {e.right.list && <List items={e.right.list} />}
                {e.right.counts && (
                  <div className="row justify-start space-x-8 items-center">
                    {" "}
                    {e.right.counts.map((ed, id) => (
                      <Counter data={ed} key={id} />
                    ))}
                    {e.right.imgx && (
                      <div className="row space-x-8 center">
                        
                        {e.right.imgx.map((ed, id) => (
                          <ImageBlur img={ed} txt="Robot" key={id} />
                        ))}
                      </div>
                    )}
                    {e.right.imgx && console.log(e.right.imgx)}
                  </div>
                )}

                {e.right.img && (
                  <div className={`w-[70%] ${e.right.highAspect ? "w-[85%] -ml-[35%]" : "w-[70%]"}`}>
                    <Image src={e.right.img[0]} alt="ll" />
                  </div>
                )}
              </div></Fade>
            )}
          </div>
          {e.cta ? <Fade right> <CTA data={e.cta} /></Fade> : ""}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const Footer = ({ data }) => {
  return (
    <div className="col bg-gray-900 center w-full mt-20">
      {data.cta && <CTA data={data.cta} cls="mx-16 -mt-20" />}
    <div className="col w-full md:row font-semi justify-around items-center md:px-4 py-5 pb-8">
      <div className="row center mb-7  md:mb-0 space-x-2 md:mr-5">
        <div className="row center w-8 h-8 overflow-hidden">
          <Image
            className="w-full h-full"
            src={data.left.logo}
            alt="logo"
            priority={true}
          />
        </div>
        <h1 className="text-lg font-bold cursor-pointer">{data.left.txt}</h1>
      </div>
      <div className="col center space-y-2 text-base text-white">
        <div className="row center space-x-2">
          <MailIcon className="w-6 h-6 text-white" /> <p className="my-4">{data.middle.email}</p>
        </div>
        <div className="row center space-x-2">
          <PhoneIcon className="w-6 h-6 text-white" /> <p className="my-4">{data.middle.tel}</p>
        </div>
      </div>
      <div className="col md:flex-[0_0_54%] justify-center items-center md:items-end md:space-x-2 md:space-y-1 ">
        <div className="col center md:row md:justify-end  md:space-x-4">
          {data.right.link.map((e, i) => (
            <p key={i} className="row cursor-pointer my-4 hover:text-green-500 center">
              {e}
            </p>
          ))}
        </div>
        <div className="hidden w-full h-[1px] md:flex bg-gray-700"></div>
        <div className="col-re md:row md:justify-between items-center w-full">
          <p className="row my-4 center">{data.right.rights}</p>
          <div className="row center mb-5 md:mb-0 space-x-3">
            {data.right.icons.map((E, i) => (
              <div key={i} className="row center w-6 h-6">
                {<E />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default function Home() {
  return (
    <IconContext.Provider value={{ className: "text-[#08f89f] w-9 h-9" }}>
      <div className="relative bg-black h-full w-full">
        <div className="absolute inset-0 w-full min-h-full">
          <div className="container mx-auto my-6 px-6 md:px-12 prose prose-h1:my-2 min-w-full">
      
            {content.blocks.map((e, i) => (
              <div className="row center min-h-full min-w-full" key={i}>
                <Block e={e} />
              </div>
            ))}
           
          </div> 
          <Footer data={content.util.footer} />
        </div>
      </div>
    </IconContext.Provider>
  );
}
