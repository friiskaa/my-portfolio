import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";

type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  published_at: string;
  thumbnail: string;
};

export type paramsType = Promise<{ id: string }>;

export default async function BlogDetail(props: { params: paramsType }) {
  const { id } = await props.params;
  const res = await fetch(`http://localhost:8000/api/blog/${id}`);

  if (!res.ok) return notFound();

  const blog: Blog = (await res.json()).data;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mt-10 mb-4">{blog.title}</h1>
      <Image
        src={blog.thumbnail}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full mb-4 rounded object-cover h-80"
      />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <Link
        href="/"
        className="inline-flex mt-4 py-2 px-4 gap-2 rounded-full bg-violet-700 text-white font-semibold hover:bg-violet-300 hover:text-slate-700 transition"
      >
        <IoChevronBack className="my-auto h-5 w-5" />
        <span>Back</span>
      </Link>
    </div>
  );
}
