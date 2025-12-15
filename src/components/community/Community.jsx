import style from "./Community.module.css";

const Community = ({ community }) => {
  const communityList = [];

  for (let item of community) {
    communityList.push(
      <li>
        <img src={item.thumbnail.url} alt="" />
        <p>{item.subreddit}</p>
      </li>
    );
  }

  return (
    <section>
      <div>
        <h2>Recent Community Post</h2>
      </div>
      <div>
        <ul>{communityList}</ul>
      </div>
    </section>
  );
};

export { Community };
