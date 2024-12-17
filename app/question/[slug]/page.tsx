import { promises as fs } from 'fs';
import path from 'path';
import Navbar from "@/components/navbar";

export default async function Question({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
  const slug = (await params).slug

  // Read the questions from the JSON file
  const filePath = path.join(process.cwd(), 'public', 'data/questions.json');
  const fileContents = fs.readFile(filePath, 'utf8');
  const menuItems = JSON.parse(await fileContents);
  const question = menuItems.find((q: { qid: number;question: string; answer:string}) => q.qid == slug);
  return (
  <div className="bg-black">
  <main className="min-h-screen p-6 text-white">
          <div className="text-white pl-80 pr-80 pt-0">
            <h2 className="font-extrabold mt-2">Question {slug} </h2>
            <div className='pt-5'>
              {question.question}
            </div>
            <div className='pt-5'>
            <h2 className="font-extrabold mt-2">Answer : </h2>
                <div className="product-des" dangerouslySetInnerHTML={{ __html: question.answer }} />
            </div>
           
          </div>
          <Navbar questions={menuItems}></Navbar>
        </main>
        </div>
  )
}
