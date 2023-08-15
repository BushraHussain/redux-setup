import Counter from "./components/counter";

import Link from "next/link";
export default function Home() {

  return (
    <div>
        <div className="flex justify-center text-3xl font-semibold bg-blue-200">Home page </div> 
        <div className="flex justify-center mt-10">
          <Counter />
        </div>

        <div className="flex justify-center mt-10 underline">
          <Link href="/profile">Go to Profile</Link>
        </div>

       

      </div>
  )
}
