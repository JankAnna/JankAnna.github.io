import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";
import { Certificate } from "@styled-icons/fluentui-system-filled/Certificate";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const CertificateIcon = styled(Certificate)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>9/2022 - now</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}:{" "}
						<span>
							<a href="https://ine.com/">INE</a>
						</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>cybersecurity</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Penetration Testing Student</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<CertificateIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>12/2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}:{" "}
						<span>
							<a href="https://tryhackme.com/">TryHackMe</a>
						</span>
					</BoldText>
					<BoldText>
						Certification Number: <span>THM-WYINMWTVVG</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>cybersecurity</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Advent of Cyber 2022</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelDescription}: <span>(Basic cyber security knowlegle and experience)</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>4/2022 - now</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>SALAG Sp. z o.o.</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>production office manager</span>
					</BoldText>
					<BoldText>
						<ul>
							<li>
								<span>entering technological data into the ERP system and their supervision</span>
							</li>
							<li>
								<span>preparation and analysis of cost reports</span>
							</li>
							<li>
								<span>preparation of procedural documentation: technological card, technological instruction etc.</span>{" "}
							</li>
							<li>
								<span>planning and organization of production</span>
							</li>
							<li>
								<span>supervision over warehouse operations in the ERP system</span>
							</li>
							<li>
								<span>procurement and logistics of deliveries</span>
							</li>
						</ul>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<CertificateIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>8/2021 - 4/2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>HackerU in cooperation with University of Warsaw</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelExtensionCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Cyber Security (Red Team)</span>
					</BoldText>
					<BoldText>
						Certification Number: <span>THM-WYINMWTVVG</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<CertificateIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>12/2021</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>TryHackMe</span>
					</BoldText>
					<BoldText>
						Certification Number: <span>THM-4GZGSVWPFZ</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>cybersecurity</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Advent of Cyber 2021</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>(Basic cyber security knowlegle and experience)</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2018 - 2019</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Warsaw University of Technology</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelPostgraduateStudies}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Plastic Technology and Processing</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelThesisTopic}: <span>Injection mold design</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>1/2017 - 4/2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>SALAG Sp. z o.o.</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>production specialist</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>5/2016 - 1/2017</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>AQUAEL Sp. z o.o.</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>the supply specialist</span>
					</BoldText>
					<BoldText>
						<ul>
							<li>
								<span>planning and purchasing materials for production</span>
							</li>
							<li>
								<span>coordination of activities and customs handling of deliveries</span>
							</li>
						</ul>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>7/2015</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>AQUAEL Sp. z o.o.</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>trainee</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>7/2015</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>"SUDOWIA" Dairy Cooperative in Suwałki</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>trainee</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>6/2015</h3>
					<BoldText>{language.experiencePage.timeline.labelGermanyTrip}:</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>SternMaid GmbH&Co. (Wittenburg)</span> | <span>Apostels Jogurth Productions GmbH (Garbsen)</span> | <span>GEA Wesfalia (Oelde)</span> |{" "}
						<span>Potts (Oelde)</span> | <span>Biogas Plant Neuried (Offenburg)</span> | <span>Wine Cooperative Oberkirch</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2012 - 2016</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>University od Warmia and Mazury in Olsztyn</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelBachelorOfEngineering}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Chemical and Process Engineering</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelSpecialization}: <span>Food Processing</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelThesisTopic}: <span>The velocity distribution in the static mixer</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			{/*<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<LearningAppIcon />} /> */}
		</VerticalTimeline>
	);
}
