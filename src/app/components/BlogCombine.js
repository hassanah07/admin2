import React from "react";
import Bloglist from "./Bloglist";
import Pagenumber from "./Pagenumber";

const BlogCombine = ({ blogs, pageNumbers, myPage }) => {
  return (
    <>
      <section className="text-gray-600 body-font pb-14 min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <Bloglist blogs={blogs} />
          <div className="py-14">
            <div className="flex justify-center items-center align-bottom">
              <Pagenumber pageNumbers={pageNumbers} myPage={myPage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCombine;
