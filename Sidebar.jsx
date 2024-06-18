import { ChevronFirst, ChevronLast, } from "lucide-react"
import { BookOpenText, FolderCog, ScrollText, UserRound } from "lucide-react";

import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <h1 className={`text-2xl overflow-hidden transition-all ${expanded ? "w-48" : "w-0"}`}>
                            Marks Predictor</h1>

                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, active }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <>

            <li className={`relative mt-5 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                <BookOpenText/>
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0 h-10"}`}>Default Question & Test</span>

                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        Default Question & Test
                    </div>
                )}
            </li>

            <li className={`relative mt-5 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                <FolderCog/>
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0 h-10"}`}>Choice base Question & Test</span>

                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        Choice base Question & Test
                    </div>
                )}
            </li>

            <li className={`relative mt-5 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
              <ScrollText/>
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0 h-10"}`}>Result</span>

                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        Result
                    </div>
                )}
            </li>

            <hr className="my-3" />

            <li className={`relative mt-5 flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                <UserRound/>
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 ml-0 h-10"}`}>Profile</span>

                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        Profile
                    </div>
                )}
            </li>

        </>

    )
}