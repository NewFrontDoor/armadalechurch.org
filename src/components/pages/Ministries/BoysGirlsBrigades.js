/* eslint-disable */
import React, { Component } from 'react';
import image from '../../../assets/img/boysbrigades.jpg'
import HTML5Video from '../../models/HTML5Video'

class BoysGirlsBrigades extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Boy's Brigades</h1>
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

                          <div className="row">
                            <div className="col-md-3 padding-bottom-30 text-center"><img className="img img-responsive" src={image} alt="" style={{ maxHeight: "800px" }} /></div>
                            <div className="col-md-9">
                              <p className="ministry-text">If you’re looking for something fun for boys that delivers challenges and opportunities to grow and, at the same time, make good friends, then you should think about getting him involved in The Boys’ Brigade (or BB for short) – you’ll be surprised how quickly you will fit in and enjoy it. All boys are welcome!</p>
                              <p className="ministry-text">BB meets weekly during the school term for about two hours and is run by trained safe leaders who receive instruction in duty of care and are prepared to be screened with police records checks. The BB program is structured to appeal to and hold the attention of the boys, as well as teach them new skills in physical, educational, social and spiritual areas of life.</p>
                              <p className="ministry-text">Boys from PP to Year 2 can join the Anchors Section, while boys from Years 3 to 6 can go to Juniors. Seniors is for those is Years 7 to 12. As boys go higher in BB, the range of activities are broader, more adventurous, challenging and with greater rewards!</p>
                              <p className="ministry-text">BB is an international organisation and has been running programs for boys in Australia for over 120 years.</p>

                              <p className="text-center padding-top-50"><strong>The Boys' Brigade - 41st W.A. (Dale) Company</strong> meets Tuesdays during school terms at the Dale Christian School / Armadale Congregational Church from 6.30 to 8.30pm.</p>
                              <p className="text-center">For further information, please contact Ian Prangnell on 0423 098 056</p>

                              <p className="text-center padding-top-50">THE OBJECT OF THE BOYS' BRIGADE SHALL BE THE ADVANCEMENT OF CHRIST'S KINGDOM AMONG BOYS<br />
                                AND THE PROMOTION OF 	HABITS OF OBEDIENCE, REVERENCE, DISCIPLINE, SELF-RESPECT,<br />
                                AND ALL THAT TENDS TOWARDS A TRUE CHRISTIAN MANLINESS.
                              </p>
                            </div>
                          </div>
                          <div className="row col-xs-12 padding-top-30">
                            <HTML5Video src="https://api.armadalechurch.org/sites/api.armadalechurch.org/files/beingbold-encoded.mp4" type="video/mp4" />
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

export default BoysGirlsBrigades;
