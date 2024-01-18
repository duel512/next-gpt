"use client";

import { useAppContext } from "@/components/AppContext";
import MenuBar from "./MenuBar";
import ToolBar from "./Toolbar";

const Navigation = () => {
  const {
    state: { displayNavigation },
  } = useAppContext();

  return (
    <nav
      className={`${
        displayNavigation ? "" : "hidden"
      } relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}
    >
      <MenuBar />
      <ToolBar />
    </nav>
  );
};

export default Navigation;
