import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";

export default function PrivacyPolicyPage() {
    return (

        <>
        <Navbar />
        
        <main className="min-h-screen bg-[#1A1A1A] text-white">
            <section className="max-w-4xl mx-auto px-6  py-8 lg:py-32">

                <div className="mb-16">
                    <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
                        Privacy Policy
                    </span>

                    <h1 className="mt-8 font-serif text-5xl md:text-6xl leading-tight">
                        Your privacy matters.
                    </h1>

                    <p className="mt-6 text-lg text-white/60 leading-8 max-w-3xl">
                        This Privacy Policy explains how PocketCrew collects,
                        uses, and protects your information when you visit our
                        website or use our services.
                    </p>

                    <p className="mt-4 text-sm text-white/40">
                        Last Updated: July 2026
                    </p>
                </div>

                <div className="space-y-14 text-white/70 leading-8">

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Information We Collect
                        </h2>

                        <p>
                            We may collect information that you voluntarily
                            provide, including your name, email address,
                            company name, phone number, and any information
                            submitted through our contact forms or discovery
                            call requests.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            How We Use Your Information
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Respond to enquiries.</li>
                            <li>Schedule discovery calls.</li>
                            <li>Provide our automation services.</li>
                            <li>Improve our website and customer experience.</li>
                            <li>Send relevant updates when you've opted in.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Cookies
                        </h2>

                        <p>
                            We use cookies and similar technologies to improve
                            website performance, understand visitor behaviour,
                            and enhance your browsing experience. You can
                            disable cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Third-Party Services
                        </h2>

                        <p>
                            We may use trusted third-party providers such as
                            Google Analytics, Calendly, Google Workspace, and
                            payment or communication platforms. These providers
                            process data according to their own privacy
                            policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Data Security
                        </h2>

                        <p>
                            We implement appropriate technical and
                            organizational measures to protect your information.
                            While no system is completely secure, we work to
                            safeguard your data using industry best practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Your Rights
                        </h2>

                        <p>
                            Depending on your location, you may have the right
                            to access, update, correct, or delete your personal
                            information. You may also request a copy of the
                            data we hold about you.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Changes to This Policy
                        </h2>

                        <p>
                            We may update this Privacy Policy periodically. Any
                            changes will be published on this page with an
                            updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-white mb-4">
                            Contact Us
                        </h2>

                        <p>
                            If you have any questions regarding this Privacy
                            Policy or how we process your data, please contact
                            us at:
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