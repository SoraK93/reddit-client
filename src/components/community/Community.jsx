import { useSelector } from "react-redux";
import style from "./Community.module.css";
import { selectSubreddit } from "../../features/posts/postSlice/postSlice";

const Community = () => {
  const community = useSelector(selectSubreddit);

  const handleOnClick = () => {};

  return (
    <section>
      <div>
        <h2>Recent Community Post</h2>
      </div>
      <div>
        <ul className={style.subList}>
          {community.map((item) => {
            return (
              <li key={item.id} className={style.sub} onClick={handleOnClick}>
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
