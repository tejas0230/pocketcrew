"use client";
import PocketCrewContainer from "./PocketCrewContainer";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookAMeeting()
{
    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[80px]">
                <h1 className="font-heading text-[32px] text-white mb-[8px]">Book A Meeting</h1>
                <p className="text-[18px] text-white/70 mb-[16px] max-w-[500px] text-center leading-4">Book a short 30 minute discovery call to discuss your business processes and see what all thing can we automate.</p>
                <Cal namespace="30min"
                    calLink="pocketcrew/30min"
                    style={{width:"100%",height:"100%",overflow:"scroll"}}
                    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
                />
                </div>
            </PocketCrewContainer>
        </div>
    );
}