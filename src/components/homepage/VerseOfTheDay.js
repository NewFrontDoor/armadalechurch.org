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
                    {decode(this.state.votd.text)} - <a href={decode(this.state.votd.permalink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.reference)}</a>  <a href={decode(this.state.votd.copyrightlink)} target="_blank" rel="noreferrer noopener">{decode(this.state.votd.copyright)}</a>

                    <p className="padding-top-15">
                        Powered by <a href="https://www.biblegateway.com" target="_blank" rel="noreferrer noopener">BibleGateway.com</a>
                    </p>
                </div>)

        }

        return (

            < section >
                <div id="votd">
                    <h3>Verse of the Day</h3>
                    {votd}
                </div>

            </section >
        );
    }
}

export default VerseOfTheDay;
