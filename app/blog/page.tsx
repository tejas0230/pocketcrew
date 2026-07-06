import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import PocketCrewContainer from "@/components/custom/PocketCrewContainer";
import { getPostSlugs, getPostBySlug } from "@/lib/blog";
import Image from "next/image";
export const metadata = {
    title: "Blog | PocketCrew",
    description: "Insights on AI agents and business automation.",
};

export default function BlogPage() {
    const posts = getPostSlugs()
        .map((slug) => getPostBySlug(slug))
        .sort((a, b) => b.date.localeCompare(a.date));

    return (
        <>
            <Navbar />
            <PocketCrewContainer>
                <div className="w-full px-6 py-4 md:py-10 sm:py-16">
                    <h1 className="font-heading text-[32px] md:text-[40px] text-white mb-4 text-center">
                        Blogs
                    </h1>   
                    <ul className="space-y-8 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full justify-start gap-[32px]">
                        {posts.map((post) => (
                            <li key={post.slug} className="w-full">
                                <Link 
                                    href={`/blog/${post.slug}`}
                                    className="flex flex-col gap-[8px] group"
                                >
                                    {post.cover &&(
                                        <Image src={post.cover} alt="" width={1000} height={1000} className="w-full rounded-xl"></Image>
                                    )}
                                    <div className="w-full ">
                                        <p className="text-sm text-white/80 mb-1">
                                            {post.date} · {post.author}
                                        </p>
                                        <h2 className="font-mono text-[16px] text-white font-semibold leading-[28px]">
                                            {post.title}
                                        </h2>
                                        <p className="text-black mt-2 leading-[18px] font-mono text-white/70">
                                            {post.description}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </PocketCrewContainer>
            <Footer />
        </>
    );
}
