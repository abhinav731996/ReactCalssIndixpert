import { Button } from "react-bootstrap";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const BlogListing = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>{" "}
      <Button onClick={() => navigate(1)}>Next</Button>
      <br />
      useParams()
      <pre> {JSON.stringify(params, null, 2)}</pre>
      <br />
      useLocation()
      <pre> {JSON.stringify(location, null, 2)}</pre>
    </>
  );
};
export default BlogListing;
