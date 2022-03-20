import { FC } from "react";
import Up from "@assets/elements/up.svg";
import Down from "@assets/elements/down.svg";
import Left from "@assets/elements/left.svg";
import Right from "@assets/elements/right.svg";
import Link from "next/link";
import Tilt from "react-tilt";
import { m } from "framer-motion";
import { Status } from "@components/Status";

export const Hero: FC = () => {
	return (
		<section className="bg-white dark:bg-gray-900 pt-12 lg:pt-20 pb-12 md:pb-24">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap -mx-4 flex-col-reverse md:flex-row">
					<div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
						<div className="w-full text-center lg:text-left">
							<div className="max-w-md mx-auto lg:mx-0">
								<h1 className="my-3 md:mt-0 text-4xl lg:text-5xl text-black dark:text-white font-bold">
									Loïk Mallat
								</h1>
							</div>
							<div className="max-w-sm mx-auto lg:mx-0">
								<p className="mb-6 text-gray-700 dark:text-gray-300 leading-loose">
									Full-stack developer with{" "}
									<span className="text-purple-600 dark:text-purple-300">
										over {new Date().getFullYear() - 2019}{" "}
										years
									</span>{" "}
									experience. More interested in{" "}
									<Link href="https://www.typescriptlang.org/">
										<span className="text-blue-600 dark:text-blue-400 cursor-pointer">
											TypeScript
										</span>
									</Link>
									,{" "}
									<Link href="https://www.java.com/">
										<span className="text-darkOrange dark:text-darkOrange cursor-pointer">
											Java
										</span>
									</Link>
									{" "}and{" "}
									<Link href="https://microsoft.com/">
										<span className="text-blue-600 dark:text-blue-300 cursor-pointer">
											C#
										</span>
									</Link>
									.
									<Status />
								</p>
								<div>
									<Link href="/discord">
										<m.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="cursor-pointer inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose text-gray-900 bg-green-400 hover:bg-white text-gray-500 font-semibold rounded-l-xl rounded-t-xl transition duration-200"
										>
											Discord
										</m.span>
									</Link>
									<Link href="#contact">
										<m.span
											whileHover={{
												scale: 1.05,
											}}
											whileTap={{
												scale: 0.95,
											}}
											className="cursor-pointer inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
										>
											Contact
										</m.span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
						<div
							className="relative"
							style={{
								zIndex: 0,
							}}
						>
							<Tilt
								className="Tilt"
								options={{
									max: 10,
									reverse: false,
									scale: 1.05,
								}}
							>
								<img
									loading="lazy"
									className="md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
									src="https://cdn.discordapp.com/emojis/905248476777033758.png?size=44"
									alt="Avatar"
									draggable={false}
									width="auto"
									height="auto"
								/>
							</Tilt>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									top: "-2rem",
									right: "3rem",
									zIndex: -1,
								}}
								src={Up}
								alt="Element Up"
								draggable={false}
								width="auto"
								height="auto"
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									bottom: "-2rem",
									right: "-2rem",
									zIndex: -1,
								}}
								src={Down}
								alt="Element Down"
								draggable={false}
								width="auto"
								height="auto"
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									top: "3rem",
									right: "-3rem",
									zIndex: -1,
								}}
								src={Right}
								alt="Element Right"
								draggable={false}
								width="auto"
								height="auto"
							/>
							<img
								loading="lazy"
								className="hidden md:block absolute"
								style={{
									bottom: "2.5rem",
									left: "-4.5rem",
									zIndex: -1,
								}}
								src={Left}
								alt="Element Left"
								draggable={false}
								width="auto"
								height="auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
