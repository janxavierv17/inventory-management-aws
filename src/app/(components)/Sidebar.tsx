"use client";

import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setIsSidebarCollapsed } from "../redux/state";

const Siderbar = () => {
	const year = new Date();
	const dispatch = useAppDispatch();
	const { isSidebarCollapsed } = useAppSelector((state) => state.global);
	const toggleSideBar = () => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));

	return (
		<div
			className={`fixed flex flex-col ${
				isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
			} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`}
		>
			<div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
				<div>Logo</div>
				<h1 className="font-extrabold text-2xl">JXStock</h1>

				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSideBar}
				>
					<Menu className="w-4 h-4" />
				</button>
			</div>

			{/* LINKS */}
			<div className="flex-grow mt-8"></div>
			{/* FOOTER */}
			<div>
				<p className="text-center text-xs text-gray-500">&copy; {year.getFullYear()} JXStock</p>
			</div>
		</div>
	);
};
export default Siderbar;
