/* eslint-disable */
import React, { Component } from 'react';
import MensBreakfastImg from '../../../assets/img/MensBreakfast.jpg';
class MensBreakfast extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Men's Breakfast</h1>
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
                            Men get together for a manly(!) cooked breakfast each month on the verandah of one of our men’s homes. This is a great chance to get to know other men in an informal setting (and it’s free!). Contact <a href="mailto:info@armadalechurch.org">info@armadalechurch.org</a> (currently unavailable) for details.
                          </h4>
                          <br />
                          <img src={MensBreakfastImg} alt="" className="ministryImg img img-responsive image-center" /><br />
                          <p className="subtext">
                            He makes grass grow for the cattle,<br />
                            and plants for man to cultivate-- bringing forth food from the earth:<br />
                            wine that gladdens the heart of man,<br />
                            oil to make his face shine,<br />
                            and bread that sustains his heart. (Psalm 104:14-15)
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

export default MensBreakfast;
