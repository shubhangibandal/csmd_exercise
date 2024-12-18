"use client"
import Image from "next/image";
import Navbar from "../components/navbar";
import { useEffect, useState } from 'react'
interface NavItem {
  qid: number,
  question: string
  answer: string
}
export default function Home() {
  const [menuItems, setMenuItems] = useState<NavItem[]>([])

  useEffect(() => {
    async function fetchMenuData() {
      const response = await fetch('data/questions.json')
      const data = await response.json()
      setMenuItems(data)
    }
    fetchMenuData()
  }, [])
  return (
    <div className="text-white justify-center">
      <main className="flex min-h-screen flex-col p-6 m-10">
        <div className="flex flex-row ml-60 mt-20 w-96">
          <div className="text-center min-h-fit border-2 border-white min-w-80 pt-10 pb-10">
              <Image
              className="ml-20 rounded-full"
              src="/profile.jpeg"
              alt="Profile Pic"
              width={120}
              height={100}
            />
            <h2 className="font-extrabold mt-2">Shubhangi Bandal</h2>
            <p>10 Years experience</p>
            <p>Front End Developer</p>
            <p>Next.js | Devops | Cloud</p>
          </div>
          <div className=" min-h-fit border-2 border-white ml-80 mr-10 min-w-80 pl-6 pr-2 pb-10 pt-10">
            <Image
              className="text-center"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
            />
            <h4 className="font-extrabold from-neutral-300 mt-4">Design approach for Assigment</h4>
            <p className="pl-2"> - Dynamic App routing to generate question page </p>
            <p className="pl-2"> - Question and answer rendered from json file </p>
            <h4 className="font-extrabold from-neutral-300 mt-4">Referances</h4>
            <p className="pl-2"> - https://nextjs.org/docs</p>
            <p className="pl-2"> - https://tailwindcss.com/</p>
          </div>
        </div>
        <Navbar questions={menuItems}></Navbar>
      </main>
    </div>
  );
}
