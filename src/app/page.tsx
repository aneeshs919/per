import Image from "next/image";
import HomePage from "./layout/HomePage";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col w-full">
        <HomePage />
      </main>
    </div>
  );
}
