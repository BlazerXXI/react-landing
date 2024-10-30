import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	const footerAnalytics = "#";
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div>
				<a href="/">
					<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
				</a>
				<p className="py-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit
				</p>
				<div className="flex md:w-[75%] justify-between my-6">
					<a href="#">
						<FaFacebookSquare
							className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out cursor-pointer"
							size={30}
						/>
					</a>
					<a href="#">
						<FaInstagram
							className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out cursor-pointer"
							size={30}
						/>
					</a>
					<a href="#">
						<FaTwitterSquare
							className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out cursor-pointer"
							size={30}
						/>
					</a>
					<a href="#">
						<FaGithubSquare
							className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out cursor-pointer"
							size={30}
						/>
					</a>
					<a href="#">
						<FaDribbbleSquare
							className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out cursor-pointer"
							size={30}
						/>
					</a>
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-medium mb-2 text-gray-400">Solutions</h6>
					<ul>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Analytics
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Marketing
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Commerce
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Insights
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium mb-2 text-gray-400">Support</h6>
					<ul>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Pricing
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Documentation
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Guides
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								API Status
							</a>{" "}
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium mb-2 text-gray-400">Company</h6>
					<ul>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								About
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Blog
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Jobs
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Press
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Careers
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium mb-2 text-gray-400">Legal</h6>
					<ul>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Claim
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Policy
							</a>
						</li>
						<li className=" py2 text-sm">
							<a
								href={footerAnalytics}
								className="hover:opacity-60 active:opacity-40 duration-300 ease-in-out"
							>
								{" "}
								Teres
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
