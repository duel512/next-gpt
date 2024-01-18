import { HiPlus } from "react-icons/hi";
import Button from "@/components/common/Button";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";

const MenuBar = () => {
  const { dispatch } = useAppContext();

  return (
    <div className="flex space-x-3">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        New Chat
      </Button>

      <Button
        icon={LuPanelLeft}
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE,
            field: "displayNavigation",
            value: false,
          });
        }}
        variant="outline"
      />
    </div>
  );
};

export default MenuBar;
