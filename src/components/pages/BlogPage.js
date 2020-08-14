import React, { Component } from 'react';
import { Blog } from '@newfrontdoor/blog';
import { getBlogPosts } from '../../utils/fetchJSON'

const Link = ({ link, data, children }) => {
  return (
    /*<a href={`/blog?search=${link}`}>{children}</a>*/
    <span>{children}</span>
  );
};

class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: null,
      loading: true,
      breadcrumbs: `<a href="/">Home</a>
          <span className="delimiter">›</span>
          <span title="" className="nolink">Blog</span>`
    }
  }

  componentWillMount() {
    var that = this;
    getBlogPosts(function (data) {
      console.log(data)
      that.setState({ blogPosts: data, loading: false });
    });
  }
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Blog</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a><span className="delimiter">›</span><span title="" className="nolink">Blog</span>
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
                          {!this.state.loading && this.state.blogPosts !== null ?
                            <Blog
                              dateFormat="EEEE, MMMM do yyyy"
                              posts={this.state.blogPosts}
                              /*overrides={{
                                paddingTop: 0,
                                height: 'fit-content',
                                maxHeight: '500px',
                                top: '20px',
                                fontFamily: 'body',
                                lineHeight: 1,
                              }}*/
                              Link={Link}
                              blockText={content => <p dangerouslySetInnerHTML={{ __html: content }} />}
                            /> :
                            <h2><i className="fa fa-spinner"></i></h2>}
                          {!this.state.loading && this.state.blogPosts.length === 0 ? 'No blog posts have been made yet.' : ''}
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

export default BlogPage;
