import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import ReactDOMServer from "react-dom/server";

jest.mock("../utils/actions/Goals.action", () => ({
	Goals: jest.fn(() =>
		Promise.resolve([
			{
				code: "1",
				title: "End poverty in all its forms everywhere",
				description:
					"Goal 1 calls for an end to poverty in all its manifestations, including extreme poverty, over the next 15 years. All people everywhere, including the poorest and most vulnerable, should enjoy a basic standard of living and social protection benefits.",
				uri: "/v1/sdg/Goal/1",
			},
		])
	),
}));

describe("Home", () => {
	it("renders a heading", async () => {
		const ssr = await Home();
		const container = document.createElement("div");
		document.body.appendChild(container);
		container.innerHTML = ReactDOMServer.renderToString(ssr);

		render(ssr, { hydrate: true, container });
	});
});
