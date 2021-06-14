import { Navbar } from "@components/Navbar";
import { NextPage } from "next";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Contact";
import { Accomplishements } from "@components/Accomplishements"
import { Projects } from "@components/Projects"
// import { Projects } from "@components/Projects";
import axios from "axios";

export interface IIndexPage {
	repos: any;
}

const IndexPage: NextPage<IIndexPage> = ({ repos }) => {
	return (
		<Layout title="Home">
			<Navbar />
			<Hero />
			<About />
			<Accomplishements />
			<Contact />
		</Layout>
	);
};

export default IndexPage;

/* export async function getStaticProps() {
	const res = (
		await axios.get(
			"https://api.github.com/users/barbarbar38/repos?per_page=100",
		)
	).data;
	const repos = res
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 15);
	return {
		props: {
			repos,
		},
		revalidate: 60 * 15,
	};
} */