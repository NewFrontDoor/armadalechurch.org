/* eslint-disable */
import React, { Component } from "react";
import logo from "../assets/img/Logo.svg";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ""
		};
	}

	handleChange(e) {
		let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

		var change = {};
		change[e.target.name] = value;
		this.setState(change);
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		window.location.href = `/search/${this.state.searchQuery}`;
	}
	render() {
		return (
			<header className="header-1 region-0 block-0">
				<div className="nav-container">
					<div className="row">
						<div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
							<a href="/">
								<img src={logo} alt="Home" className="logo" />
							</a>
						</div>{" "}
						{/* /logo-region */}
						<div id="menu-region" className="col-xs-12 col-md-9">
							<div className="region region-header">
								<div className="block block-menu hidden-md hidden-lg">
									<div className="content">
										<nav className="navbar nestor-main-menu" role="navigation">
											{/* Menu button for mobile display */}
											<div className="navbar-header">
												<button
													type="button"
													className="navbar-toggle text-center"
													data-toggle="collapse"
													data-target=".nav-collapse"
												>
													MENU
												</button>
											</div>
										</nav>
									</div>
								</div>
								<div className="block block-tb-megamenu">
									<div className="content">
										<div className="tb-megamenu tb-megamenu-main-menu">
											<div className="nav-collapse  always-show">
												<ul className="tb-megamenu-nav nav level-0 items-5">
													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">
															About Us <span className="caret"></span>
														</a>
														<div
															style={{ width: "750px" }}
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div className="tb-megamenu-block tb-block tb-megamenu-block">
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Welcome to Armadale Congregational Church...</h3>{" "}
																						</div>
																					</div>{" "}
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="javascript:void(0);"></a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WhoWeAre">Who We Are</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WhatWeBelieve">What We Believe</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/SundayService">Sunday Service</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="javascript:void(0);"></a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Vision">Our Vision</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Team">Our Team</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/OurHistory" target="_blank">
																						Our History
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>

													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">
															Ministries <span className="caret"></span>
														</a>
														<div
															style={{ width: "750px" }}
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div className="tb-megamenu-block tb-block tb-megamenu-block">
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Armadale Congregational Ministries...</h3>{" "}
																						</div>
																					</div>{" "}
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="javascript:void(0);"></a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/PastoralCare">Pastoral Care</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/SundayService">Sunday Service</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/ChildrensChurch">Children's Church</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/PraiseTeam">Praise Team</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Missions">Missions</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="javascript:void(0);"></a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/GrowthGroups">Growth Groups</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/PrayerMeetings">Prayer Meetings</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/MensBreakfast">Men's Breakfast</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WomensMinistry">Women's Ministry</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="javascript:void(0);"></a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/BoysBrigades">Boys' Brigades</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Helps">Helps</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Bread">Bread Ministry</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a
																						href="https://dalecs.wa.edu.au/about/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
																						Dale Christian School
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>

													<li className="tb-megamenu-item level-1 mega">
														<a
															href="https://www.youtube.com/channel/UCGJStzEWZVyvZaX0zK4PA9Q"
															rel="noreferrer noopener"
															target="_blank"
														>
															Online Church
														</a>
													</li>

													<li className="tb-megamenu-item level-1 mega">
														<a href="/Events">Events</a>
													</li>
													<li className="tb-megamenu-item level-1 mega">
														<a href="/Employment">Employment</a>
													</li>
													<li className="tb-megamenu-item level-1 mega">
														<a href="/ContactUs" title="Contact Us">
															Contact Us
														</a>
													</li>

													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0);" className="dropdown-toggle" title="Search">
															<i className="ionicons ion-android-search"></i> Search <span className="caret"></span>
														</a>
														<div
															style={{ width: "750px" }}
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div className="tb-megamenu-block tb-block tb-megamenu-block">
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Search our website...</h3>{" "}
																						</div>
																					</div>{" "}
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span7  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<form onSubmit={this.handleSearchSubmit.bind(this)}>
																					<input
																						type="text"
																						name="searchQuery"
																						className="nav-search-bar search-bar"
																						value={this.state.searchQuery || ""}
																						onChange={this.handleChange.bind(this)}
																						placeholder=""
																					/>
																				</form>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>{" "}
							</div>
						</div>{" "}
						{/* /menu-region */}
					</div>{" "}
					{/* /row */}
				</div>{" "}
				{/* /container */}
			</header>
		);
	}
}

export default Navigation;
