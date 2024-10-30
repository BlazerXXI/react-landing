import React from "react";

const Newsletter = () => {
	return (
		<div className="w-full py-16 text-white px-4">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
				<div className="lg:col-span-2 my-4">
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Want tips & tricks to optimize your flow?
					</h1>
					<p>Sign up to our newsletter and stay up to date</p>
				</div>
				<div className="my-4 ">
					<form className="flex flex-col sm:flex-row items-center justify-between w-full">
						<input
							className="p-3 flex w-full rounded-md text-black"
							type="email"
							autoComplete="email"
							placeholder="Enter Email"
						/>
						<button className="active:bg-opacity-40 hover:bg-opacity-80 duration-300 ease-in-out bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ml-4">
							Notify Me
						</button>
					</form>
				</div>
				<p>We care bout the protection of your data. Read our </p>
				<a
					href="#"
					className="text-[#00df9a] hover:opacity-60 active:opacity-40 duration-300 ease-in-out inline-flex"
				>
					Privacy Policy
				</a>
			</div>
		</div>
	);
};

export default Newsletter;
