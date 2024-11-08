'use client';
import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss,SiNextdotjs, SiMongodb } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

//about data
const about={
  title:'About me',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis asperiores dicta. Magnam quam sequi blanditiis odio.',
  info:[
    {
      fieldName:"Name",
      fieldValue:"Hari Menon"
    },
    {
      fieldName:"Phone",
      fieldValue:"+91 6282159533"
    },
    {
      fieldName:"Experience",
      fieldValue:"0 Years"
    },
    {
      fieldName:"Role",
      fieldValue:"Web developer"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"ultronhari7@gmail.com"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi, Malayalam"
    },
  ]
};

// const experience={
//   icon:"",
//   title:"My Experience",
//   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed saepe incidunt corrupti et consectetur sit explicabo?",
//   items:[
//     {
//       company:"Tech solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },
//     {
//       company:"ABC Inc.",
//       position:"Full Stack Developer",
//       duration:"2021-2022"
//     },
//     {
//       company:"Tech solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },
//     {
//       company:"Tech solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },
//     {
//       company:"Tech solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },
//     {
//       company:"Tech solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },
//   ]
// };
const experience={
  icon:"",
  title:"My College Activities",
  description:"As a college student I have participated and volunteered in various organisations",
  items:[
    {
      company:"ISTE GEC Thrissur",
      position:"ECE Department Vice head",
      duration:"2023-2024"
    },
    {
      company:"IEEE PES",
      position:"Volunteer",
      duration:"2022-2024"
    },
    {
      company:"YIP Kerala competition",
      position:"State Level Winner",
      duration:"2021"
    },
    {
      company:"Hack@Arch GEC Thrissur",
      position:"One of the top 10 finalists",
      duration:"2022"
    },
    
  ]
};

const education={
  icon:"",
  title:"My Education",
  description:"I am an Electronics and Communication graduate from APJ Abdul Kalam Technical University",
  items:[
    {
      institution:"Government Engineering College Thrissur",
      degree:"B.Tech. in ECE",
      duration:"2020-2024"
    },
    {
      institution:"Hari Sri Vidya Nidhi School",
      degree:"12th standard ICSE",
      duration:"2019-2020"
    },
    {
      institution:"Hari Sri Vidya Nidhi School",
      degree:"10th standard ICSE",
      duration:"2017-2018"
    },

    
  ]
};

const skills={
  title:'My skills',
  description:"I am skilled mainly in MERN stack and Flutter app development",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:'html 5',
    },
    {
      icon:<FaCss3/>,
      name:'css 3',
    },
    {
      icon:<FaJs/>,
      name:'javascript',
    },
    {
      icon:<FaReact/>,
      name:'react.js',
    },
    {
      icon:<SiNextdotjs/>,
      name:'next.js',
    },
    {
      icon:<SiTailwindcss/>,
      name:'tailwind.css',
    },
    {
      icon:<FaNodeJs/>,
      name:'node.js',
    },
    {
      icon:<SiMongodb/>,
      name:'MongoDB',
    },
    {
      icon:<FaPython/>,
      name:'python',
    },
    {
      icon:<FaJava/>,
      name:'java',
    },
    {
      icon:<BiLogoPostgresql/>,
      name:'SQL',
    },
    {
      icon:<SiFlutter/>,
      name:'Flutter',
    },

  ]
}

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4, ease:'easeIn'},}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Activities</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx:auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] mb-10"> 
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>


            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx:auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px] mb-10"> 
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item,index)=>{
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>

              </div>
            </TabsContent>


            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
