
import React from 'react'
import Image from 'next/image';
// import { useParams } from 'next/navigation';
import Loader from '@/app/components/Loader';

export default async function page ({params}) {
    const createMarkup = (content) => {
        return {__html: content};
    }
    const { slug } = await params;

    // const params = useParams();
    const response = await fetch(`https://techi-talks.vercel.app/api/blogpost/getBlog?slug=${slug}`, {next: {revalidate: 1}});
    const blogpost = await response.json();
    
    // const [blogpost, setBlogpost] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //            ;
    //             if (response.status === 500) {
    //                 console.error('Internal Server Error');
    //                 return;
    //             }
               
    //             setBlogpost(post);
    //             console.log('Fetched  post:', post);
    //             console.log('Fetched blog post:', blogpost.image);

    //         } catch (error) {
    //             console.error('Error fetching blog post:', error);
    //         }
    //     }
    //     fetchData();
    // }, [params.slug]);
    return (
        <>
            <div className='min-h-screen py-5 text-white '>
                {blogpost.image === 0 && <div className="absolute left-[48%] top-[50%]"><Loader /></div>}
                <div className='flex flex-col justify-center items-center gap-5 relative border-2 border-white md:py-20 pt-20 pb-1 px-2 md:px-12 container mx-auto w-[95%] md:w-[80%] bg-gradient-to-r from-gray-800 to-gray-900 '>
                    <div className='flex flex-col justify-center items-center gap-7'>
                        <span className='text-base absolute left-20 top-12 font-medium'>Jan 3, 2025 . 2 min read</span>
                        <h1 className='text-4xl font-bold tracking-wide'>{blogpost.title}</h1>
                        <p className='text-xl font-semibold'>{blogpost.headline}</p>
                    </div>
                    <div className='text-xl font-normal my-4' dangerouslySetInnerHTML={createMarkup(blogpost.content)}></div>
                </div>
            </div>
        </>
    )
}

