/* eslint-disable */
import React, { Component } from 'react';
import HelpsImg from '../../../assets/img/Helps.jpg';

class Helps extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Helps</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Ministries</span>
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

                          <h4 className="ministry-text">“Helps” is a catch-all term for assisting those in need. Casseroles for the sick, giving people lifts, running errands while someone has a leg cast, gifts for new parents, gardening for the elderly... If this is the kind of thing you would love to get involved with locally, email <a href="mailto:info@armadalechurch.org">info@armadalechurch.org</a> (currently unavailable).</h4>
                          <br />
                          <img src={HelpsImg} alt="" className="img img-responsive image-center" /><br />
                          <p className="subtext">
                            In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: 'It is more blessed to give than to receive.'" (Acts 20:35)
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

export default Helps;
