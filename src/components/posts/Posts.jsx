import { useEffect, useState } from "react";
import { getAllPosts } from "../../api/allposts";
import { SinglePost } from "../SinglePost/SinglePost";

const Posts = () => {
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getAllPosts();
      setNewPost(...newPost, response);
    };
    fetchPost();
  }, []);

  const renderPostData = newPost.slice(0, 10);

  return (
    <div>
      <ul>
        <SinglePost renderPostData={renderPostData} />
      </ul>
    </div>
  );
};

export { Posts };
