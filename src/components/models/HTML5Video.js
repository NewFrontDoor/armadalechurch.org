import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import '../../assets/css/react-html5video.css';


class HTML5Video extends Component {
    render() {
        return (
            <Video
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            >
                <source src={this.props.src} type={this.props.type} />

            </Video>
        );
    }
}

export default HTML5Video;
