import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../components/common/posts";
import Pagination from "../components/common/pagination/pagination";
import Link from "next/link";
import Head from "next/head";
const About = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);
    // Get current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="flex flex-col justify-center items-center text-center w-full h-screen p-3">
                <Link href="/">
                    <h1 className="mb-3 text-purple-500 font-bold text-xl">
                        Go To Home Page
                    </h1>
                </Link>
                <Posts posts={currentPosts} loading={loading} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
        </>
    );
};

export default About;
