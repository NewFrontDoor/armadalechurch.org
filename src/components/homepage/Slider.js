/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { getFrontPageImage } from '../../utils/fetchJSON'

import slider1 from '../../assets/img/group-photo-2018.png';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      loading: true
    };
  }
  componentWillMount() {
    var that = this;
    getFrontPageImage(function (data) {
      if (data.length > 0) {
        that.setState({ image: data[0].image, loading: false });
      }
      else {
        that.setState({ image: slider1, loading: false });
      }

    });
  }
  render() {
    return (
      <section>
        <div id="highlighted-2-region" className="highlighted region-0 block-0 bg-color-grayLight1 text-color-light" >
          <div className="region region-highlighted-2">
            <div id="block-views-front-page-slider-block" className="block block-views">
              <div className="content">
                {!this.state.loading ? <img className="img-full-width img-responsive" src={this.state.image} alt="" /> : <i className="fa fa-spinner"></i>}
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Slider;
