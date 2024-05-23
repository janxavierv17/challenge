"use server";

export async function Goals() {
	const GOALS_LIST_ENDPOINT = "https://unstats.un.org/sdgapi/v1/sdg/Goal/List";

	const data = await fetch(GOALS_LIST_ENDPOINT);
	const goals = data.json();

	return goals;
}
