/* eslint-disable */
import React, { Component } from 'react';
import ForrestImg from '../../../assets/img/ForrestandJeetha.jpg';
import BobImg from '../../../assets/img/BobandJoan.jpg';
import MoiraImg from '../../../assets/img/MoiraandDavid.jpg';

class OurTeam extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Our Team</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">About Us</span>
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
                                                    <div className="row">
                                                        <img className="img img-responsive image-center" src={ForrestImg} alt="" /><br />
                                                        <p className="our-team-text">
                                                            Pastor Forrest Candy and Jeetha have a history with Armadale and the church. Forrest went to Armadale High School and joined the church in the early 2000s.
                                                            He taught Science and Maths at Dale Christian School, before going to Bible College and working for the Australian Fellowship of Evangelical students amongst international students at the University of Western Australia.
                                                            At the end of 2016 he became interim pastor of ACC, and was made permanent at the beginning of 2018. Jeetha leads the ACC music team.
                                                         </p>
                                                        <p className="our-team-text">
                                                            Forrest enjoys kayak fishing and camping with the dogs when he gets the chance, and Jeetha loves Asian food and meeting new people.
                                                        </p>
                                                        <br />

                                                        <img className="img img-responsive image-center" src={BobImg} alt="" /><br />
                                                        <p className="our-team-text">
                                                            Bob Prince is our Elder, and together with his wife Joan have been at our church for many years. Now retired, Bob was a flight engineer and Pastor of Wagin Baptist Church.
                                                            Joan was a registered nurse, and now coordinates the science laboratory at Dale Christian School. Bob and Joan live ‘out bush’ in Wungong, and enjoy catching up with their many adult children.
                                                        </p>
                                                        <br />

                                                        <img className="img img-responsive image-center" src={MoiraImg} alt="" /><br />
                                                        <p className="our-team-text">
                                                            Moira Dunstall leads the children’s ministry, and loves hearing the challenging questions that kids ask. Moira enjoys spending time with her two dogs and one grandchild. Her husband David heads up the bread ministry, and is great at fixing stuff!
                                                    </p>
                                                    </div>



                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default OurTeam;
