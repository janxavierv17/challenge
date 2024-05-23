import { Goals } from "../utils/actions/Goals.action";
// import { displayTiles } from "@/utils/helper";
import Link from "next/link";

export default async function Home() {
	const goals = await Goals();
	const length = goals.length;

	interface IGoal {
		code: string;
		title: string;
	}

	const backgroundColors = [
		"bg-red-400",
		"bg-blue-400",
		"bg-green-400",
		"bg-yellow-400",
		"bg-indigo-400",
		"bg-gray-400",
	];

	const generateRandomBGColors = () => {
		const randomIndex = Math.floor(Math.random() * backgroundColors.length);
		return backgroundColors[randomIndex];
	};

	const displayTiles = () =>
		goals.map(({ code, title }: IGoal) => (
			<li key={code} className={`p-4 ${generateRandomBGColors()}`}>
				<Link href={`/${code}`} className="block h-full">
					<div className="flex items-center justify-center h-full text-white">
						<p className="text-2xl">{code}</p>
						<p className="text-center">{title}</p>
					</div>
				</Link>
			</li>
		));

	return (
		<div>
			<header className="text-center bg-[#548ed6] p-2">
				<h1 className="text-white font-medium">THE GOALS</h1>
			</header>
			<main>
				<section className="relative">
					<div className="absolute p-4">
						<p className="text-white font-extralight text-4xl w-full sm:w-80 mt-12">
							{length} GOALS TO TRANSFORM OUR WORLD
						</p>
						<ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">{displayTiles()}</ul>
					</div>
					<img
						src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80"
						alt="A group of happy kids"
						className="w-full h-screen object-cover"
					/>
				</section>
			</main>
		</div>
	);
}
