import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex ml-1 gap-1 ">
                {pageNumbers.map(
                    (number) =>
                        number !== 0 && (
                            <li
                                onClick={() => {
                                    paginate(number);
                                }}
                                key={number}
                                className="bg-gray-300 px-3 py-1 rounded"
                            >
                                <a href="#">{number}</a>
                            </li>
                        )
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
