import { Zap } from "lucide-react";
import PocketCrewContainer from "./PocketCrewContainer";
export default function SeeInAction()
{
    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[40px] sm:py-[80px] px-2">
                    <div className="text-[14px] text-white px-[16px] py-[8px] border border-[1px] border-white rounded-3xl mb-[20px]">See In Action</div>
                    <h1 className="font-heading text-[40px] text-white mb-[12px] text-center leading-10">Real Workflows. Real Results.</h1>
                    <p className="text-[16px] text-[#dedede] max-w-[480px] text-center leading-4 mb-[32px] sm:mb-[64px]">See how PocketCrew automates your entire lead-to-meeting process so nothing falls through the cracks.</p>
                    <video src="/videos/workflow-animation.mp4" autoPlay muted loop playsInline className="rounded-xl w-full sm:max-w-[576px] md:max-w-[768px] lg:max-w-[890px] mb-[32px] sm:mb-[64px]" />
                    <div className="flex gap-[32px] justify-around  flex-wrap lg:no-wrap sm:justify-center">
                        <div className="flex flex-col items-center gap-[8px] justify-start">
                            <div className="bg-white rounded-3xl w-[44px] h-[44px] flex items-center justify-center"><Zap /></div>
                            <h1 className="text-[16px] font-semibold text-white ">Instant Trigger</h1>
                            <p className="text-[14px] font-light text-[#b8b8b8] leading-4  w-[180px] text-center">New lead submitted.</p>
                        </div>
                        <div className="w-[2px] bg-[#5d5d5d] h-[100px] hidden lg:block"></div>
                        
                        <div className="flex flex-col items-center gap-[8px] justify-start ">
                            <div className="bg-white rounded-3xl w-[44px] h-[44px] flex items-center justify-center"><Zap /></div>
                            <h1 className="text-[16px] font-semibold text-white ">AI Agent</h1>
                            <p className="text-[14px] font-light text-[#b8b8b8] leading-4 w-[180px] text-center">Understands, researches and creates proposal.</p>
                        </div>
                        <div className="w-[2px] bg-[#5d5d5d] h-[100px] hidden lg:block"></div>


                        <div className="flex flex-col items-center gap-[8px] justify-start">
                            <div className="bg-white rounded-3xl w-[44px] h-[44px] flex items-center justify-center"><Zap /></div>
                            <h1 className="text-[16px] font-semibold text-white ">Outreach & Meeting</h1>
                            <p className="text-[14px] font-light text-[#b8b8b8] leading-4 w-[180px] text-center">Email sent and meeting scheduled automatically.</p>
                        </div>
                        <div className="w-[2px] bg-[#5d5d5d] h-[100px] hidden lg:block"></div>


                        <div className="flex flex-col items-center gap-[8px] justify-start">
                            <div className="bg-white rounded-3xl w-[44px] h-[44px] flex items-center justify-center"><Zap /></div>
                            <h1 className="text-[16px] font-semibold text-white ">Team Notified</h1>
                            <p className="text-[14px] font-light text-[#b8b8b8] leading-4 w-[180px] text-center">Your sales team get notified in realtime.</p>
                        </div>

                    </div>
                </div>
            </PocketCrewContainer>
        </div>
    );
}