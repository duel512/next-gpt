import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";

type Props = {
  item: Chat;
  selected: boolean;
  onSelected: (chat: Chat) => void;
};

export default function ChatItem({ item, selected, onSelected }: Props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setEditing(false);
    setDeleting(false);
  }, [selected]);

  return (
    <li
      onClick={() => {
        onSelected(item);
      }}
      key={item.id}
      className={`relative group flex items-center p-3 space-x-3 cursor-pointer hover:bg-gray-800${
        selected ? "bg-gray-800 pr-[3.5em]" : ""
      }`}
    >
      <div>{deleting ? <PiTrashBold /> : <PiChatBold />}</div>
      {editing ? (
        <input
          autoFocus={true}
          className="flex-1 min-w-0 bg-transparent outline-none"
          defaultValue={item.title}
        />
      ) : (
        <div className="relative flex-1 whitespace-nowrap overflow-hidden">
          {item.title}
          <span
            className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-l ${
              selected ? "from-gray-800" : ""
            }`}
          ></span>
        </div>
      )}
      {selected && (
        <div className="absolute right-1 flex">
          {editing || deleting ? (
            <>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  if (editing) {
                    setEditing(false);
                    console.log("Edited");
                  } else {
                    setDeleting(false);
                    console.log("Deleted");
                  }

                  e.stopPropagation();
                }}
              >
                <MdCheck />
              </button>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  if (editing) {
                    setEditing(false);
                  } else {
                    setDeleting(false);
                  }

                  e.stopPropagation();
                }}
              >
                <MdClose />
              </button>
            </>
          ) : (
            <>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  setEditing(true);
                  e.stopPropagation();
                }}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="p-1 hover:text-white"
                onClick={(e) => {
                  setDeleting(true);
                  e.stopPropagation();
                }}
              >
                <MdDeleteOutline />
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
}
