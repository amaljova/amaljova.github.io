import DevImg from "./DevImg";
// import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  // Calendar,
  Briefcase,
} from "lucide-react";

import {
  SiJupyter,
  SiGnometerminal,
  SiDocker,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiSpyderide,
  SiGooglecolab,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const infoData = [
  { icon: <User2 size={20} />, text: "Amal Joseph Varghese" },
  { icon: <MailIcon size={20} />, text: "amaljova@gmail.com" },
  { icon: <HomeIcon size={20} />, text: "CMC Vellore" },
  { icon: <PhoneCall size={20} />, text: "+91 94 97 08 15 00" },
  { icon: <GraduationCap size={20} />, text: "M.Sc. Bioinformatics" },
  // { icon: <Calendar size={20} />, text: "DOB" },
  { icon: <Briefcase size={20} />, text: "Clinical Data Scientist" },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "MG University",
        qualification: "MSc. Bioinformatics",
        years: "2018-2020",
      },
      {
        university: "MG University",
        qualification: "BSc. Zoology",
        years: "2015-2018",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "CMC Vellore",
        role: "Project Assistant",
        years: "2021- prsent",
      },
      {
        company: "THSTI, Faridabad",
        role: "Research Trainee",
        years: "2020",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { name: "Python" },
      { name: "Bash" },
      { name: "Java Script" },
      { name: "HTML, CSS" },
    ],
  },
  {
    title: "Tools",
    data: [
      { icon: <SiGnometerminal size={48} className="text-primary" /> },
      { icon: <TbBrandVscode size={48} className="text-primary" /> },
      { icon: <SiDocker size={48} className="text-primary" /> },
      { icon: <SiJupyter size={48} className="text-primary" /> },
      { icon: <SiSpyderide size={48} className="text-primary" /> },
      { icon: <SiGooglecolab size={48} className="text-primary" /> },
      { icon: <SiMicrosoftexcel size={48} className="text-primary" /> },
      { icon: <SiMicrosoftword size={48} className="text-primary" /> },
      { icon: <SiMicrosoftpowerpoint size={48} className="text-primary" /> },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="w-[505px] h-[505px] bg-no-repeat relative"
              imageSrc={"/hero/amal_blue.png"}
              maskSrc={"/hero/shape-1.svg"}
            />
          </div>
          {/* Tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-auto" value="personal">
                  {/* w-[162px] xl:w-auto */}
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Dedicated to Professional Growth
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Continuously learning new skills and applies them.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {/* icons  */}
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div flex flex-col gap-y-2>
                      {/* Languages  */}
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Malayalam, Tamil, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experiece and Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">I Use ...</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div>
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools list */}
                      <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center xl:justify-start xl:max-w-[520px]">
                        {getData(skillData, "Tools").data.map((item, index) => {
                          const { icon } = item;
                          return (
                            <div key={index}>
                              {/* <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              /> */}
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
