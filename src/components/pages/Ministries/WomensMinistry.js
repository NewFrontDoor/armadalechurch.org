/* eslint-disable */
import React, { Component } from 'react';
import WomensMinistryImg from '../../../assets/img/WomensMinistry.jpg';

class WomensMinistry extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Women's Ministry</h1>
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
                            Various special events are organised throughout the year for women to get together and be encouraged. These include women's breakfasts, Valentine's Day morning tea, and guest speaker events. All women are welcome – young, old, single, or married. Contact <a href="mailto:info@armadalechurch.com">info@armadalechurch.com</a> (currently unavailable) for details.
                          </h4>
                          <br />
                          <img src={WomensMinistryImg} alt="" className="img img-responsive image-center" />
                          <br />
                          <p className="subtext">
                            Charm is deceptive, and beauty is fleeting;<br />
                            but a woman who fears the LORD is to be praised. <br />
                            (Proverbs 31:30)
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

export default WomensMinistry;
