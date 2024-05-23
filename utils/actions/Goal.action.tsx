export async function Goal(code: string) {
	const GOAL_ENDPOINT = `https://unstats.un.org/sdgapi/v1/sdg/Goal/${code}/Target/List`;

	const data = await fetch(GOAL_ENDPOINT);
	const goal = data.json();

	return goal;
}
