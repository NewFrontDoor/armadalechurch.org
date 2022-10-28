/* eslint-disable */
import React, { Component } from "react";
import AdvertImg from "../../assets/img/ACCC Pastor Advert.png";
//import VOTD from './VerseOfTheDay';

class Welcome extends Component {
	render() {
		return (
			<section>
				<div id="content-region">
					<div className="container">
						<div className="row">
							<div id="main-content-region" className="main-content col-xs-12">
								<div className="region region-content">
									<div className="block block-system">
										<div className="content">
											<div className="node node-page clearfix">
												<div className="content">
													<div className="field field-name-body field-type-text-with-summary field-label-hidden">
														<div className="field-items">
															<div className="field-item even">
																<p className="ministry-text">
																	Welcome! I'm glad you've found us. Armadale Congregational Church is a Christian
																	Church in Armadale, Western Australia, who believes in Jesus and the difference that
																	he makes. I hope this website is useful for you - jump on the phone, flick us an
																	email, or message us on Facebook if you have any questions. One of the best ways to
																	check things out is to join us for one of our weekly Sunday morning services at
																	9:30am. If you're a Christian looking for a local church, it would be great if you
																	found a home among us. But whether you're convinced or simply curious about
																	Christianity, we'd love for you to connect with us.
																</p>
																<img
																	className="img img-responsive"
																	src={AdvertImg}
																	alt="Advertisement for Lead Pastor Position, contact accpastoralteam@gmail.com for more information."
																/>
															</div>
															{/*<VOTD />*/}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>{" "}
								</div>
							</div>{" "}
							{/* /main-content-region */}
						</div>{" "}
						{/* /row */}
					</div>{" "}
					{/* /container */}
				</div>{" "}
				{/* /content-region */}
			</section>
		);
	}
}

export default Welcome;
