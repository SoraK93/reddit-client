import { SinglePost } from "../SinglePost/SinglePost";

const Posts = ({ newPost }) => {
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
