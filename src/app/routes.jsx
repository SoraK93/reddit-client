import { Posts } from "../features/posts/Posts";
import App from "./App";

export default [
  { path: "/", element: <App /> },
  { path: "/r/:subreddit", element: <App />}
];
