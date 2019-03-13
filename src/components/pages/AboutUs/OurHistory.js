/* eslint-disable */
import React, { Component } from 'react';
import HistoryImg from '../../../assets/img/OurHistory.jpg';
import HistoryPDF from '../../../assets/History of ACC.pdf';
class OurHistory extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Our History</h1>
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

                                                    <img className="historyImg" src={HistoryImg} alt="" align="right"></img><br className="sm-br" /><br className="sm-br" />
                                                    <p>
                                                        The first Congregational service in the area was conducted in 1890 by the Rev Joseph Serls, who made the 20-mile journey from Claremont by horse and cart. On the 17th of February 1900, Armadale Congregational Church was formed, with the help of Rev George Herrington. A church building was constructed on Third Rd in 1903 (right), followed by a manse on the adjoining Church Av in 1907. The manse building is still in position, now as the restaurant “The Manse”.
                                                    </p>
                                                    <p>
                                                        In 1959 the a new church hall was opened, and the old church was relocated to where it now resides in Minawarra Park. Our current Forrest Rd premises, once a drive-in theatre, was purchased in 1984, a year after our school, Dale Christian School, commenced.
                                                    </p>
                                                    <p>
                                                        In 1977, the Methodist, Congregational, and Presbyterian Churches joined to become the Uniting Church. However, some churches decided not to join. This is why ‘Congregational’ churches are few today, although there are a number scattered around the country, and notably still exist as the Congregational denomination in NSW. However, as is evident in our founding documents, our church has always been committed to working with all faithful Christians everywhere, regardless of denominational lines.
                                                    </p>
                                                    <p>
                                                        More information about our history, including its spiritual life and the people of the church, can be found here: <a href={HistoryPDF} target="_blank">Armadale Congregational Church: The First 100 Years</a>.
                                                    </p>
                                                    <br />
                                                    <p className="subtext">
                                                        Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles, and let us run with perseverance the race marked out for us. Let us fix our eyes on Jesus, the author and perfecter of our faith, who for the joy set before him endured the cross, scorning its shame, and sat down at the right hand of the throne of God. (Hebrews 12:1-2)
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
            </section >
        );
    }
}

export default OurHistory;
