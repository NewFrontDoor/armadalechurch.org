/* eslint-disable */
import React, { Component } from 'react';
import GrowthGroupsImg from '../../../assets/img/GrowthGroups.jpg';

class GrowthGroups extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Growth Groups</h1>
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

                          <h4 className="ministry-text">A number of the church community meet weekly in each other’s homes in groups of roughly 4-8 during the week. This is an opportunity to get to know one another better and share our lives while growing together around the Bible. Usually the groups meet for 60-90 minutes.</h4>
                          <h4 className="ministry-text">There are groups that meet at different times – morning or evening – and at different places. Contact us at <a href="mailto:info@armadalechurch.com">info@armadalechurch.com</a> (currently unavailable) for details.</h4>
                          <br />
                          <img src={GrowthGroupsImg} alt="" className="ministryImg image-center img img-responsive" /><br />
                          <p className="subtext">
                            They devoted themselves to the apostles' teaching and to the fellowship, to the breaking of bread and to prayer…They broke bread in their homes and ate together with glad and sincere hearts… (Acts 2:42, 46)
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

export default GrowthGroups;
