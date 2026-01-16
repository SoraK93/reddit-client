import { useSelector } from "react-redux";
import { selectAllPost, selectSubreddit } from "../../postSlice/postSlice";
import { PostList } from "./AllPost";

const AllPost = () => {
  const allPostData = useSelector(selectAllPost);
  const subreddit = useSelector(selectSubreddit);

  return (
    <ul>
      <PostList allPostData={allPostData} subreddit={subreddit} />
    </ul>
  );
};

export { AllPost };
