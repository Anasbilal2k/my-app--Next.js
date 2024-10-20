import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import {Button} from "./ui/moving-border"

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-black rounded-md flex flex-col items-centers justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="top-40 left-0 md:left-60 md:top-20"
        fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4x1 md:text-7x1 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Craft Of Coding</h1>
            <p className="mtt-4 font-normal text-base md:text-1g text-neutral-300 max-w-1g mx-auto">Mastering the craft of coding requires a blend of problem-solving, creativity, and continuous learning. It is about breaking complex ideas into elegant, efficient solutions while embracing failure as part of the growth process. The true mastery lies in the balance between writing clean, maintainable code and constantly refining your skills to stay ahead in the evolving tech landscape.</p>
            <div className="mt-4 font-normal text-base md:text-1g text-neutral-300 max-w-1g mx-auto">
                <Link href="/courses">
                <Button borderRadius="1.75rem"className= "bg-black text-whiteborder-slate-800">
                    EXPLORE courses
                </Button>
                </Link>

            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
