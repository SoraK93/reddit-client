import { useDispatch, useSelector } from "react-redux";
import style from "./Community.module.css";
import { selectSubreddit } from "../../features/posts/postSlice/postSlice";
import { fetchSubredditPost } from "../../api/allposts";
import { useNavigate } from "react-router";

const Community = () => {
  const community = useSelector(selectSubreddit);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    const targetSubreddit = e.target.textContent;
    navigate(`/${targetSubreddit}`);
    // dispatch(fetchSubredditPost(targetSubreddit))
  };

  return (
    <section>
      <div>
        <h2>Recent Community Post</h2>
      </div>
      <div>
        <ul className={style.subList}>
          {community.map((item) => {
            return (
              <li
                key={item.id}
                data-item-id={item.id}
                className={style.sub}
                onClick={handleOnClick}
              >
                <img src={item.thumbnail.url} alt="" />
                <p>{item.name_prefix}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Community };
