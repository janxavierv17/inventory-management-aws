"use client";

import { ReactNode, useEffect } from "react";
import NavBar from "@/app/(components)/NavBar";
import Siderbar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux/store";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const { isDarkMode, isSidebarCollapsed } = useAppSelector((state) => state.global);

	useEffect(() => {
		if (isDarkMode) document.documentElement.classList.add("dark");
		document.documentElement.classList.add("light");
	}, [isDarkMode]);

	return (
		<div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
			<Siderbar />
			<main
				className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
					isSidebarCollapsed ? "md:pl-24" : "md-pl-0"
				}`}
			>
				<NavBar />
				{children}
			</main>
		</div>
	);
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<StoreProvider>
			<DashboardLayout>{children}</DashboardLayout>
		</StoreProvider>
	);
};

export default DashboardWrapper;
