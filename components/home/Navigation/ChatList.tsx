import { useMemo, useState } from "react";
import { Chat } from "@/types/chat";
import { AiOutlineEdit } from "react-icons/ai";
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md";
import { PiChatBold, PiTrashBold } from "react-icons/pi";
import { groupByDate } from "@/components/common/utils";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const [ChatList, setChatList] = useState<Chat[]>([
    {
      id: "1",
      title: "React入门实战教程",
      updateTime: Date.now(),
    },
    {
      id: "2",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "3",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "4",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "5",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "6",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "7",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "8",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "9",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "10",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "11",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "12",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "13",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "14",
      title: "如何使用Next.js创建React项目",
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: "15",
      title: "知行小课",
      updateTime: Date.now() + 2,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat>();
  const groupList = useMemo(() => {
    return groupByDate(ChatList);
  }, [ChatList]);

  return (
    <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
      {groupList.map(([date, list]) => {
        return (
          <div key={date}>
            <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
              {date}
            </div>
            <ul>
              {list.map((item) => {
                const selected = selectedChat?.id === item.id;

                return (
                  <ChatItem
                    key={item.id}
                    item={item}
                    selected={selected}
                    onSelected={(chat) => {
                      setSelectedChat(chat);
                    }}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
