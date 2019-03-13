/* eslint-disable */
import React, { Component } from 'react';
import churchImg from '../../../assets/img/SundayService.jpg';


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
                                                        <h3 className="text-center header-custom-color">Join us on Sundays at 9:30am for our weekly service.</h3>

                                                        <img src={churchImg} alt="" className="img img-responsive" /><br />

                                                        <h3 className="text-center header-custom-color">What should I expect?</h3>
                                                        <p>
                                                            Here’s a few common questions people ask about our service –<br /><br />
                                                            <strong>How long is the service?</strong><br />
                                                            Our service is generally from 9:30am – 11:00am, followed by informal fellowship over morning tea.<br /><br />

                                                            <strong>What is your style of service/worship?</strong><br />
                                                            We’re a relaxed and passionate community who strive for authenticity and intelligibility in services. <br />
                                                            It’s OK if children make noise, and you’re welcome to come and go as you need to.<br /><br />

                                                            Our music includes both contemporary songs and classic hymns, but worship is not restricted to music: for example we also say creeds, pray together, and share stories about how God is shaping our lives.
                                                            We especially see the hearing of God’s Word and its explanation as central to our worship.<br /><br />

                                                            If you are new, it won’t be weird for you to just sit and observe what church is about.<br /><br />

                                                            <strong>What about communion?</strong><br />
                                                            We celebrate communion monthly, and you are welcome to join us in celebrating the death and resurrection of the Lord Jesus.
                                                            To be as inclusive as possible, we use non-alcoholic grape juice – but water is also available.<br /><br />

                                                            <strong>What should I wear?</strong><br />
                                                            There’s no “dress code” – wear something comfortable and modest. You might have an older gentleman on your right who feels comfortable in a suit and tie, while on your right a young person may be wearing shorts and a T-shirt.
                                                            God sees our heart!<br /><br />

                                                            <strong>Will my children be catered for?</strong><br />
                                                            Yes. We have a Parent’s Room at the back of the church (with toys and books) which allows parents to take young children who may be very noisy, while still participating by hearing the service through speakers and observing through the large window.
                                                            <br /><br />
                                                            Before the main talk, children aged 3-12 go out for a children’s program (but they are also welcome to stay in the main service if they prefer).<br /><br />

                                                            <strong>Please contact us by phone or email if you have any other questions!</strong>
                                                        </p>
                                                        <br />
                                                        <p className="subtext">
                                                            And let us consider how we may spur one another on toward love and good deeds.
                                                            Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another--and all the more as you see the Day approaching. (Hebrews 10:24-25)
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

export default SundayService;
