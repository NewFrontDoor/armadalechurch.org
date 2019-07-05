/* eslint-disable */
import React, { Component } from 'react';
import VisionImg from '../../../assets/img/OurVision.jpg';

class OurVision extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Our Vision</h1>
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

                                                    <p className="ministry-text">
                                                        We are currently in the process of expressing our vision in a fresh way, however the big picture of what church is hasn’t changed over the last 2000 years.
                                                    </p>

                                                    <p className="ministry-text">
                                                        In a word, we are disciples making disciples. Because we are convinced that Jesus is God’s ruling king, we are looking to grow, each one of us, in our knowledge and love of him - and express that authentically in our church and wider community. For some of us, this means getting to know Jesus for the first time. For others, this may mean continuing a process of growth in Jesus that started 50 years ago or more! The important thing is every member of the church community growing, because God wants us to know him, love each other, and reach out with the message of Jesus so others can enjoy life with God.
                                                    </p>

                                                    <p className="subtext padding-top-20">
                                                        Then Jesus came to them and said, "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age." (Matthew 28:18-20)
                                                    </p>
                                                    <br />
                                                    <img src={VisionImg} alt="" className="img img-responsive" />
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

export default OurVision;
