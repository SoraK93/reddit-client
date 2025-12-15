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

  const postList = renderPostData.slice(0, 10).map((post) => {
    const mediaType = post.data.post_hint;
    let media;

    switch (mediaType) {
      case "image":
        media = <img src={post.data.url} alt="#" />;
        break;
      case "hosted:video":
        let source = post.data.secure_media?.reddit_video;
        console.log(source);
        media = (
          <video
            width={source.width}
            height={source.height}
            autoPlay
            muted
            controls
          >
            <source src={source.hls_url} type="video/mp4" />
          </video>
        );
        break;
    }

    return (
      <li key={post.data.id} id={post.data.id}>
        <article>
          <div>
            <div>
              <p>{post.data.author}</p>
              <p>{`r/${post.data.subreddit}`}</p>
            </div>
            <h2>{post.data.title}</h2>
          </div>
          <div>{media}</div>
        </article>
      </li>
    );
  });

  return (
    <div>
      <ul>{postList}</ul>
    </div>
  );
};

export { Posts };
