import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hi, I'm Aneesh | Frontend Developer & UX Designer",
  description:
    "Frontend Developer and UX Designer based in Bangalore, skilled in React.js, Next.js, TypeScript, Tailwind CSS, Flutter, and Firebase. Experienced in building scalable web and mobile applications with a focus on performance, reusability, and user experience.",
  keywords: [
    "Aneesh S",
    "Frontend Developer",
    "UX Designer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Flutter",
    "React Native",
    "Firebase",
    "Redux",
    "Zustand",
    "Context API",
    "REST API",
    "JWT",
    "Jest",
    "React Testing Library",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Netlify",
    "Webpack",
    "Babel",
    "Agile",
    "UI/UX",
    "Bangalore Developer"
  ],
  authors: [{ name: "Aneesh S" }],
  creator: "Aneesh S",
  publisher: "Aneesh S",
  robots: "index, follow",
  themeColor: "#0ea5e9", // Tailwind sky-500
  // openGraph: {
  //   title: "Aneesh S | Frontend Developer & UX Designer",
  //   description:
  //     "Crafting clean code and beautiful interfaces. Skilled in React, Next.js, TypeScript, Tailwind CSS, Flutter, Firebase, and more.",
  //   url: "https://aneesh.in",
  //   siteName: "Aneesh S Portfolio",
  //   images: [
  //     {
  //       url: "https://aneesh.in/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Aneesh S - Frontend Developer & UX Designer"
  //     }
  //   ],
  //   locale: "en_US",
  //   type: "website"
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Aneesh S | Frontend Developer & UX Designer",
  //   description:
  //     "Frontend Developer & UX Designer creating performant, user-friendly applications for web and mobile.",
  //   images: ["https://aneesh.in/og-image.jpg"]
  // }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
