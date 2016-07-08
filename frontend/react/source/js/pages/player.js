import React from 'react';
import { jsxIf } from 'lib/jsx-helpers';
import { podcast as mockPodcast, mockEpisode } from 'lib/mock-data';

const render = {
    source: (source, i) => {
        let type = 'audio/' + source.substring(source.lastIndexOf('.') + 1);
        return (<source key={i} src={source} type={type}></source>);
    }
};

const partials = {
    Page: class extends React.Component {
        render() {
            let episode = this.props.episode,
                podcast = this.props.podcast;

            return (
                <div>
                    <h2>Episode: {episode.name}</h2>
                    <h3>From: {podcast.title}</h3>

                    <audio controls="controls">
                        {episode.sources.map(render.source)}
                    </audio>
                </div>
            )
        }
    }
};

export default class extends React.Component {
    constructor() {
        super();

        this.state = {
            podcast: null,
            episode: null
        };
    }

    componentDidMount() {
        Promise.resolve(mockPodcast)
            .then(podcast => {
                this.setState({ podcast });
            });

        Promise.resolve(mockEpisode)
            .then(episode => {
                this.setState({ episode });
            });
    }

    render() {
        return (
            <div className='player'>
                { jsxIf(this.state.podcast && this.state.episode, () => <partials.Page episode={this.state.episode} podcast={this.state.podcast} />) }
            </div>
        )
    }
}
