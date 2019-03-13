/* eslint-disable */
import React, { Component } from 'react';
import PraiseTeamImg from '../../../assets/img/PraiseTeam.jpg';

class PraiseTeam extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Praise Team</h1>
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

                          <h4 className="ministry-text">The music team of ACC is small but dedicated. Led by Jeetha, our primary aim is to support and enhance the congregational singing on Sunday mornings. However, there are other ways we seek to serve – for example, with other local churches, we sing Christmas carols at Armadale Hospital each year in December.</h4>
                          <br />
                          <img src={PraiseTeamImg} alt="" className="img img-responsive ministryImg image-center" />
                          <br />
                          <p className="subtext">
                            Praise the LORD. <br />
                            Praise God in his sanctuary; <br />
                            praise him in his mighty heavens.<br />
                            Praise him for his acts of power; <br />
                            praise him for his surpassing greatness.<br />
                            Praise him with the sounding of the trumpet, <br />
                            praise him with the harp and lyre,<br />
                            praise him with tambourine and dancing, <br />
                            praise him with the strings and flute,<br />
                            praise him with the clash of cymbals, <br />
                            praise him with resounding cymbals.<br />
                            Let everything that has breath praise the LORD. <br />
                            Praise the LORD.<br />
                            (Psalm 150)
  
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

export default PraiseTeam;
