/* eslint-disable */
import React, { Component } from "react";
import AdvertImg from "../../assets/img/ACCC Pastor Advert.png";
class Sermons extends Component {
	constructor() {
		super();
		this.state = {
			sermons: null,
			recentSeries: null,
			latestSermon: null
		};
	}

	render() {
		return (
			<section>
				<div
					id="top-content-region"
					className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1"
				>
					<div className="container">
						<div className="row">
							<div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
								<div id="page-title-block" className="page-title block">
									<h1>Sermons</h1>
								</div>
							</div>

							<div
								id="top-content-right-region"
								className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
							>
								<div id="page-breadcrumbs-block" className="page-breadcrumbs block">
									<div className="breadcrumbs">
										<a href="/">Home</a>
										<span className="delimiter">›</span>
										<span title="" className="nolink">
											Sermons
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="content-region">
					<div className="container">
						<div className="row">
							<div id="main-content-region" className="main-content col-xs-12">
								<div className="region region-content">
									<div id="block-system-main" className="block block-system">
										<div className="content">
											<div id="node-34" className="node node-page clearfix">
												<div className="content">
													<div className="field field-name-body field-type-text-with-summary field-label-hidden">
														<div className="field-items">
															<div className="field-item even">
																<p className="minstry-text">
																	<img
																		className="img img-responsive"
																		src={AdvertImg}
																		alt="Advertisement for Lead Pastor Position, contact accpastoralteam@gmail.com for more information."
																	/>
																</p>
															</div>
														</div>
													</div>{" "}
												</div>
											</div>
										</div>
									</div>{" "}
								</div>
							</div>
						</div>{" "}
						{/* /row */}
					</div>{" "}
					{/* /container */}
				</div>
			</section>
		);
	}
}

export default Sermons;
