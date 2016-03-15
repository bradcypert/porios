import React from 'react';
import { jsxIf } from 'lib/jsx-helpers';
import { podcast as mockPodcast } from 'lib/mock-data';

const render = {
    podcastLogo(source) {
        return (
            <div className='podcast-logo'>
                <img src={source} />
            </div>
        )
    },
    stat: ({ label, value }) => (
        <div className='stat'>
            <label className="stat-label">{label}</label>
            <span className="stat-value">{value}</span>
        </div>
    )
};

const partials = {
    Stat: class extends React.Component {
        render() {
            return (
                <div className='stat'>
                    <label className="stat-label">{this.props.label}</label>
                    <span className="stat-value">{this.props.value}</span>
                </div>
            )
        }
    },
    Overview: class extends React.Component {
        render() {
            let podcast = this.props.podcast;

            return (
                <aside className="aside">
                    { render.podcastLogo(podcast.logo) }

                    <div className="container">
                        <div className="button-pair large margin-top-large">
                            <button className='button primary'>Subscribe</button>
                            <button className='button'>Latest Episode</button>
                        </div>

                        <h2 className="margin-top">Similar</h2>
                    </div>
                </aside>
            )
        }
    },
    DetailsView: class extends React.Component {
        render() {
            let podcast = this.props.podcast;

            return (
                <article className="article">
                    <div className="container">
                        <h1 className="margin-top-small">{podcast.title}</h1>
                        <p>{podcast.description}</p>
                        <div className="stats">
                            { render.stat({ label: 'Episodes', value: podcast.episodeCount }) }
                            { render.stat({ label: 'Subscribers', value: podcast.subscribers }) }

                            <partials.Stat label="Genre" value={podcast.genres.join(', ')} />
                            <partials.Stat label="Release Date" value={new Date(podcast.released).toDateString()} />
                        </div>
                    </div>
                </article>
            )
        }
    }
};

export default class extends React.Component {

    constructor() {
        super();

        this.state = {
            podcast: null
        };
    }

    componentDidMount() {
        Promise.resolve(mockPodcast)
            .then(podcast => {
                this.setState({ podcast });
            })
    }

    render() {
        return (
            <div className='home'>
                { !this.state.podcast || <partials.Overview podcast={this.state.podcast} /> }

                { jsxIf(this.state.podcast, () => <partials.DetailsView podcast={this.state.podcast} />) }
            </div>
        )
    }
}
