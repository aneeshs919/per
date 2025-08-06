"use client";
import Image from "next/image";
import { BoxAlign } from "../components/common/BoxAlign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const pattern = `
  bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
  bg-[size:10px_10px]
  bg-fixed
  [--pattern-fg:var(--color-white)]/10
`;
const HomePage = () => {
  return (
    <>
      <BoxAlign className="w-full max-w-[800px] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between">
        <BoxAlign brX className="p-4 flex flex-col gap-4 items-center">
          <div className="rounded-full p-2 w-[160px] h-[160px] md:border-[2px] md:border-[#222]">
            <Image
              className="rounded-full"
              src="/photo1.jpeg"
              alt="aneesh"
              width={160}
              height={150}
            />
          </div>

          <UserDetails />
        </BoxAlign>
        <Details />
      </BoxAlign>
      <BoxAlign className={`h-10 ${pattern}`}>
        <div className="h-full w-full" />
      </BoxAlign>
      <BoxAlign
        brX
        className=" p-4 w-full max-w-[800px] mx-auto flex justify-between"
      >
        <Self />
      </BoxAlign>
      <BoxAlign className={`h-10 ${pattern}`}>
        <div className="h-full"></div>
      </BoxAlign>
      <BoxAlign
        brX
        className=" p-4 w-full max-w-[800px] mx-auto flex justify-between"
      >
        <About />
      </BoxAlign>
      <BoxAlign className={`h-10 ${pattern}`}>
        <div className="h-full"></div>
      </BoxAlign>
      <BoxAlign
        brX
        className=" p-4 w-full max-w-[800px] mx-auto flex justify-between"
      >
        <Skills />
      </BoxAlign>
      <BoxAlign className={`h-10 ${pattern}`}>
        <div className="h-full"></div>
      </BoxAlign>
    </>
  );
};

const UserDetails = () => {
  const name = "Aneesh S";
  const role = "Frontend Developer, Product Designer";
  const location = "Bangalore, India";

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-body">{role}</p>
      <p className="text-body">{location}</p>
    </div>
  );
};

const Details = () => {
  const note = `I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.`;
  const title = `Let's Work Together`;
  return (
    <div
      className={`p-8 pb-6 w-full flex flex-col flex-1 justify-end ${pattern}`}
    >
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-body">{note}</p>
      <div className="mt-4 flex">
        <a
          download
          href="/Aneesh_resume.pdf"
          className="bg-[#8c49e7] hover:bg-[#6c3be7] text-[#fff] rounded-md p-2 px-4 flex-grow-0"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

const Self = () => {
  const personalDetails = [
    {
      icon: <FontAwesomeIcon width={15} icon={faEnvelope} />,
      text: "aneeshs1992@gmail.com",
      type: "email",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faLocation} />,
      text: "Bangalore, Karnataka",
      type: "location",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faWhatsapp} />,
      text: "+91 9061184003",
      type: "whatsapp",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faPhone} />,
      text: "+91 9061184003",
      type: "phone",
    },
  ];

  const handleClick = (text: string, type: string) => {
    if (type === "whatsapp") {
      window.open(`https://wa.me/${text}`, "_blank");
    } else if (type === "email") {
      window.open(`mailto:${text}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {personalDetails.map((detail, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(detail.text, detail.type)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <span className="w-8 h-8 p-2 rounded-full bg-[#333] align-middle flex items-center justify-center">
              {detail.icon}
            </span>
            <p>{detail.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  const about = `Frontend Developer skilled in building robust, scalable applications across web and mobile platforms. Proficient in 
React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Flutter, React Native, and Firebase. Experienced with 
Redux, Zustand, Context API, REST APIs, JWT, Jest, and React Testing Library. Strong command of CI/CD pipelines 
(GitHub Actions, Vercel, Netlify) and modern tooling like Webpack, Babel, and Git. Background in UX design enhances 
ability to deliver clean, user-friendly interfaces with a focus on performance, reusability, and collaboration in Agile 
environments.`;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p>{about}</p>
    </div>
  );
};

const Skills = () => {
  const skills = {
    Languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Dart"],
    "Web Stack": [
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "SvelteKit",
      "jQuery",
      "Bootstrap",
      "CSS Modules",
    ],
    "Mobile Stack": ["React Native", "Flutter", "Firebase", "Expo"],
    "State Management": ["Redux", "Zustand", "Context API", "React Hooks"],
    "APIs & Auth": [
      "REST APIs",
      "GraphQL",
      "Firebase",
      "JWT",
      "Axios",
      "Fetch API",
    ],
    Testing: ["Jest", "React Testing Library (basic)"],
    Tooling: [
      "Webpack",
      "Babel",
      "npm",
      "Yarn",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
    ],
    "CI/CD & Deployment": [
      "GitHub Actions",
      "Netlify",
      "Vercel",
      "GitHub Pages",
      "Play Store",
      "App Store",
    ],
    DevTools: ["Chrome DevTools", "Firefox Developer Tools"],
    "Design Tools": ["Figma", "Zeplin", "Sketch", "Photoshop"],
    "Product & Analytics Tools": ["Notion", "Hotjar", "Lookback"],
  };

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-1">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#333] text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
