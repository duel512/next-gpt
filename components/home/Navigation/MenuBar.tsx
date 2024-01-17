import { HiPlus } from "react-icons/hi";
import Button from "@/components/common/Button";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "@/components/AppContext";

const MenuBar = () => {
  const { setState } = useAppContext();

  return (
    <div className="flex space-x-3">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        New Chat
      </Button>

      <Button
        icon={LuPanelLeft}
        onClick={() => {
          setState((v) => {
            return { ...v, displayNavigation: false };
          });
        }}
        variant="outline"
      />
    </div>
  );
};

export default MenuBar;
