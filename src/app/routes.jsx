import { AllPost } from "../features/posts/components/AllPost";
import App from "./App";
import { SinglePost } from "../features/posts/components/single";

export default [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <AllPost /> }],
  },
  {
    path: "r/:subreddit",
    element: <App />,
    children: [
      { index: true, element: <AllPost /> },
      { path: "comments/:id", element: <SinglePost /> },
    ],
  },
];
