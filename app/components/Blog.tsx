"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
    id: number;
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    published_at: string;
};

export default function Blog() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/blogs')
            .then(res => {
                if (!res.ok) throw new Error('Gagal fetch data') 
                    return res.json()
            })
            .then(data => setBlogs(data.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <section id="blog" className="pt-16 pb-20 bg-violet-700">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider text-center">
                Latest Blogs
                </h3>

                {blogs.length === 0 ? (
                    <div className="flex justify-center items-center mt-10 min-h-[200px]">
                        <div className="w-10 h-10 border-4 border-white border-t-violet-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                        {blogs.map(blog => (
                            <div
                            key={blog.id}
                            className="group overflow-hidden shadow-xl rounded-lg bg-white dark:bg-slate-800 
                            hover:shadow-2xl hover:scale-100 hover:-translate-y-2 transition duration-300 ease-in-out"
                            >
                                <img src={blog.thumbnail} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{blog.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{blog.description}</p>
                                    <Link 
                                        href={`/blog/${blog.id}`}
                                        className= "inline-block mt-4 text-violet-700 font-semibold hover:underline"
                                    >
                                    Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}