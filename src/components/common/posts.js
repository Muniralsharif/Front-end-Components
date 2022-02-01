import React from "react";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <ul
            className="mb-4 grid  md:grid-cols-3 lg:grid-cols-4 lg:mt-4
            elg:mb-4 sm:grid-cols-1"
        >
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Posts;
