"use client";
import { useRouter } from "next/navigation";
import { Calendar, CalendarClock, CalendarDays, ChevronRight, Mail, Podium } from "lucide-react";
import PocketCrewContainer from "./PocketCrewContainer";
import { Button } from "../ui/button";
export default function TheSolution()
{

    const router = useRouter();

    const handleBookCall = () => {
        router.push("/book-meeting");
    };

    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[40px] sm:py-[80px] px-2">
                    <div className="text-[14px] text-white px-[16px] py-[8px] border border-[1px] border-white rounded-3xl lg:mb-[20px]">The Solution</div>
                    <h1 className="font-heading text-[32px] sm:text-[40px] text-white mb-[12px] text-center">Meet your AI Crew</h1>
                    <p className="text-[16px] text-[#dedede] max-w-[300px] sm:max-w-[480px] text-center leading-4 mb-[32px] lg:mb-[64px]">We build custom AI Agents that handles the busywork, so your team can focus on what actually matters.</p>
                    <div className="flex flex-wrap justify-center items-center gap-[32px] mb-[32px] sm:mb-[64px]">
                        <div className="flex flex-col gap-[8px] items-center justify-start">
                            <div className="w-[44px] h-[44px] p-2 rounded-3xl bg-white flex items-center justify-center"><Mail /></div>
                            <h1 className="text-white font-semibold text-[20px]">Inbox Agent</h1>
                            <p className="text-[#b8b8b8] leading-5 text-[15px] text-center max-w-[250px]">Reads, Sorts, and Replies to emails so nothing slips through.</p>
                        </div>
                        <div className="w-[2px] bg-[#5d5d5d] h-[100px] hidden lg:block"></div>

                        <div className="flex flex-col gap-[8px] items-center justify-start">
                            <div className="w-[44px] h-[44px] p-2 rounded-3xl bg-white flex items-center justify-center"><Podium /></div>
                            <h1 className="text-white font-semibold text-[20px]">Lead Agent</h1>
                            <p className="text-[#b8b8b8] leading-5 text-[15px] text-center max-w-[250px]">Qualifies leads, captures details, and follow up automatically.</p>
                        </div>
                        <div className="w-[2px] bg-[#5d5d5d] h-[100px] hidden lg:block"></div>

                        <div className="flex flex-col gap-[8px] items-center justify-start">
                            <div className="w-[44px] h-[44px] p-2 rounded-3xl bg-white flex items-center justify-center"><CalendarClock /></div>
                            <h1 className="text-white font-semibold text-[20px]">Schedular</h1>
                            <p className="text-[#b8b8b8] leading-5 text-[15px] text-center max-w-[250px]">Books meetings, manages calendars, and handles reschedules.</p>
                        </div>
                    </div>
                    <p className="text-[16px] text-white font-light mb-[8px]">Any other workflow you need, we’ll build.</p>
                    <Button className="flex items-center leading-[1px] text-[16px]" onClick={handleBookCall}><CalendarDays />Book a 30 minute Discovery Call <ChevronRight/></Button>
                </div>
            </PocketCrewContainer>
        </div>
    );
}