import React from 'react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='home'>
                { !this.state.podcast || <partials.Overview podcast={this.state.podcast} /> }

                { jsxIf(this.state.podcast, <partials.DetailsView podcast={this.state.podcast} />) }
            </div>
        )
    }
}
