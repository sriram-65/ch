import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import './styles/style.css'
export default function Home() {
  return (
   <>
    <div className="flex flex-col justify-center items-center w-full h-screen bg-white animated-gradient ">
      <h1 className="mt-10 text-6xl text-white font-bold m-3">Get Start With Our AI Models</h1>
      <br />
      <br />
      <p className="font-mono text-white font-extrabold m-7">This Application Was Developed and Hosted By Sriram And Arfan From  Muthu Thevar Mukkulathore HR.Sec School in Thirunagar,Madurai</p>
      <br />
      <br />
      <div>
        <Link href={"/dashboard"}>
       <Button className="p-6" >GET START</Button>
       </Link>
      </div>
    

    </div>
   
   </>
  );
}
