import style from "./Community.module.css";

const Community = ({ community }) => {
  return (
    <section>
      <div>
        <h2>Recent Community Post</h2>
      </div>
      <div>
        <ul>
          {community.map((item) => {
            return (
              <li key={item.id}>
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
