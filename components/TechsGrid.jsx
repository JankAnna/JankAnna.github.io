import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

// REACT-TAB TEST! https://codesandbox.io/s/r4m5jp6jjq?file=/src/styles.css:0-925
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Image from "next/image";
//Contexto

//Ícones
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { Virtualbox } from "@styled-icons/simple-icons/Virtualbox";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Docker } from "@styled-icons/boxicons-logos/Docker";
import { Wordpress } from "@styled-icons/boxicons-logos/Wordpress";
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux";
import { Nginx } from "@styled-icons/simple-icons/Nginx";
import { Autodesk } from "@styled-icons/simple-icons/Autodesk";
import { Proxmox } from "@styled-icons/simple-icons/Proxmox";
import { Pfsense } from "@styled-icons/simple-icons/Pfsense";
import { Wireshark } from "@styled-icons/simple-icons/Wireshark";
import { Reactjs } from "@styled-icons/remix-fill/Reactjs";
import { Asana } from "@styled-icons/simple-icons/Asana";
import { Atlassian } from "@styled-icons/simple-icons/Atlassian";
import { Ansys } from "@styled-icons/simple-icons/Ansys";
import { Microsoftoffice } from "@styled-icons/simple-icons/Microsoftoffice";
import { Apacheopenoffice } from "@styled-icons/simple-icons/Apacheopenoffice";
import { Sap } from "@styled-icons/simple-icons/Sap";
import { Powershell } from "@styled-icons/simple-icons/Powershell";
import { Tryhackme } from "@styled-icons/simple-icons/Tryhackme";
import { Hackthebox } from "@styled-icons/simple-icons/Hackthebox";
import { Splunk } from "@styled-icons/simple-icons/Splunk";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";
import { Pycharm } from "@styled-icons/simple-icons/Pycharm";
import { Junipernetworks } from "@styled-icons/simple-icons/Junipernetworks";
import { Hackerone } from "@styled-icons/simple-icons/Hackerone";
import { Owasp } from "@styled-icons/simple-icons/Owasp";
import { Gimp } from "@styled-icons/simple-icons/Gimp";
import { Springsecurity } from "@styled-icons/simple-icons/Springsecurity";
import { LaptopCode } from "@styled-icons/fa-solid/LaptopCode";
import { Engineering } from "@styled-icons/material/Engineering";
import { Progress } from "@styled-icons/simple-icons/Progress";
import { HomeHeart } from "@styled-icons/boxicons-solid/HomeHeart";
import { Certificate } from "@styled-icons/fluentui-system-filled/Certificate";
import { GanttChart } from "@styled-icons/fluentui-system-filled/GanttChart";
import { Markdown } from "@styled-icons/boxicons-logos/Markdown";
import { Ansible } from "@styled-icons/simple-icons/Ansible";
import { Centos } from "@styled-icons/fa-brands/Centos";

const TechGridTabs = styled.footer`
	// background-color: ${(props) => props.theme.colors.backgroundSecondary};
	color: ${(props) => props.theme.colors.backgroundSVG};
	box-sizing: border-box;
	font-size: 16px;
	font-color: ${(props) => props.theme.colors.branding};
	width: 100%;
	margin-top: 20px;

	svg {
		width: 54px;
		height: 54px;
		transition: all 0.3s ease;
	}

	.react-tabs {
		display: flex;
		width: 100%;
	}

	.react-tabs__tab-list {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		color: ${(props) => props.theme.colors.branding};
	}

	.react-tabs__tab {
		height: 64px;
		width: 72px;
		list-style: none;
		cursor: pointer;
		color: ${(props) => props.theme.colors.backgroundSVG};
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		// border-top-left-radius: 8px;
		// border-bottom-left-radius: 8px;
		border-radius: 8px;
		padding-top: 5px;
		padding-left: 9px;
		margin-top: 2px;
		margin-right: 5px;
	}

	.react-tabs__tab:hover {
		background-color: ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.backgroundPage};
	}

	.react-tabs__tab--selected {
		background-color: ${(props) => props.theme.colors.backgroundPage};
		border-left-color: ${(props) => props.theme.colors.branding};
		border-left: 4px;
		border-left: solid;
		border-right-color: ${(props) => props.theme.colors.branding};
		border-right: 4px;
		border-right: solid;
		color: ${(props) => props.theme.colors.branding};
		padding-left: 5px;
	}

	.react-tabs__tab-panel {
		display: none;
		width: 100%;
		// border-top-right-radius: 8px;
		// border-bottom-right-radius: 8px;
		border-radius: 8px;
		border-color: ${(props) => props.theme.colors.branding};
		border-right: 4px solid;
		border-left: 4px solid;
		margin-left: 5px;
	}

	.react-tabs__tab-panel--selected {
		display: inline-block;
	}

	.panel-content {
		text-align: center;
	}
`;

