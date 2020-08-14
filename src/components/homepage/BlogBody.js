import React, { Component } from 'react';
import { Blog } from '@newfrontdoor/blog';
import { getBlogPosts } from '../../utils/fetchJSON';

const Link = ({ link, data, children }) => {
  return (
    /*<a href={`/blog?search=${link}`}>{children}</a>*/
    <span>{children}</span>
  );
};

class BlogBody extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: null,
      loading: true
    }
  }
  componentWillMount() {
    var that = this;
    getBlogPosts(function (data) {
      if (data.length > 0) {
        that.setState({ blogPost: data[0], loading: false });
      }
      else {
        that.setState({ blogPost: null, loading: false });
      }

    });
  }
  render() {
    return (
      <section>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">


                <div className="content">
                  <div className="text-center">
                    <h2 className="header-custom-color padding-top-40">Latest Blog Post</h2>
                    {this.state.blogPost !== null ? <p>Past blog posts can be found <a href="/blog" alt="">here</a></p> : ''}
                  </div>
                  <Blog
                    dateFormat="EEEE, MMMM do yyyy"
                    posts={[this.state.blogPost]}
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
                  />
                </div>

                {!this.state.loading && this.state.blogPost === null ? <div className="text-center"><p>No blog posts have been made yet.</p></div> : ''}

              </div> {/* /main-content-region */}
            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /content-region */}
      </section>
    );
  }
}

export default BlogBody;
