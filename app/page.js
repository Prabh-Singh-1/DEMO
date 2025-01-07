"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "./components/Loader";
import Link from "next/link";
// import styles from './blog.css';


export default function Home() {
  const [blogpost, setBlogpost] = useState([]);
  // let data = await fetch('http://localhost:3000/api/blogpost/blog')
  // let blogpost = await JSON.parse(await data.text());
  useEffect(() => {
    async function fetchData() {
      let data = await fetch('http://localhost:3000/api/blogpost/blog')
      let posts = await JSON.parse(await data.text());
      setBlogpost(posts);
    }
    fetchData()
  }, [])
 
  return (
    <>
      <div className="bg-black text-white min-h-screen ">
        <section className="relative h-[500px] md:h-[700px] mt-4 md:m-10 ">
          <Image
            src="/images/next-image.png"
            alt="next js logo image"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
            <h1 className="text-4xl md:text-6xl font-bold">Discover Amazing Techie Blogs</h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl">
              Your go-to place for insightful Tech Updates, Tutorials, and much more.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-lg">
              Explore Now
            </button>
          </div>
        </section>


        <section className="pt-10 px-5 mx-5">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Articles</h2>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {blogpost.length === 0 && <div className="absolute left-[48%] top-[50%]"><Loader /></div>}
            {blogpost.map((blog) => (
              <div key={blog.slug}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={blog.image}
                      alt="Blog Post"
                      width={400}
                      height={250}
                      className="object-cover h-56"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{blog.title}</h3>
                      <p className="text-gray-400 mt-2">
                        {blog.headline.substring(0, 100)}...
                      </p>
                      <Link href={`blogpost/${blog.slug}`} className="text-blue-500 hover:underline mt-4 block">
                        Read More
                      </Link>
                    </div>
                  </div>
              </div>
            ))}
          </div >
        </section>
      </div>
      <div className="w-full h-1 bg-slate-700"></div>
    </>
  );
}
