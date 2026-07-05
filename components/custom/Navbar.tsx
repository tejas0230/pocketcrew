"use client";
import { ArrowRight, Hamburger, HamburgerIcon, TextAlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PocketCrewContainer from "./PocketCrewContainer";
import Link from "next/link";
export default function Navbar()
{
    const router = useRouter();

    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleBookCall = () => {
        router.push("/book-meeting");
    };

    const handleOpenMobileNav = () =>{
        setShowMobileNav(!showMobileNav);
    };

    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex justify-between py-[12px] items-center px-[12px]">
                    <a href="/" className="text-[20px] text-white font-light">Pocket<span className="font-black">Crew</span></a>
                    <ul className="sm:flex gap-[32px] text-[14px] text-white font-light hidden ">
                        <Link href="/">Home</Link>
                        {/* <Link href="#">About Us</Link> */}
                        <Link href="#">Blog</Link>
                        <Link href="contact-us">Contact</Link>
                    </ul>
                    <Button variant={"default"} className="leading-[1px] hidden sm:flex" onClick={handleBookCall}>Book A Call <ArrowRight/></Button>
                    <div className="text-white block sm:hidden" onClick={handleOpenMobileNav}><TextAlignJustify/></div>
                </div>
                {
                    showMobileNav &&(
                        <ul className="px-[12px] flex flex-col gap-[8px] text-white bg-black/20 py-[12px] sm:hidden">
                            <li><Link href="/">Home</Link></li>
                            {/* <li><Link href="#">About Us</Link></li> */}
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="contact-us">Contact</Link></li>
                            <li>
                                <Button variant={"default"} className="leading-[1px] flex" onClick={handleBookCall}>Book A Call <ArrowRight/></Button>
                            </li>
                        </ul>
                    )
                }
            </PocketCrewContainer>
        </div>
    );
}