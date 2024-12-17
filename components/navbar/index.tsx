import React from "react";
import Link from "next/link";
interface NavItem {
  qid: number,
  question: string
  answer: string
}

const Navbar = ({ questions } : any) => {
  return  <nav className="absolute bottom-0 left-20 right-0 text-center">
            <ul className="flex text-white">
              <li className="flex flex-row space-y-4 m-6">
                <Link key="" href='/' className="hover:text-accent">
                  Home
                </Link>
              </li>
              {questions.map((que: { qid: null }) => (
                <li key={que.qid} className="flex flex-row space-y-4 m-6">
                  <Link key={que.qid} href={`/question/${que.qid}`} className="hover:text-accent">
                  Question {que.qid}
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: '20px', height: '20px',  marginTop: '3px', marginLeft: '8px', marginRight: '8px', color: 'white' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>
          </nav>
} 
export default Navbar;