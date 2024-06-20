import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" border-2 bg-slate-200 pt-3 pr-2 pl-2 mr-9 ml-9 rounded-2xl">
        <img src="/assets/images/images.jpeg" className=" rounded-2xl" alt="" />

        <p className=" font-bold text-xl border-2 bg-amber-400 mr-40 mt-2 mb-2 pl-3 pt-1 pb-1 rounded-r-md rounded-l-md">
          Learning
        </p>
        <p className=" pt-1 pb-1">Published 31 Dec 2023</p>
        <h1 className=" text-xl font-extrabold pb-2">
          HTML & CSS foundations{" "}
        </h1>
        <p className=" text-sm">
          These languages are the backbone of every <br></br>
          website defining strcuture ,conent and <br></br>
          presentation
        </p>
        <div className=" flex flex-row pt-4 gap-4 pb-3">
          <img
            src="/assets/images/image-avatar.webp"
            alt=""
            width="45"
            height="45"
          />
          <p className=" font-extrabold pt-2">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
