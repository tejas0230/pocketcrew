import { Mail } from "lucide-react";
import PocketCrewContainer from "./PocketCrewContainer";
import Link from "next/link";
export default function Footer(){
    return(
        <div className="w-full flex flex-col items-center bg-white">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[40px] gap-[12px]">
                    <div className="w-full flex justify-between">
                        <div>
                            <div className="text-[20px] font-light">Pocket<span className="font-black">Crew</span></div>
                            <div>AI teammates that handle the busywork, so your team can do their best work.</div>
                            <a href="mailto:tejas@pocketcrew.studio" className=" gap-[8px] items-center bg-[#1e1e1e] px-[16px] py-[8px] text-white inline-flex mt-[10px]"><Mail width={20} height={20} />tejas@pocketcrew.studio</a>
                        </div>
                        <ul className="text-[15px] font-medium">
                            <li className="text-right"><Link href="/">Home</Link></li>
                            {/* <li className="text-right"><Link href="#">Our Work</Link></li> */}
                            {/* <li className="text-right"><Link href="#">Case Studies</Link></li> */}
                            <li className="text-right"><Link href="#">Blog</Link></li>
                            <li className="text-right"><Link href="contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="bg-[#A3A3A3] h-[1px] w-full"></div>
                    <div className="text-[14px] font-medium flex justify-between w-full">
                        <div>© 2026 PocketCrew. All Rights Reserved.</div>
                        <ul className="flex gap-[38px]">
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                            {/* <li><Link href="#">Cookies Policy</Link></li> */}
                        </ul>
                    </div>
                </div>
            </PocketCrewContainer>
        </div>
    );
}