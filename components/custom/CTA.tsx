"use client";
import PocketCrewContainer from "./PocketCrewContainer";
import { Button } from "../ui/button";
import { CalendarDays, ChevronRight, PlayCircle, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
export default function CTA()
{

    const router = useRouter();

    const handleBookCall = () => {
        router.push("/book-meeting");
    };

    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[40px] bg-white p-2">
                    <div className="text-[14px] text-white px-[16px] py-[8px] rounded-3xl mb-[16px] bg-[#1c1c1c]">See In Action</div>
                    <h1 className="font-heading text-[40px] text-[#1d1d1d] mb-[12px] text-center leading-10">Let’s build your AI Crew.</h1>
                    <p className="text-[16px] text-[#3a3a3a] max-w-[480px] text-center leading-4 mb-[32px]">Book a free 30-minute discovery call and let’s uncover how automation can transform your business.</p>
                    <div className="flex gap-[12px] sm:gap-[24px] mb-[32px] flex-col sm:flex-row">
                        <Button className="text-[16px] text-white bg-[#1E1E1E] hover:bg-[#1E1E1E]/80  font-medium flex gap-[8px]" onClick={handleBookCall}><CalendarDays />Book A 30 Minute Discovery Call <ChevronRight /> </Button>
                        <Button className="text-[16px] text-[#1E1E1E] font-medium flex gap-[8px] bg-white border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white" variant={"outline"}><PlayCircle />Watch a 2-min demo<ChevronRight /></Button>
                    </div>
                    <div className="flex gap-[16px] flex-wrap w-full px-[20px] justify-center">
                        <div className="flex items-center gap-[8px] w-[200px]">
                            <Zap />
                            <div className="flex flex-col items-start ">
                                <h1 className="text-[16px] font-semibold ">Fast Onboarding</h1>
                                <p className="text-[14px] font-light text-[#4a4a4a] leading-3">Get started in days, not month.</p>
                            </div>
                        </div>
                        <div className="w-[2px] bg-[#3c3c3c] h-[40px] hidden lg:block"></div>

                        <div className="flex items-center gap-[8px] w-[200px]">
                            <Zap />
                            <div className="flex flex-col items-start ">
                                <h1 className="text-[16px] font-semibold ">Secure & Reliable</h1>
                                <p className="text-[14px] font-light text-[#4a4a4a] leading-3">Enterpise grade security.</p>
                            </div>
                        </div>
                        <div className="w-[2px] bg-[#3c3c3c] h-[40px] hidden lg:block"></div>

                        <div className="flex items-center gap-[8px] w-[200px]">
                            <Zap />
                            <div className="flex flex-col items-start ">
                                <h1 className="text-[16px] font-semibold ">Custom Built</h1>
                                <p className="text-[14px] font-light text-[#4a4a4a] leading-3">Tailored to your business.</p>
                            </div>
                        </div>
                        <div className="w-[2px] bg-[#3c3c3c] h-[40px] hidden lg:block"></div>

                        <div className="flex items-center gap-[8px] w-[200px]">
                            <Zap />
                            <div className="flex flex-col items-start ">
                                <h1 className="text-[16px] font-semibold ">Ongoing Support</h1>
                                <p className="text-[14px] font-light text-[#4a4a4a] leading-3">We're with you always.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PocketCrewContainer>
        </div>
    );
}