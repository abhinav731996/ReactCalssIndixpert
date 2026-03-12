import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { blogData } from "../../data/blogsData";
import { Button, Image } from "react-bootstrap";

const BlogDetails = () => {
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // const blogInfo = blogData.filter((blog) => blog.id == param.id)[0];
  const blogInfo = blogData.find((blog) => blog.id == param.id);

  // to find current index
  const currentIndex = blogData.findIndex((blog) => blog.id == param.id);

  // to find nexxt blog
  const nextBlog = blogData[currentIndex + 1];

  // go to previous page
  const prevBlog = blogData[currentIndex - 1];

  return (
    <div>
      <h1>This is blog details page</h1>
      <hr />
      {/* <pre>{JSON.stringify(param, null, 2)}</pre>
      Id = {param.id}
      <br />
      Slug = {param.slug}
      <br /> */}
      location data: <pre>{JSON.stringify(location, null, 2)}</pre>
      <br />
      search: {location?.search}
      <br />
      hash value: {location?.hash}
      <br />
      state value: {location?.state?.blogInfo}
      <hr />
      <Button onClick={() => navigate("/blog-listing")}>
        Back to blog
      </Button>{" "}
      {/* <Button onClick={() => navigate(-1)}>Back to previous page</Button>{" "} */}
      <Button
        onClick={() => {
          if (prevBlog) {
            navigate(`/blog-details/${prevBlog.id}`);
          }
        }}
      >
        Previous Blog
      </Button>{" "}
      <Button
        onClick={() => {
          if (nextBlog) {
            navigate(`/blog-details/${nextBlog.id}`);
          }
        }}
      >
        Next Blog
      </Button>
      <hr />
      {/* Blog Infromation  */}
      Path {pathname}
      <h1>{blogInfo?.title}</h1>
      <Image src={blogInfo?.image} />
      <p>{blogInfo?.body}</p>
      {/* <pre>{JSON.stringify(blogInfo, null, 2)}</pre> */}
      {/* <NavLink to="/blog-listing"> */}
      <NavLink to="/blog-details">Back</NavLink>
    </div>
  );
};

export default BlogDetails;
