import Image from "next/image";
import { contant } from "../assets/content";
import Mobin from "../assets/mobin.jpg"
import Shihab from "../assets/shihab.jpg"

const inp = [{
    name:"Md.Mobin Chowdhury",
    title:"Application and ML Developer",
    skills:["UX Desining","ML Developing","Web Developing","Flutter Developing","Alogorithm"],
    per:[82,86,83,86,70],
    pic: Mobin

},
{
    name:"Md. Shihab Hossain",
    title:"Programmer and Cyber Security Expert",
    skills:["Networking","Cyber Security","UX Desining","Progamming","Gamer"],
    per:[80,85,70,85,88],
    pic:Shihab

},
]

const color = ["progress-primary","progress-secondary","progress-accent","progress-info","progress-success"]

const Card = ({e}) => {
  return (
    <div className="bg-[#3949ab] grid w-full md:w-1/2 flex-grow gap-3 rounded-xl  p-6 shadow-xl">
      <div className="flex items-center space-x-2">
        <div className="dropdown">
          <div tabIndex={0}>
            <div className="online avatar">
              <div className="mask mask-hexagon bg-base-content h-16 w-16 bg-opacity-10 ">
                <Image
                  src={e.pic}
                  alt="Avatar Tailwind CSS Component"
                  className="mask mask-hexagon"
                />
              </div>
            </div>
          </div>
         
        </div>
        <div>
          <div className="text-lg font-extrabold">{e.name}</div>
          <div className="text-base-content/70 text-sm">{e.title}</div>
        </div>
      </div>
      <div className="dropdown">
        <div tabIndex={0}>
          <div className="divider text-base-content/60 m-0">Reports</div>
        </div>
      
      </div>
      <div className="text-lg font-extrabold">Skills</div>
      <div className="grid gap-3">
        <div className="dropdown dropdown-top">
          <div tabIndex={0}>
            {e.skills.map((ei,i)=> <div key={i} className="flex items-center p-1">
              <span className="text-base-content/70 w-48 text-xs">
                {ei}
              </span>
              <progress
                max={100}
                value={e.per[i]}
                className={`progress ${color[i]}`}
              />
            </div>)}           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default function About() {
  
  return (
    <div className="col center mt-6 font-mono text-teal-300 over space-y-4">
      <div className="col center space-y-4 ">
        <h1 className="md:text-3xl text-2xl w-[70%] text-center italic">{`"A year spent in artificial intelligence is enough to make one believe in God"`} -<p>Alan Perlis</p></h1>

      
      </div>


    <div className="md:row col center md:space-x-8 space-y-4">{inp.map((e,i)=> <Card key={i} e={e} />)}</div>


     
    </div>
  );
}
