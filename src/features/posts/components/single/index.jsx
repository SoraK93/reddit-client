import { useSelector } from "react-redux";
import { selectCurrentPost } from "../../postSlice/postSlice";
import { getPostAttachment } from "../../utility";
import { Comments } from "../Comments";
import style from "../AllPost/AllPost.module.css";

const SinglePost = () => {
  const { post, comments } = useSelector(selectCurrentPost);

  const mediaType = post.post_hint;
  const media = getPostAttachment(post, mediaType);

  return (
    <>
      <div>
        <article>
          <div className={style.postTitle}>
            <div className={style.authorDetail}>
              <div className={style.authorName}>
                <p>{post.author}</p>
                <p>{`r/${post.subreddit}`}</p>
              </div>
            </div>
            <h2>{post.title}</h2>
          </div>
          <div className={style.media}>{media}</div>
        </article>
      </div>
      <div>
        <Comments comments={comments} />
      </div>
    </>
  );
};

export { SinglePost };
