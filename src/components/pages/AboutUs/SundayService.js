/* eslint-disable */
import React, { Component } from 'react';
import churchImg from '../../../assets/img/church.jpg';


class SundayService extends Component {

    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Sunday Service</h1>
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

                                    <div className="content">
                                        <div className="node node-page clearfix">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <img src={churchImg} alt="" className="img img-responsive padding-bottom-20 align-center" /> <br />

                                                        <h4 className="text-center">Join us on Sundays at 9:30am - 11:00am for our weekly service.</h4>

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

export default SundayService;
