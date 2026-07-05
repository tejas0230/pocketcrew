"use client";
import { ArrowRight, CalendarDays, CheckCircle, ChevronRight, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import PocketCrewContainer from "./PocketCrewContainer";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Hero()
{
    const router = useRouter();

    const benefits = [
        {
            metric:"15+",
            title:"Hours Saved Weekly",
            desc:"Reclaim hours every week and focus on growth."
        },
        {
            metric:"3-10x",
            title:"Faster Responses",
            desc:"Instant replies and follow-ups that convert more leads."
        },
        {
            metric:"20-40%",
            title:"Lower Operational Costs",
            desc:"Automate repetitive work and cut unnecessary costs."
        },
        {
            metric:"99%",
            title:"Accuracy & Reliability",
            desc:"AI that doesn't make mistakes or take time off."
        },
        {
            metric:"24/7",
            title:"Always Working",
            desc:"Your AI Crew new sleeps, complains, or calls in sick."
        }
    ];

    const handleBookCall = () => {
        router.push("/book-meeting");
    };

    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center pt-[40px] pb-[40px] md:pt-[80px] lg:pt-[160px] lg:pb-[80px] px-2">
                    <div className="text-[14px] text-white px-[16px] py-[8px] border border-[1px] border-white rounded-3xl mb-[24px]">AI Automation Agency</div>
                    <h1 className="max-w-[388px] sm:max-w-[706px] text-[32px] md:text-[44px] lg:text-[64px] font-heading text-[#f5f5f5] text-center leading-8 md:leading-12 lg:leading-16 mb-[20px]">We build you an AI Crew that works 24/7.</h1>
                    <p className="text-[16px] sm:text-[20px] text-[#dedede] text-center  max-w-[388px] sm:max-w-[568px] leading-4 sm:leading-6 mb-[40px]">PocketCrew builds custom AI automation that handle the busywork eating your time - so you cam run your business, not babysit it.</p>
                    <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[24px] mb-[24px] sm:mb-[16px]">
                        <Button className="text-[14px] sm:text-[16px] text-[#1e1e1e] font-medium flex gap-[8px]" onClick={handleBookCall}><CalendarDays />Book A 30 Minute Discovery Call <ChevronRight /> </Button>
                        <Button className="text-[14px] sm:text-[16px] text-white font-medium flex gap-[8px]" variant={"outline"}><PlayCircle />Watch a 2-min demo<ChevronRight /></Button>
                    </div>
                    <div className="sm:flex gap-[16px] mb-[40px] lg:mb-[128px] hidden">
                        <div className="flex gap-[4px] text-white text-[12px] items-center"><CheckCircle className="w-[20px]" />No Tech Jargons.</div>
                        <div className="flex gap-[4px] text-white text-[12px] items-center"><CheckCircle className="w-[20px]" />No Obligations.</div>
                        <div className="flex gap-[4px] text-white text-[12px] items-center"><CheckCircle className="w-[20px]" />Just 30 minutes to find out whats slowing you down.</div>
                    </div>
                    <div className="relative w-full rounded-3xl p-px bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0),rgba(255,255,255,1))] before:content-['']
                    before:absolute
                    before:inset-0
                    before:-z-10
                    before:rounded-3xl
                    before:bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0),rgba(255,255,255,1))]
                    before:blur-md
                    before:opacity-20">
                        <div className="w-full flex flex-wrap gap-y-[48px] sm:gap-y-[24px] justify-around rounded-3xl bg-[#1A1A1A] py-[20px]">
                            {
                                benefits.map((item,key)=>(
                                    <div className="flex flex-col items-center justify-start gap-[0px] sm:gap-[4px]" key={key}>
                                        <h1 className="font-extrabold text-[32px] text-white">{item.metric}</h1>
                                        <div className="text-[20px] sm:text-[14px] font-semibold text-white text-center">{item.title}</div>
                                        <div className="text-[18px] sm:text-[14px] font-light text-[#a2a2a2] text-center leading-4 max-w-[220px]">{item.desc}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </PocketCrewContainer>
        </div>
    );
}