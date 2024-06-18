import { BookOpenText, FolderCog, ScrollText, UserRound } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar"
import StartingPage from "./StartingPage"
import QuesTions from "./Ques";



function AppCompo() {

    return (
        <>
            <div className="flex">
                <div className="flex">
                    <Sidebar>
                        <SidebarItem icon={<FolderCog size={20} />} text="" />
                        {/* <SidebarItem icon={<BookOpenText size={20} />} text="Choice base Question & Test" />
                        <SidebarItem icon={<ScrollText size={20} />} text="Result" />
                        <hr className="my-3" />
                        <SidebarItem icon={<UserRound size={20} />} text="Account" /> */}
                    </Sidebar>
                </div>

                <QuesTions />

            </div>
        </>
    )
}

export default AppCompo
