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
  title: "Hi, Am Aneesh",
  description: "Frontend Developer skilled in building robust, scalable applications across web and mobile platforms. Proficient in React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Flutter, React Native, and Firebase. Experienced with Redux, Zustand, Context API, REST APIs, JWT, Jest, and React Testing Library. Strong command of CI/CD pipelines (GitHub Actions, Vercel, Netlify) and modern tooling like Webpack, Babel, and Git. Background in UX design enhances ability to deliver clean, user-friendly interfaces with a focus on performance, reusability, and collaboration in Agile environments.",
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
