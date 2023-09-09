import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { Springsecurity } from "@styled-icons/simple-icons/Springsecurity";
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
import { Engineering } from "@styled-icons/material/Engineering";
import { Progress } from "@styled-icons/simple-icons/Progress";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const CardService = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 3px solid transparent;

	//Espelhar elemento
	//-webkit-box-reflect: below px linear-gradient(transparent, transparent, #0004);

	/* 
	transform-origin: center;
	transform: perspective(800px) rotateY(25deg);
	transition: 0.5s;

	&:hover img {
		opacity: 0.3;
	}
	&:hover {
		transform: perspective(800px) rotateY(0deg);
		opacity: 1;
	} */

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h3 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 20px;

		@media (max-width: 900px) {
			font-size: 18px;
		}
	}

	p {
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		font-weight: 400;
		text-align: center;
		word-wrap: break-word;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		//margin-top: 60px;
		width: 100%;
	}
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

export default function _ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionServices id="section-services">
			<ContainerGrid>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
					<CardService>
						<Springsecurity />
						<h3>{language.servicesOffer.cards.cybersecurity.title}</h3>
						<p>{language.servicesOffer.cards.cybersecurity.contentText}</p>
					</CardService>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
					<CardService>
						<LaptopCode />
						<h3>{language.servicesOffer.cards.programming.title}</h3>
						<p>{language.servicesOffer.cards.programming.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
					<CardService>
						<Engineering />
						<h3>{language.servicesOffer.cards.engineering.title}</h3>
						<p>{language.servicesOffer.cards.engineering.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
					<CardService>
						<Progress />
						<h3>{language.servicesOffer.cards.levelup.title}</h3>
						<p>{language.servicesOffer.cards.levelup.contentText}</p>
					</CardService>
				</ScrollAnimation>
			</ContainerGrid>
		</SectionServices>
	);
}
