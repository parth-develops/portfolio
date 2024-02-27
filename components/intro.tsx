import Image from "next/image";
import propic from "@/assets/images/propic.jpg";

export default function Intro() {
  return (
    <section>
        <div className="flex justify-center items-center">
            <div>
                <Image src={propic} alt="Parth's profile picture" quality={90} priority={true} className="h-24 w-24 rounded-full border-[0.35rem] border-[#fff] shadow-xl" />
                <span className="text-3xl">👋🏼</span>
            </div>
        </div>
    </section>
  )
}
