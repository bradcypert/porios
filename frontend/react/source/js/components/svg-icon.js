import React from 'react';
import superagent from 'superagent';

export default class extends React.Component {
    constructor(props) {
        super();

        this.state = {
            svg: ''
        };

        superagent
            .get(props.source)
            .end((err, res) => {
                this.setState({
                    svg: res.text
                });
            })
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.svg}}>
            </div>
        );
    }
}