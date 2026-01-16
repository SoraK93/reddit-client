import { getPostAttachment, getSubredditThumbnail } from "../../utility";
import style from "./AllPost.module.css";
import { useNavigate } from "react-router";

const handleOnClick = (e, navigate) => {
  e.stopPropagation();

  const targetedPost = e.target.closest("li");
  const id = targetedPost.id;
  const subredditName = targetedPost.dataset.subreddit.slice(2);

  navigate(`/r/${subredditName}/comments/${id}`);
};

const PostList = ({ allPostData, subreddit }) => {
  const navigate = useNavigate();

  return allPostData.slice(0, 10).map((post, index) => {
    const data = post.data;
    const mediaType = data.post_hint;

    const media = getPostAttachment(data, mediaType);
    const image = getSubredditThumbnail(data, subreddit[index]);

    return (
      <li
        key={data.id}
        id={data.id}
        data-subreddit={data.subreddit_name_prefixed}
      >
        <article onClick={(e) => handleOnClick(e, navigate)}>
          <div className={style.postTitle}>
            <div className={style.authorDetail}>
              {image}
              <div className={style.authorName}>
                <p>{data.author}</p>
                <p>{`r/${data.subreddit}`}</p>
              </div>
            </div>
            <h2>{data.title}</h2>
          </div>
          <div className={style.media}>{media}</div>
        </article>
      </li>
    );
  });
};

export { PostList };
