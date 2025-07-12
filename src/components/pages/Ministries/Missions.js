/* eslint-disable */
import React, { Component } from "react";
import _ from "lodash";
import { getPageFromDrupal } from "../../../utils/fetchJSON";

class Missions extends Component {
	constructor() {
		super();
		this.state = {
			page: null,
			breadcrumbs: `<a href="/">Home</a>
          <span className="delimiter">›</span>
          <span title="" className="nolink">Ministries</span>`
		};
	}

	componentWillMount() {
		var that = this;
		getPageFromDrupal("Missions", function (data) {
			that.setState({ page: data[0] });
		});
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
									<h1>{this.state.page ? <span dangerouslySetInnerHTML={{ __html: this.state.page.title }} /> : ""}</h1>
								</div>
							</div>

							<div
								id="top-content-right-region"
								className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
							>
								<div id="page-breadcrumbs-block" className="page-breadcrumbs block">
									<div className="breadcrumbs">
										{this.state.breadcrumbs ? (
											<section dangerouslySetInnerHTML={{ __html: this.state.breadcrumbs }} />
										) : (
											""
										)}
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
											<div className="node node-page clearfix">
												<div className="content">
													{this.state.page ? (
														<section dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
													) : (
														<h2>
															<i className="fa fa-spinner"></i>
														</h2>
													)}
													


													<p>For the last 125 years we have been contributing to both local and worldwide evangelisation. Each year we tithe our income to Missions, in addition to supporting our own ministries that reach out to the community such as our <a href="https://dalecc.wa.edu.au/about/">College</a> and <a href="https://armadalechurch.org/BoysBrigades">Brigades</a>.</p>

<p>We currently contribute to three missionary families. <a href="https://cms.org.au/missionaries/faircloughjh/">One family in Europe</a>, one in <a href="https://wec.com.au/">Asia</a>, and one in <a href="https://wec.com.au/">Australia</a>. We give regularly to both local and overseas missions such as <a href="https://au.challenge.news/about-us/">Challenge Newspaper</a>, <a href="https://mukti.org.au/">Mukti</a>, <a href="https://www.barnabasaid.org/au/">Barnabas Aid</a>, <a href="https://www.gideons.org.au/">Gideons</a>, <a href="https://vom.com.au/">Voice of the Martyrs</a>, and <a href="https://deafmin.org/about/">Deaf Ministries International</a>. We also support the missions of <a href="https://dalecc.wa.edu.au/about/">Dale Christian College</a> (such as Missions trips and <a href="https://occ.samaritanspurse.org.au/">Operation Christmas Child</a>). We have an active Missions committee, regularly invite mission representatives to speak at our church, and have a special focus on Missions each August.</p>

<p>If you represent a Mission and would like to visit, please contact <a href="mailto:pastor@armadalechurch.org">pastor@armadalechurch.org</a> to see if we are a good fit.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Missions;
