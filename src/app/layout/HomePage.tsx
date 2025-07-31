import Image from "next/image";
import { BoxAlign } from "../components/common/BoxAlign";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faLocation,
  faMailBulk,
  faMobile,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const pattern = `bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t dark:[--pattern-fg:var(--color-white)]/10`;
const HomePage = () => {
  return (
    <>
      <BoxAlign className="w-full max-w-[800px] mx-auto flex justify-between">
        <BoxAlign brX className="p-4">
          <div className="rounded-full p-2  w-[160px] h-[160px] border-[#222] border-[2px]">
            <Image
              className="rounded-full"
              src="/photo.jpeg"
              alt="aneesh"
              width={160}
              height={150}
            />
          </div>
        </BoxAlign>
        <Details />
      </BoxAlign>
      <BoxAlign className={`h-10 ${pattern}`}>
        <div className="h-full"></div>
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
    </>
  );
};

const Details = () => {
  const name = "Aneesh S";
  const role = "Frontend Developer, Product Designer";
  return (
    <div className={`p-8 pb-6 flex flex-col flex-1 justify-end ${pattern}`}>
      <div>
        <h1 className="text-4xl font-bold">Hi, I'm {name}</h1>
        <p className="text-xl">{role}</p>
        <div className="mt-4 flex">
          <a
            download
            href="/Aneesh_resume_1.pdf"
            className="bg-[#444] rounded-md border border-[#222] p-2 px-4 flex-grow-0"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

const Self = () => {
  const personalDetails = [
    {
      icon: <FontAwesomeIcon width={15} icon={faEnvelope} />,
      text: "aneeshs1992@gmail.com",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faLocation} />,
      text: "Bangalore, Karnataka",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faWhatsapp} />,
      text: "+91 9061184003",
    },
    {
      icon: <FontAwesomeIcon width={15} icon={faPhone} />,
      text: "+91 9061184003",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {personalDetails.map((detail) => {
        return (
          <div className="flex gap-2 items-center" key={detail.text}>
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
  const about = `Front-End Developer with 4+ years of experience in designing and building high-performance, user-focused web
applications using React.js, TypeScript, Next.js, and SvelteKit. Proven expertise in developing reusable component
libraries, enhancing web performance (Lighthouse, SEO), and delivering clean, scalable UI architecture. Comfortable
leveraging modern frameworks like SvelteKit to create fast, efficient applications with server-side rendering. Secondary
experience in cross-platform mobile app development using React Native and Flutter. Strong collaborator in agile teams
with a product mindset.`;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p>{about}</p>
    </div>
  );
};

export default HomePage;
