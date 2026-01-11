import { useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <header>
        <div className={style.logo}>
          <Link to="/">
            <img src="src\assets\logo.png" alt="Reddit Logo" />
          </Link>
        </div>
        <div className={style.search}>
          <input
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className={style.userProfile}>
          <img src="src\assets\user-profile.png" alt="User profile image" />
          <p>User Name</p>
        </div>
      </header>
    </>
  );
};

export { Header };
