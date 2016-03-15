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
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                />
            </svg>
        );
    }
}