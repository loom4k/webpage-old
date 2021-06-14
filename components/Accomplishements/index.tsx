import { FC, useState, useEffect } from "react";
import ForgeSVG from "@assets/elements/forge.svg";
import LinkSVG from "@assets/elements/link.svg";
import FoxModSVG from "@assets/elements/foxmod.svg"
import Tilt from "react-tilt";
import fetch from "node-fetch";

export const Accomplishements: FC = () => {

	const [stars1, setStars1] = useState(0);
	const [forks1, setForks1] = useState(0);
	const [stars2, setStars2] = useState(0);
	const [forks2, setForks2] = useState(0);
	const [followers, setFollowers] = useState(0);
	const [repo, setRepo] = useState(0);
    
    useEffect(() => {
        const effect = async () => {
            const res = await fetch("https://api.github.com/repos/loom4k/foxmod");
            if (!res.ok) return;
            
            const body = await res.json();
            setStars1(body.stargazers_count);
			setForks1(body.forks_count);

			const res2 = await fetch("https://api.github.com/repos/loom4k/slick-url");
            if (!res2.ok) return;
            
            const body2 = await res2.json();
			setStars2(body2.stargazers_count);
			setForks2(body2.forks_count);

			const res3 = await fetch("https://api.github.com/users/Loom4k");
            if (!res3.ok) return;
            
            const body3 = await res3.json();
			setFollowers(body3.followers);
			setRepo(body3.public_repos)
        }
        effect();
    }, []);
	
	return (
		<section
			id="about"
			className="py-10 min-h-screen bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
						<div className="max-w-md lg:mx-auto">
							<h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading text-black dark:text-white">
								Accomplishements{" "}
								<span className="text-green-500">&amp;</span>{" "}
								projects
							</h2>
							<p className="mb-6 text-gray-500 leading-loose">
								Most of my projects and workspaces are open-source, which
								means anyone can contribute and enhance the project. I think
								open-source is the key to better standarts in Developpement
								and helping other ones is the most important thing on Github.
							</p>
							<ul className="text-gray-500 font-bold">
								<li className="flex mb-4">
									<svg
										className="mr-2 w-6 h-6 text-green-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>{repo}+ open-source repositories</span>
								</li>
								<li className="flex mb-4">
									<svg
										className="mr-2 w-6 h-6 text-green-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>Knowledge in over 7 programmation languages</span>
								</li>
								<li className="flex mb-4">
									<svg
										className="mr-2 w-6 h-6 text-green-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>{followers} Github Follower(s)!</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full lg:w-1/2 flex space-x-4">
							<div className="mt-36 mb-8 lg:mb-0 w-1/2">
							<Tilt
								className="Tilt"
								options={{
									max: 25,
									reverse: false,
									scale: 1.05,
								}}
							>
								<div className="mb-4 md:mb-8 py-6 pl-6 pr-4 shadow-md rounded bg-gray-200 dark:bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded-lg bg-blurple dark:bg-blurple">
										<img
											loading="lazy"
											src={FoxModSVG}
											className="w-10 h-10"
											draggable={false}
											alt="NestJS"
											width="auto"
											height="auto"
										/>
									</span>
									<h3 className="mb-2 text-xl sm:text-2xl font-bold font-heading text-black dark:text-white">
										FoxMod for Discord
									</h3>
									<p className="text-gray-700 dark:text-gray-300 leading-loose"> 
										Number of Stars: {stars1}<br/>
										Amount of Forks: {forks1}
									</p>
								</div>
							</Tilt>
							</div>
							<div className="w-1/2 lg:mt-20 md:px-4">
							<Tilt
								className="Tilt"
								options={{
									max: 25,
									reverse: false,
									scale: 1.05,
								}}
							>
								<div className="mb-4 md:mb-8 py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-200 dark:bg-gray-800">
									<span className="mb-4 inline-block p-3 rounded bg-darkOrange dark:bg-darkOrange">
										<img
											loading="lazy"
											src={ForgeSVG}
											className="w-10 h-10"
											draggable={false}
											alt="NextJS"
											width="auto"
											height="auto"
										/>
									</span>
									<h3 className="mb-2 text-xl sm:text-2xl font-bold font-heading text-black dark:text-white">
										Minecraft Mod Post-Loader
									</h3>
									<p className="text-gray-700 dark:text-gray-300 leading-loose">
										Private - Coming Soon!
									</p>
								</div>
							</Tilt>
							<Tilt
								className="Tilt"
								options={{
									max: 25,
									reverse: false,
									scale: 1.05,
								}}
							>
								<div className="py-6 pl-6 pr-4 shadow-md rounded bg-gray-200 dark:bg-gray-800">
									<span className="mb-6 inline-block p-3 rounded-lg bg-green-500 dark:bg-green-400">
										<img
											loading="lazy"
											src={LinkSVG}
											className="w-10 h-10"
											draggable={false}
											alt="MongoDB"
											width="auto"
											height="auto"
										/>
									</span>
									<h3 className="mb-2 text-xl sm:text-2xl font-bold font-heading text-black dark:text-white">
										SlickURL
									</h3>
									<p className="text-gray-700 dark:text-gray-300 leading-loose">
										Number of Stars: {stars2}<br/>
										Amount of Forks: {forks2}
									</p>
								</div>
							</Tilt>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};