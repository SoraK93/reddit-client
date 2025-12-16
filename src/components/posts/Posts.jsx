import { SinglePost } from "../SinglePost/SinglePost";
import style from "./Post.module.css"

const Posts = ({ newPost, sub }) => {
  const renderPostData = newPost.slice(0, 10);

  return (
    <div>
      <ul>
        <SinglePost renderPostData={renderPostData} sub={sub} />
      </ul>
    </div>
  );
};

export { Posts };
