import Counter from "../components/counter";
import Link from "next/link";

export default function Profile() {
    return (
      <div>
        <div className="flex justify-center text-3xl font-semibold bg-red-200">Profile page </div> 
        <div className="flex justify-center mt-10">
          <Counter />
        </div>

        <div className="flex justify-center mt-10 underline">
          <Link href="/">Back to home</Link>
        </div>

       

      </div>
    )
  }
  