import { Zap } from "lucide-react";
import PocketCrewContainer from "./PocketCrewContainer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ()
{
    return(
        <div className="w-full flex flex-col items-center">
            <PocketCrewContainer>
                <div className="w-full flex flex-col items-center py-[40px] sm:py-[80px] px-6 ">
                    <h1 className="font-heading text-[40px] text-white mb-[12px] text-center leading-12">Frequently Asked Questions.</h1>
                    <p className="text-[16px] text-[#DEDEDE] max-w-[480px] text-center leading-4 mb-[32px]">Everything you need to know before getting started.</p>
                    <Accordion className="max-w-[450px]">
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">What exactly is an AI Crew?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            An AI Crew is a team of custom AI agents designed around your business. Each agent handles a specific workflow—like responding to inquiries, qualifying leads, scheduling appointments, or updating your CRM—working together 24/7.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">What kinds of businesses do you work with?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            We work with service businesses, agencies, healthcare providers, law firms, real estate teams, construction companies, education providers, and any business with repetitive operational work.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">Can you integrate with our existing software?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            Yes. We build automations around the tools you already use, including Gmail, Outlook, Google Workspace, Microsoft 365, HubSpot, Salesforce, Zoho, Slack, Notion, Airtable, CRMs, ERPs, and hundreds of other platforms.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">How long does it take to build?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            Most projects are delivered within 2–6 weeks, depending on complexity. Smaller automations can often be launched in just a few days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">What happens after launch?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            We continue to monitor, optimize, and improve your automations as your business evolves. Your AI Crew grows with your workflows.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">How much does it cost?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            Every business is different, so pricing depends on the workflows you want to automate. After a discovery call, we'll provide a clear proposal with no hidden fees.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionTrigger className="text-white text-[16px] font-light">How do we get started?</AccordionTrigger>
                            <AccordionContent className="text-[#A6A6A6] text-[14px]">
                            It starts with a free 30-minute discovery call. We'll understand your workflows, identify the biggest opportunities for automation, and recommend the right AI Crew for your business.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PocketCrewContainer>
        </div>
    );
}