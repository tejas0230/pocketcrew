import Image from "next/image";
import PocketCrewContainer from "./PocketCrewContainer"
import { ChevronRight, Mail } from "lucide-react";
export default function ContactUs()
{
    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col lg:flex-row justify-between pt-[40px] lg:pt-[160px] pb-[80px] gap-[64px] lg:gap-[128px] px-4">
                    <div className="lg:max-w-[50%] flex flex-col gap-[16px]">
                        <h1 className="text-[32px] font-heading text-white leading-[30px]">Contact Us</h1>
                        <p className="text-[18px] text-white leading-5">Tell us about your business and the work you'd like to automate. We'll identify opportunities, answer your questions, and show you what's possible.</p>
                        <div className="flex gap-[8px] flex-col sm:flex-row">
                            <a href="mailto:hello@pocketcrew.studio" className="flex bg-white text-[#1e1e1e] justify-center md:justify-between items-center gap-[8px] px-[16px] py-[8px]"><Mail />hello@pocketcrew.studio</a>
                            <div className="bg-green-600 hover:bg-green-700 inline-flex text-white px-[16px] py-[8px] justify-center items-center gap-[8px]">
                                <Image
                                src="/whatsapp.png"
                                width={20}
                                height={20}
                                alt="whatsapp-logo"
                                className="invert"
                                />
                                <a href="http://wa.me/919272506510" className="text-[18px] font-medium">Chat on Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <form action="" method="post" className="flex flex-col gap-[8px] w-full">
                            <div className="flex gap-[20px] flex-col">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-white">Name</label>
                                    <input type="text" className="bg-white/10 text-white placeholder:text-white/40 px-[16px] py-[8px]" placeholder="Name"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-white">Email</label>
                                    <input type="email" className="bg-white/10 text-white placeholder:text-white/40 px-[16px] py-[8px]" placeholder="abc@company.com"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-white">Company</label>
                                    <input type="text" className="bg-white/10 text-white placeholder:text-white/40 px-[16px] py-[8px]" placeholder="Company"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-white">What would you like to automate?</label>
                                    <input type="text" className="bg-white/10 text-white placeholder:text-white/40 px-[16px] py-[8px]" placeholder="We're spending too much time responding to leads, following up with clients, scheduling appointments, and updating our CRM..."/>
                                </div>
                            </div>
                            <div className="bg-white text-[#1e1e1e] flex justify-center items-center py-[8px] hover:cursor-pointer hover:bg-white/80 mt-[8px]">
                                Send Message <ChevronRight/>
                            </div>
                        </form>
                    </div>
                </div>
            </PocketCrewContainer>
        </div>
    );
}