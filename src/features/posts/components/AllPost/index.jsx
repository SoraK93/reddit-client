import { useSelector } from "react-redux";
import { selectAllPost, selectSubreddit } from "../../postSlice/postSlice";
import { PostList } from "./AllPost";

const AllPost = () => {
  const allPostData = useSelector(selectAllPost);
  const subreddit = useSelector(selectSubreddit);

  return (
    <ul>
      <PostList allPostData={allPostData.slice(0, 10)} subreddit={subreddit} />
    </ul>
  );
};

export { AllPost };
