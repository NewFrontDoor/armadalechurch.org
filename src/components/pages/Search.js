/* eslint-disable */
import React, { Component } from 'react';
import { searchDrupalPages } from '../../utils/fetchJSON';
import _ from 'lodash';
import { decode } from 'he';
import { createHashHistory } from 'history';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.match.params.query,
            searchResults: null,
            resultsExist: false,
            searching: true,
            lastSearched: null
        }
    }

    componentWillMount() {
        if (this.state.searchQuery !== null) {
            var that = this;
            searchDrupalPages(this.state.searchQuery, function (data) {
                if (data.length !== 0) {
                    that.setState({ resultsExist: true });
                }
                that.setState({ searchResults: data, searching: false, lastSearched: that.state.searchQuery });
            });
        }
        else {
            this.setState({ searching: false });
        }
    }

    handleChange(e) {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        var change = {};
        change[e.target.name] = value;
        this.setState(change);
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchQuery}`)
        var that = this;
        searchDrupalPages(this.state.searchQuery, function (data) {
            if (data.length !== 0) {
                that.setState({ resultsExist: true });
            }
            else {
                that.setState({ resultsExist: false });
            }
            that.setState({ searchResults: data, searching: false, lastSearched: that.state.searchQuery });
        });
    }

    render() {
        var results;
        if (this.state.searchResults && this.state.resultsExist === true) {
            var results = _.map(this.state.searchResults, (result) => {
                return (
                    <li key={_.uniqueId()}><a href={'/' + result.path}>{decode(result.title)}</a></li>
                )
            });
        }

        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Search</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Search</span>
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
                                    <div className="content">
                                        <div className="node node-page clearfix">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <form onSubmit={this.handleSearchSubmit.bind(this)}>
                                                            <input type="text" name="searchQuery" className="search-bar" value={this.state.searchQuery || ''} onChange={this.handleChange.bind(this)} placeholder="Search our website..." />
                                                        </form>


                                                        {!this.state.searching && this.state.resultsExist && this.state.lastSearched ? <h5>Pages that contain "{this.state.lastSearched}"</h5> : ""}
                                                        {this.state.searching ? <h2><i className="fa fa-spinner"></i></h2> : <ul>{results}</ul>}
                                                        {!this.state.resultsExist && this.state.lastSearched !== "null" && this.state.lastSearched ? <h5>No results found for "{this.state.lastSearched}"</h5> : ""}

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

export default Search;
