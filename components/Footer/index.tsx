import {
	faDiscord,
	faGithub,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

const socials = [
	{
		href: "https://github.com/loom4k",
		icon: faGithub,
	},
	{
		href: "https://discord.gg/9uUSJeK933",
		icon: faDiscord,
	},
];

export const Footer: FC = () => {
	return (
		<div className="bg-white dark:bg-gray-900 pt-2 ">
			<div className="flex pb-5 px-3 m-auto pt-5 text-gray-600 dark:text-gray-300 text-sm flex-col md:flex-row max-w-6xl">
				<div className="mt-2">
					&copy; {new Date().getFullYear()} All rights reserved. Made
					with ❤ by{" "}
					<Link href="https://github.com/loom4k">
						<span className="text-purple-600 cursor-pointer">
							loom4k
						</span>
					</Link>{" "}
					using{" "}
					<Link href="https://nextjs.org/">
						<span className="text-gray-600 cursor-pointer">
							NextJS
						</span>
					</Link>{" "}
					and{" "}
					<Link href="https://tailwindcss.com/">
						<span className="text-green-700 dark:text-green-400 cursor-pointer">
							TailwindCSS
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
