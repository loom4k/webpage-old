import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "@assets/icon.png";
import Avatar from "@assets/avatar.webp";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="HandheldFriendly" content="true" />
					<meta name="robots" content="INDEX, FOLLOW" />
					<meta name="copyright" content="Loïk Mallat" />
					<meta name="theme-color" content="#ffa33b" />
					<meta
						name="author"
						content="Loïk Mallat, contact@loom4k.m4"
					/>
					<meta
						name="description"
						content="Welcome to loom4k's profile! Here you can take a look at all of his projects and more!"
					/>
					<meta name="og:title" content="View loom4k's website on Internet" />
					<meta
						name="og:site_name"
						content="Loom's website on the IOT"
						title="title"
					/>
					<meta
						name="og:url"
						content="https://loom4k.me/"
					/>
					<meta
						name="keywords"
						content="loïk, loik, mallat, dev, loom4k, loom, loom website"
					/>
					<meta name="og:image" content={Avatar} />
					<meta name="twitter:image" content={Favicon} />
					<link rel="icon" href={Favicon} />
					<link
						rel="canonical"
						href="https://loom4k.me"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="antialiased bg-body text-body font-body">
					<Main />
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
