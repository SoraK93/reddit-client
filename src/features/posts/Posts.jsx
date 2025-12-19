import { SinglePost } from "./components/SinglePost";
import style from "./Post.module.css";

const Posts = () => {
  return (
    <div>
      <ul>
        <SinglePost />
      </ul>
    </div>
  );
};

export { Posts };
