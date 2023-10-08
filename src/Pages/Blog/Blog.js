import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50 text-gray-900 px-6">
      <div className="card max-w-sm bg-gray-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/rkjRWvn/1.jpg" alt="ring" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Earrings for Navratri</h2>
          <p>
            <span className="">by</span>
            <span className="text-orange-500 text-sm px-4">Ashirwaad</span>
            <span class="post_by">/ 4 November 2023</span>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi
                                            quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam
                                            sint, expedita dolor.</p>
        </div>
      </div>
      <div className="card max-w-sm bg-gray-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/PYGBq7v/3.jpg" alt="ring" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Earrings for Engesment</h2>
          <p>
            <span className="">by</span>
            <span className="text-orange-500 text-sm px-4">Ashirwaad</span>
            <span class="post_by">/ 4 November 2023</span>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi
                                            quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam
                                            sint, expedita dolor.</p>
        </div>
      </div>
      <div className="card max-w-sm bg-gray-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/ZLYD1mZ/2.jpg" alt="ring" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Earrings for Party</h2>
          <p>
            <span className="">by</span>
            <span className="text-orange-500 text-sm px-4">Ashirwaad</span>
            <span class="post_by">/ 4 November 2023</span>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi
                                            quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam
                                            sint, expedita dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
