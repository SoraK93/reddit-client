export const fetchAPI = {
  allPostLink: {
    data: "/data/allposts.json",
    url: "https://www.reddit.com/r/all.json?sr_detail=1.json",
  },
  post_comment: "/data/post_comment.json",
  // https://www.reddit.com/r/FFXVI/comments/1pj09nu/can_we_talk_about_this_squareenix/{comments/.json}
  user: "/data/user.json",
  // https://www.reddit.com/user/userName{.json}
  subreddit: "/data/subreddit.json",
  // https://www.reddit.com/r/subreddit{.json}
};