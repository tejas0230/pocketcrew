import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");
const publicDirectory = path.join(process.cwd(), "public");

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    cover?: string;
    content: string;
};

function resolveCover(slug: string, frontmatterCover?: string): string | undefined {
    if (frontmatterCover) {
        return frontmatterCover.startsWith("/")
            ? frontmatterCover
            : `/${frontmatterCover}`;
    }

    const coverDir = path.join(publicDirectory, "blog", slug);
    if (!fs.existsSync(coverDir)) {
        return undefined;
    }

    const coverFile = fs
        .readdirSync(coverDir)
        .find((file) => /^cover\.(png|jpe?g|webp|gif)$/i.test(file));

    return coverFile ? `/blog/${slug}/${coverFile}` : undefined;
}

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(postsDirectory)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        author: data.author as string,
        cover: resolveCover(slug, data.cover as string | undefined),
        content,
    };
}
