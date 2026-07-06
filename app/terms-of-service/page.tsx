import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";

export default function TermsOfServicePage() {
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-[#1A1A1A] text-white">
            <section className="max-w-4xl mx-auto px-6 py-8 lg:py-32">

                <div className="mb-16">
                    <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
                        Terms of Service
                    </span>

                    <h1 className="mt-8 font-serif text-5xl md:text-6xl leading-tight">
                        Terms & Conditions.
                    </h1>

                    <p className="mt-6 text-lg text-white/60 leading-8 max-w-3xl">
                        These Terms of Service govern your use of the PocketCrew
                        website and services. By accessing our website or
                        engaging our services, you agree to these terms.
                    </p>

                    <p className="mt-4 text-sm text-white/40">
                        Last Updated: July 2026
                    </p>
                </div>

                <div className="space-y-14 text-white/70 leading-8">

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Acceptance of Terms
                        </h2>

                        <p>
                            By accessing or using our website, booking a
                            discovery call, or purchasing our services, you
                            agree to be bound by these Terms of Service. If you
                            do not agree, please do not use our website or
                            services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Our Services
                        </h2>

                        <p>
                            PocketCrew designs, develops, and implements custom
                            AI automation systems and workflow solutions. The
                            exact scope, deliverables, pricing, and timelines
                            are defined separately in written proposals,
                            quotations, or agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Client Responsibilities
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Provide accurate information and project requirements.</li>
                            <li>Grant necessary access to required software and platforms.</li>
                            <li>Review deliverables and provide timely feedback.</li>
                            <li>Ensure compliance with applicable laws when using our solutions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Intellectual Property
                        </h2>

                        <p>
                            Unless otherwise agreed in writing, PocketCrew
                            retains ownership of its proprietary methodologies,
                            software, frameworks, templates, and internal tools.
                            Ownership of custom deliverables will be governed by
                            the applicable project agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Payments
                        </h2>

                        <p>
                            Fees, payment schedules, and billing terms are
                            specified in your project proposal or invoice.
                            Failure to make payments may result in suspension of
                            ongoing work until outstanding balances are cleared.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Confidentiality
                        </h2>

                        <p>
                            We treat client information as confidential and will
                            not disclose proprietary business information except
                            where required by law or with your permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Limitation of Liability
                        </h2>

                        <p>
                            PocketCrew is not liable for indirect, incidental,
                            consequential, or special damages arising from the
                            use of our website or services. Our liability is
                            limited to the amount paid for the services giving
                            rise to the claim, to the extent permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Third-Party Services
                        </h2>

                        <p>
                            Our solutions may integrate with third-party
                            platforms such as Google Workspace, Microsoft 365,
                            OpenAI, CRMs, payment providers, and other business
                            software. We are not responsible for the
                            availability, performance, or policies of these
                            third-party services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Termination
                        </h2>

                        <p>
                            Either party may terminate an engagement according
                            to the terms outlined in the applicable project
                            agreement. Any outstanding fees for completed work
                            remain payable upon termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Changes to These Terms
                        </h2>

                        <p>
                            We may revise these Terms of Service from time to
                            time. Updated versions will be published on this
                            page with a revised effective date.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Contact
                        </h2>

                        <p>
                            If you have any questions regarding these Terms of
                            Service, please contact us at:
                        </p>

                        <p className="mt-4 text-white">
                            tejas@pocketcrew.studio
                        </p>
                    </section>

                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}