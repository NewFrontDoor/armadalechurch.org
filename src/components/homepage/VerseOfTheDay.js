/* eslint-disable */
import React, { Component } from 'react';
import { getVerseOfTheDay } from '../../utils/fetchJSON';
import { decode } from 'he';

class VerseOfTheDay extends Component {
    constructor() {
        super();
        this.state = { votd: null }
    }
    componentDidMount() {
        var that = this;


        getVerseOfTheDay('https://www.biblegateway.com/votd/get/?format=json', function (data) {
            that.setState({ votd: data });
        });
    }

    render() {
        var votd = <i className="fa fa-spinner"></i>;
        if (this.state.votd) {
            votd =
                (<div>
                    {/*{decode(this.state.votd.text)} - <a href={decode(this.state.votd.permalink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.reference)}</a>  <a href={decode(this.state.votd.copyrightlink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.copyright)}</a>*/}
                    <p style={{ fontSize: "18px", textAlign: "justify" }}>{decode(this.state.votd.text)}</p> <br />
                    <a href={decode(this.state.votd.permalink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.reference)}</a><br />


                    <p className="padding-top-15">
                        <a href={decode(this.state.votd.copyrightlink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.copyright)}</a><br />
                        Powered by <a href="https://www.biblegateway.com" target="_blank" rel="noreferrer noopener">BibleGateway.com</a>
                    </p>
                </div>)

        }

        return (
            < section >
                {/*<div id="votd">
                    <h2>Verse of the Day</h2>
                    {votd}
                </div>*/}
                <div className="col-md-4 col-xs-12">
                    <div className="region region-content-2-2">
                        <div className="block block-block">
                            <h2 className="header-custom-color">Verse of the Day</h2>
                            <div className="content">
                                {votd}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}

export default VerseOfTheDay;
