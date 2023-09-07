import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "state";
import BlogWidget from "./BlogWidget";

const BlogsWidget = ({}) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const token = useSelector((state) => state.token);

  const getBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setBlogs({ blogs: data }));
  };
  useEffect(() => {
   getBlogs()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {blogs.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          location,
          statement,
          description,
          userPicturePath,
          likes,
          comments,
        }) => (
          <BlogWidget
            key={_id}
            blogId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            location = {location}
            statement = {statement}
            description={description}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default BlogsWidget;