const TechGrid = styled.footer`
	padding-top: 5px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
	padding-bottom: 5px;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 54px;
	height: 54px;
	//background-color: ${(oprps) => props.theme.colors.backgroundSecondary};
	padding: 10px;
	border-radius: 4px;

	svg {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}

	.logodark {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		background-color: ${(props) => props.theme.colors.backgroundLOGOdark};
		transition: all 0.3s ease;
		border-radius: 25%;
	}

	.logodark:hover {
		background-color: ${(props) => props.theme.colors.branding};
		border-radius: 25%;
	}

	.logolight {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.backgroundSVG};
		background-color: ${(props) => props.theme.colors.backgroundLOGOlight};
		transition: all 0.3s ease;
		border-radius: 25%;
	}

	.logolight:hover {
		background-color: ${(props) => props.theme.colors.branding};
		border-radius: 25%;
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;
export default function TechsGridGrouping(props) {
	return (
		<TechGridTabs>
			<Tabs>
				<TabList>
					<Tab>
						<Springsecurity />
					</Tab>
					<Tab>
						<Engineering />
					</Tab>
					<Tab>
						<GanttChart />
					</Tab>
					<Tab>
						<Certificate />
					</Tab>
					<Tab>
						<HomeHeart />
					</Tab>
				</TabList>

				<TabPanel>
					<div className="panel-content">
						<p>#Cybersecurity</p>
						{/* <p>#CTF #LearningPath </p>*/}
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Hackthebox />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<a href="https://tryhackme.com/p/AnJa" target="_blank">
										<Tryhackme />
									</a>
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<a href="https://hackerone.com/anjank?type=user" target="_blank">
										<Hackerone />
									</a>
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<object type="image/svg+xml" data="logo/logoINE.svg" class="logolight">
										logo INE (eJPT)
									</object>
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<object type="image/svg+xml" data="logo/logoWebSecurityAcademy.svg" class="logodark">
										logo WebSecurityAcademy (Burp)
									</object>
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<object type="image/svg+xml" data="logo/logoPortSwigger.svg" class="logodark">
										logo PortSwigger (Burp)
									</object>
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Junipernetworks />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Linux />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Kalilinux />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Centos />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Windows />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Android />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Ios />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Powershell />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<VisualStudio />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Html5 />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Javascript />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Nodejs />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Reactjs />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Pycharm />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Python />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Proxmox />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Virtualbox />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Nginx />
								</Tech>
							</ScrollAnimation>{" "}
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Docker />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Amazonaws />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Ansible />
								</Tech>
							</ScrollAnimation>
						</TechGrid>

						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<a href="https://github.com/JankAnna" target="_blank">
										<Git />
									</a>
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Wireshark />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Pfsense />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Splunk />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Mysql />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Mongodb />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Wordpress />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Owasp />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Markdown />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
					</div>
				</TabPanel>
				<TabPanel>
					<div className="panel-content">
						<p>#Chemical and Process Engineering</p>
						<p>#Plastic Technology and Processing</p>
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Image src="logo/logoSOLIDWORKS.jpg" class="logodark" />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Autodesk />
								</Tech>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Ansys />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
					</div>
				</TabPanel>
				<TabPanel>
					<div className="panel-content">
						<p>#Management</p>
						<TechGrid>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Gimp />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Asana />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Adobephotoshop />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Atlassian />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Sap />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Image src="logo/logoEXACT.png" class="logodark" />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Image src="logo/logoComarchERPXL.png" class="logodark" />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Microsoftoffice />
								</Tech>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn" animateOnce>
								<Tech>
									<Apacheopenoffice />
								</Tech>
							</ScrollAnimation>
						</TechGrid>
					</div>
				</TabPanel>
				<TabPanel>
					<div className="panel-content">
						<p>#Certificate</p>
					</div>
				</TabPanel>
				<TabPanel>
					<div className="panel-content">
						<p>#LifeHacks</p>
					</div>
				</TabPanel>
			</Tabs>
		</TechGridTabs>
	);
}
