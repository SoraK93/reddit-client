const getPostAttachment = (data, mediaType) => {
  switch (mediaType) {
    case "image":
      return <img src={data.url} alt="#" />;
    case "hosted:video":
      let source = data.secure_media?.reddit_video;
      return (
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
    case "link":
      return <a href={data.url}>{data.url}</a>;
  }
};

const getSubredditThumbnail = (data, subreddit) => {
  if (data.subreddit_name_prefixed === subreddit.name_prefix) {
    return <img src={subreddit.thumbnail.url} alt="" />;
  }
};

const createCommentList = (comments) => {
  const list = [];

  for (let comment of comments) {
    const data = comment.data;

    const currentComment = {
      id: data.id,
      author: data.author,
      comment: data.body,
      replies: null,
    };

    if (data.replies === "") {
      list.push(currentComment);
      continue;
    } else {
      const repliesList = data.replies.data.children.filter(
        (reply) => reply.kind !== "more"
      );
      currentComment.replies = createCommentList(repliesList);
      list.push(currentComment);
    }
  }

  return list.length > 0 ? list : null;
};

export { getPostAttachment, getSubredditThumbnail, createCommentList };
