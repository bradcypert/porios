import React from 'react';

export default class extends React.Component {
    render() {
        let width = this.props.size || 24;
        let height = this.props.size || 24;
        let color = this.props.color || '#333';

        return (
            <svg className='svg-icon' style={{ width: width + 'px', height: height + 'px' }} viewBox='0 0 24 24'>
                <path
                    fill={color}
                    d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21"
                />
            </svg>
        );
    }
}