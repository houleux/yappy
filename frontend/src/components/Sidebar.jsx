import { useChatStore } from "../store/useChatStore.js";
import {useEffect} from "react";
import { Users } from "lucide-react";
import SidebarSkeleton from "./skeletons/SidebarSkeleton.jsx";

const Sidebar = () => {
    const { getUsers, users, selectedUsers, setSelectedUser, isUsersLoadings } = useChatStore();

    const onlineUsers = [];

    useEffect(() => {getUsers()}, [getUsers]);

    if (isUsersLoadings) return <SidebarSkeleton />

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
            </div>
        </aside>
    )

}

export default Sidebar;