import React from "react";

import { useStore } from "store/store";

const Header = () => {
  const { count, clear } = useStore();
  return (
    <div className="flex bg-blue-700 text-white p-3 justify-between">
      <div>Testing Remote Header</div>
      <div>
        {count}
        <button
          className="text-xs bg-white text-red-600 p-2 mx-2"
          onClick={clear}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
