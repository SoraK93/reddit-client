import style from "./SinglePost.module.css";

const SinglePost = ({ renderPostData, sub }) => {
  return renderPostData.slice(0, 10).map((post, index) => {
    const data = post.data
    const mediaType = data.post_hint;
    let media, image;

    switch (mediaType) {
      case "image":
        media = <img src={data.url} alt="#" />;
        break;
      case "hosted:video":
        let source = data.secure_media?.reddit_video;
        media = (
          <video
            width={source.width}
            height={source.height}
            autoPlay
            muted
            controls
          >
            <source src={source.hls_url} type="video/mp4" />
          </video>
        );
        break;
      case "link":
        media = <a href={data.url}>{data.url}</a>;
        break;
    }

    if (data.subreddit_name_prefixed === sub[index].name_prefix) {
      image = <img src={sub[index].thumbnail.url} alt="" />
    }

    return (
      <li key={data.id} id={data.id}>
        <article>
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

export { SinglePost };
