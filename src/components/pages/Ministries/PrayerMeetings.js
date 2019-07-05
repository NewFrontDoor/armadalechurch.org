/* eslint-disable */
import React, { Component } from 'react';
import PrayerMeetingsImg from '../../../assets/img/PrayerMeetings.jpg';

class PrayerMeetings extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Prayer Meetings</h1>
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

                          <h4 className="ministry-text">
                            Prayer is a core value of our church community – and so we try to make it a part of everything we do. However, there are two initiatives that target prayer specifically. One is our monthly prayer meeting after the lunch that follows the church service (12:30pm every 1st Sunday of each month) - which all are welcome to attend. Here we pray for each other, our community, and the world – as well as specific ministries and missions of our church. The other is our “Prayer Chain”, where matters for prayer are emailed to people in our church to pray for.
                          </h4>

                          <h4 className="ministry-text">
                            If you would like prayer – either public or private - please email <a href="mailto:pastor@armadalechurch.org">pastor@armadalechurch.org</a> (currently unavailable).
                          </h4>
                          <br />
                          <img src={PrayerMeetingsImg} alt="" className="ministryImg img img-responsive image-center" />
                          <br />
                          <p className="subtext">
                            Be joyful always; pray continually; give thanks in all circumstances - for this is God's will for you in Christ Jesus. (1 Thessalonians 5:16-18)
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

export default PrayerMeetings;
