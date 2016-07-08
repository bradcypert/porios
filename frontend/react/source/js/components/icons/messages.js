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
                    d="M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                />
            </svg>
        );
    }
}