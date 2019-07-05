/* eslint-disable */
import React, { Component } from 'react';
import PastoralCareImg from '../../../assets/img/PastoralCare.jpg';

class PastoralCare extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Pastoral Care</h1>
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

                          <h4 className="ministry-text">If you or someone you know would appreciate a visit, do contact us by phone or at <a href="mailto:pastor@armadalechurch.org">pastor@armadalechurch.org</a> (currently unavailable). You don’t need to be a regular attender of our church, and we are happy to simply chat over the phone, catch up over coffee at a café, visit in hospital, or meet more formally. If you would like professional counselling, we can also direct you to someone we recommend.</h4>
                          <br />
                          <img src={PastoralCareImg} alt="" className="img img-responsive image-center" /><br />

                          <p className="subtext text-center">
                            Rejoice with those who rejoice; mourn with those who mourn. (Romans 12:15)
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

export default PastoralCare;
