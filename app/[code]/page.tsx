import { Goal } from "@/utils/actions/Goal.action";

export default async function Page({ params: { code } }: { params: { code: string } }) {
	const goal = await Goal(code);
	const displayGoal = () =>
		goal.map(({ title, description }: { title: string; description: string }) => {
			return (
				<div>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			);
		});
	return <div>{displayGoal()}</div>;
}
