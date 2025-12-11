import { useState } from "react";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <header>
        <div>
          <img src="#" alt="Reddit Logo" />
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div>
          <img src="#" alt="User profile image" />
          <p>##UserName</p>
        </div>
      </header>
    </>
  );
};

export { Header };
