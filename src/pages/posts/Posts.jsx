import { useEffect, useState } from "react";
import { getAllPosts } from "../../api/allposts";
import { render } from "@testing-library/react";

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
  console.log(renderPostData);
  return (
    <div>
      {renderPostData.slice(0, 10).map((post) => {
        return (
          <article>
            <div>
              <div>
                <p>{post.data.author}</p>
                <p>r/{post.data.subreddit}</p>
              </div>
              <h2>{post.data.title}</h2>
            </div>
            <img src={post.data.url} alt="" />
          </article>
        );
      })}
    </div>
  );
};

export { Posts };
