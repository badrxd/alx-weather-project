import React from "react";
import { useDispatch } from "react-redux";
import { change } from "@/redux/features/settings";
function NavBar() {
  const dispatch = useDispatch();

  const ChangeSection = (i) => {
    dispatch(change({ i: i, type: "page" }));
  };

  return (
    <div>
      <div>image</div>
      <ul>
        <li>
          <button
            onClick={() => {
              ChangeSection(0);
            }}
          >
            Weather
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              ChangeSection(1);
            }}
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
