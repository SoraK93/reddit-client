import { Outlet } from "react-router";
import "./Post.module.css";

const Posts = () => {
  return (
    <div>
        <Outlet />
    </div>
  );
};

export { Posts };
