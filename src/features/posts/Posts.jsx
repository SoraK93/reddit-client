import { AllPost } from "./components/AllPost";
import style from "./Post.module.css";

const Posts = () => {
  return (
    <div>
      <ul>
        <AllPost />
      </ul>
    </div>
  );
};

export { Posts };
