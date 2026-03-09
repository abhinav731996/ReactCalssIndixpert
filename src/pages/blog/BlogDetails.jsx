import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../../data/blogsData';
import { Button, Image } from 'react-bootstrap';

const BlogDetails = () => {
  const param = useParams();
   const { pathname } = useLocation();
        useEffect(() => {
             window.scroll(0, 0);
       }, [pathname]);

       const navigate = useNavigate();
       
  const blogInfo = blogData.filter((blog) => blog.id == param.id)[0];

  const location = useLocation();

  return (
    <div>
      <h1>Thsi is blog details page</h1>
      <hr />

      {/* <pre>{JSON.stringify(param, null, 2)}</pre>
      Id = {param.id}
      <br />
      Slug = {param.slug}
      <br /> */}
      location data : <pre>{JSON.stringify(location, null, 2)}</pre>

      <Button onClick={()=> navigate("/blog-listing")} >Back to blog</Button>{" "}
      <Button onClick={()=> navigate(-1)} >Back to previous page</Button>

        <hr />
      {/* Blog Infromation  */}
      Path {pathname}
      <h1>{blogInfo.title}</h1>
      <Image src={blogInfo.image}/>
      <p>{blogInfo.body}</p>
      {/* <pre>{JSON.stringify(blogInfo, null, 2)}</pre> */}
    </div>
  )
}

export default BlogDetails
