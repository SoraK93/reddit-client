import { useState } from "react";
import { createCommentList } from "../../utility";

const renderComment = (commentList, isRoot) => {
  if (!commentList) return null;

  const list = [];

  for (let comment of commentList) {
    const [isVisible, setVisibility] = useState(isRoot);
    const style = { display: isVisible ? "block" : "none" };

    let reply = null;

    if (comment.replies !== null) {
      reply = renderComment(comment.replies, !isRoot);
    }

    const handleOnClick = (e) => {
      e.stopPropagation();
      setVisibility(!isVisible);
    }

    let replyComponent = (
      <li key={comment.id} onClick={handleOnClick}>
        <p>
          <strong>{comment.author}</strong>
        </p>
        <p>{comment.comment}</p>
        <div style={isRoot ? {display: "block"} : style}>{reply}</div>
      </li>
    );

    list.push(replyComponent);
  }

  return <ul>{list}</ul>;
};

const Comments = ({ comments }) => {
  const commentList = createCommentList(comments);

  const commentComponent = renderComment(commentList, true);

  return <>{commentComponent}</>;
};

export { Comments };
