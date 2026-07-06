import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXcomponents";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import PocketCrewContainer from "@/components/custom/PocketCrewContainer";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import Image from "next/image";
export async function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    try {
        const post = getPostBySlug(slug);
        return {
            title: post.title,
            description: post.description,
        };
    } catch {
        return {};
    }
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    return (
        <>
            <Navbar />
                <PocketCrewContainer>
                    <article className="w-full px-4 py-10 sm:py-16">
                        <p className="text-sm text-zinc-400 text-center">
                            {post.date} · {post.author}
                        </p>
                        <h1 className="w-full text-[32px] font-heading text-white text-center mb-4">{post.title}</h1>
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                        />
                    </article>
                </PocketCrewContainer>
            <Footer />
        </>
    );
}
