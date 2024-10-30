import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(true);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="text-white justify-between flex mx-auto px-4 items-center h-24">
			<a href="/">
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
			</a>
			<ul className="hidden md:flex">
				<li className="p-4">
					<a href="#">Home</a>
				</li>
				<li className="p-4">
					<a href="#">Company</a>
				</li>
				<li className="p-4">
					<a href="#">Resources</a>
				</li>
				<li className="p-4">
					<a href="#">About</a>
				</li>
				<li className="p-4">
					<a href="#">Contact</a>
				</li>
			</ul>
			<div
				onClick={handleNav}
				className="fixed top-0 bg-[#000300] rounded-full w-[30px] h-[30px] text-center justify-center items-center active:opacity-40 drop-shadow-md right-0 m-5 mt-10 flex md:hidden cursor-pointer hover:opacity-60 ease-in-out duration-300"
			>
				{!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
			</div>
			<div
				className={
					!nav
						? "fixed z-10 left-0 top-0 w-[60%] ease-in-out duration-300 h-full border-r  border-r-gray-900 bg-[#000900f9]"
						: "fixed left-[-100%]"
				}
			>
				<a href="/">
					<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
						REACT.
					</h1>
				</a>
				<ul className="pt-4 uppercase">
					<li className="p-4 border-b hover:opacity-60 cursor-pointer duration-300 ease-in-out border-gray-600">
						<a href="#">Home</a>
					</li>
					<li className="p-4 border-b hover:opacity-60 cursor-pointer duration-300 ease-in-out border-gray-600">
						<a href="#">Company</a>
					</li>
					<li className="p-4 border-b hover:opacity-60 cursor-pointer duration-300 ease-in-out border-gray-600">
						<a href="#">Resources</a>
					</li>
					<li className="p-4 border-b hover:opacity-60 cursor-pointer duration-300 ease-in-out border-gray-600">
						<a href="#">About</a>
					</li>
					<li className="p-4 border-b hover:opacity-60 cursor-pointer duration-300 ease-in-out border-gray-600">
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
