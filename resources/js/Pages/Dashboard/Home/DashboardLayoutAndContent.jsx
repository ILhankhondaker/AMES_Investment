import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IdCard } from "lucide-react";
import logo from "../../../../../public/img/logo.png";
import {
    LayoutDashboard,
    CalendarIcon,
    ArrowLeftRight,
    UsersIcon,
    ChevronLeftIcon,
    SearchIcon,
    Settings,
    Info,
} from "lucide-react";
import DashboadHeader from "../DashboadHeader";
import TradingTable from "../TradingTable";
import Investment from "../Investment/Investment";

export default function DashboardLayoutAndContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Investments", icon: CalendarIcon },
        { name: "Transaction", icon: ArrowLeftRight },
        { name: "Market Insights", icon: UsersIcon },
    ];
    const menuItems2 = [
        { name: "Settings", icon: Settings },
        { name: "Help & Center", icon: Info },
    ];

    // Right Side Content Show
    const renderContent = () => {
        switch (selectedMenuItem) {
            case "Dashboard":
                return (
                    <>
                        <DashboadHeader
                            portfolioValue={565}
                            growth={25.2}
                            riskLevel="Low"
                            status="Not Ready"
                            overallGrowth={2575065}
                        />
                    </>
                );
            case "Investments":
                return (
                    <div>
                        <DashboadHeader />
                        Your Calendar
                        <Investment />
                    </div>
                );
            case "Transaction":
                return (
                    <div className="gradient-bg">
                        <DashboadHeader
                            portfolioValue={565}
                            growth={2535.2}
                            riskLevel="Moderate"
                            status="Running"
                            overallGrowth={2575065}
                        />
                        <TradingTable />
                    </div>
                );
            case "Market Insights":
                return (
                    <div>
                        <DashboadHeader />
                        Market Insightssssss
                    </div>
                );
            case "Settings":
                return (
                    <div>
                        <DashboadHeader />
                        Settings Panel
                    </div>
                );
            case "Help & Center":
                return (
                    <h>
                        <DashboadHeader />
                        Help HElp HElp HElp
                    </h>
                );
            default:
                return (
                    <h2 className="text-2xl text-white font-bold">
                        Select a menu item
                    </h2>
                );
        }
    };

    return (
        <div className="grid min-h-[682px] mt-[60px] border border-gray-800 rounded-t-lg p-5 w-full grid-cols-[auto_1fr] overflow-hidden">
            <div
                className={`flex flex-col bg-transparent   text-white dark:bg-gray-800 transition-all duration-300 ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <img
                            src={logo}
                            alt="AMES Investment Logo"
                            className="h-[42px] w-[42px]"
                        />
                        <span
                            className={`${isSidebarOpen ? "block" : "hidden"}`}
                        >
                            AMES Investment
                        </span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                </div>

                <nav className="flex-1    max-h-[600px]  space-y-2 px-2 py-4    ">
                    <div className="flex  flex-col justify-between h-full">
                        {/* top menu  */}
                        <div>
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    className={`flex w-full space-y-3 text-white items-center cursor-pointer gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#FFFFFF33] dark:hover:bg-gray-700 ${
                                        isSidebarOpen
                                            ? "justify-start text-gray-700 dark:text-gray-300"
                                            : "justify-center text-gray-500 dark:text-gray-400"
                                    } ${
                                        selectedMenuItem === item.name
                                            ? "bg-[#FFFFFF33] dark:bg-gray-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedMenuItem(item.name)
                                    }
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span
                                        className={`${
                                            isSidebarOpen ? "block" : "hidden"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                        {/* dawon menu  */}
                        <div>
                            {menuItems2.map((item) => (
                                <button
                                    key={item.name}
                                    className={`flex w-full text-white items-center cursor-pointer gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#FFFFFF33] dark:hover:bg-gray-700 ${
                                        isSidebarOpen
                                            ? "justify-start text-gray-700 dark:text-gray-300"
                                            : "justify-center text-gray-500 dark:text-gray-400"
                                    } ${
                                        selectedMenuItem === item.name
                                            ? "bg-[#FFFFFF33] dark:bg-gray-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedMenuItem(item.name)
                                    }
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span
                                        className={`${
                                            isSidebarOpen ? "block" : "hidden"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex  flex-col ml-5">
                <header className="flex h-16 items-center justify-between  bg-transparent border border-gray-800 rounded-t-[20px] text-white px-6 dark:border-gray-800 dark:bg-gray-800">
                    <h1 className="text-lg font-semibold"> Hello, User</h1>
                    <div className="flex items-center gap-4">
                        {/* <Button variant="ghost" size="icon">
                            <SearchIcon className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>  */}
                        <button className="text-white flex hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                            <IdCard className="mr-2" />
                            AIS #: ABC2041123
                        </button>
                        {/* <Button variant="ghost" size="icon">
                            <img
                                src="/placeholder.svg"
                                width="32"
                                height="32"
                                className="rounded-full"
                                alt="Avatar"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                            />
                            <span className="sr-only">User menu</span>
                        </Button> */}
                    </div>
                </header>
                <main className="flex-1 border  border-gray-800 overflow-y-auto p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
