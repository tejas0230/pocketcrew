import Image from "next/image";
import CTA from "@/components/custom/CTA";

function FeatureCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="border border-zinc-700 rounded-2xl p-6 my-4">
            <h3 className="font-mono text-[20px] text-white mb-2">{title}</h3>
            <p className="font-mono text-[16px] text-zinc-300">{description}</p>
        </div>
    );
}

function Youtube({ id }: { id: string }) {
    return (
        <div className="relative w-full aspect-video my-10 rounded-2xl overflow-hidden">
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}

export const mdxComponents = {
    FeatureCard,
    Youtube,
    CTA,
    h1: (props: any) => (
        <h1
            className="font-heading text-[32px] text-white mb-[16px]"
            {...props}
        />
    ),

    h2: (props: any) => (
        <h2
            className="font-mono text-[22px] text-white mb-[16px]"
            {...props}
        />
    ),

    p: (props: any) => (
        <p
            className="font-mono text-[16px] text-white mb-[16px]"
            {...props}
        />
    ),

    ul: (props: any) => (
        <ul
            className="list-disc ml-6 text-zinc-300 space-y-3 mb-8"
            {...props}
        />
    ),

    li: (props: any) => (
        <li className="leading-7" {...props} />
    ),

    blockquote: (props: any) => (
        <blockquote
            className="border-l-4 border-violet-500 pl-6 italic text-zinc-400 my-8"
            {...props}
        />
    ),

    img: (props: any) => (
        <Image
            src={props.src}
            alt={props.alt}
            width={1200}
            height={700}
            className="rounded-2xl my-10"
        />
    ),

    table: (props: any) => (
        <table
            className="w-full border-collapse my-10"
            {...props}
        />
    ),

    th: (props: any) => (
        <th
            className="border border-zinc-700 p-4 text-left"
            {...props}
        />
    ),

    td: (props: any) => (
        <td
            className="border border-zinc-700 p-4"
            {...props}
        />
    ),
}