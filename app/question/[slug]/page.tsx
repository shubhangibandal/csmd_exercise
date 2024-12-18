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
  <main className="flex flex-col p-6 text-white">
          <div className="text-white pl-80 pr-80 pt-0 pb-20 mb-20 flex h-[85vh] w-full flex-col overflow-auto">
            <h2 className="font-extrabold text-2xl mt-2 mb-2">Question {slug} </h2>
            <div className='pt-5'>
              {question.question}
            </div>
            <div className='pt-5 qanswer'>
            <h2 className="font-extrabold text-2xl mt-2 mb-2">Answer : </h2>
                <div className="product-des" dangerouslySetInnerHTML={{ __html: question.answer }} />
            </div>
          </div>
          <Navbar questions={menuItems}></Navbar>
        </main>
        </div>
  )
}
