const SinglePost = ({ renderPostData }) => {
  return renderPostData.slice(0, 10).map((post) => {
    const mediaType = post.data.post_hint;
    let media;

    switch (mediaType) {
      case "image":
        media = <img src={post.data.url} alt="#" />;
        break;
      case "hosted:video":
        let source = post.data.secure_media?.reddit_video;
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
      case "links":
        media = <img src="" alt="" />;
    }

    return (
      <li key={post.data.id} id={post.data.id}>
        <article>
          <div>
            <div>
              <p>{post.data.author}</p>
              <p>{`r/${post.data.subreddit}`}</p>
            </div>
            <h2>{post.data.title}</h2>
          </div>
          <div>{media}</div>
        </article>
      </li>
    );
  });
};

export { SinglePost };
