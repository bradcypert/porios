import React from 'react';
import Sidebar from 'components/sidebar';

export default class extends React.Component {
    render() {
        let classNames = `page ${this.props.className}`;

        return (
            <div className={classNames}>
                <Sidebar />
                <main className='main'>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
