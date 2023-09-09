import React from "react";

//Pages
import AboutMePage from "../pages/aboutme";
import PortfolioPage from "../pages/portfolio";
import ExperiencePage from "../pages/experience";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";

export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<AboutMePage />
			<PortfolioPage />
			<ExperiencePage />
			<FooterPage />
		</>
	);
}
