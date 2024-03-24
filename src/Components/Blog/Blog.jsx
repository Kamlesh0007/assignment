import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import imagurl from "../../assets/img/800x600.png";

const Blog = () => {
  const blogPosts = [
    {
      date: "24 March, 2023",
      title: "Miscovery incommode earnestly commanded if.",
      author: "Md Sohag",
      comments: "16",
    },
    {
      date: "17 April, 2023",
      title: "Expression acceptance imprudence particular",
      author: "Md Sohag",
      comments: "29",
    },
    {
      date: "08 July, 2023",
      title: "Bethering occurs concerns removing desirous.",
      author: "Md Sohag",
      comments: "46",
    },
  ];

  return (
    <div className="home-blog default-padding bottom-less" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">News & Article</h4>
              <h2 className="title">Latest from blog</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {blogPosts.map((blog, index) => (
            <div className="blog-style-one mb-30 col-xl-4 col-md-6" key={index}>
              <div className="item">
                <div className="thumb">
                  <Link to="/blog-single-with-sidebar">
                    <img src={imagurl} alt="Thumb" />
                  </Link>
                  <div className="inner-date">
                    <strong>{blog.date.split(" ")[0]}</strong>{" "}
                    {blog.date.split(" ")[1] + " " + blog.date.split(" ")[2]}
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <Link to="/blog-single-with-sidebar">{blog.title}</Link>
                  </h4>
                  <div className="meta">
                    <ul>
                      <li>
                        <Link to="#">{blog.author}</Link>
                      </li>
                      <li>
                        <Link to="#">{blog.comments} Comments</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
