import React from 'react';
import { Link } from 'react-router';
import CastIcon from 'components/icons/cast';
import PeopleIcon from 'components/icons/people';
import GearIcon from 'components/icons/gear';
import PersonIcon from 'components/icons/person';
import HeartIcon from 'components/icons/heart';
import NewspaperIcon from 'components/icons/newspaper';
import MessagesIcon from 'components/icons/messages';

const partials = {
    li: class extends React.Component {
        render() {
            return (
                <li className={`sidebar-item ${this.props.className || ''}`}>
                    <Link className='sidebar-link' to={this.props.url} activeClassName='active'>
                        <this.props.icon size={this.props.size} />
                    </Link>
                </li>
            )
        }
    }
};

export default class extends React.Component {
    render() {
        return (
            <ul className='sidebar'>
                <li className='sidebar-item large static'>
                    <i className="icon logo large"></i>
                </li>

                <partials.li url={`/explore`} icon={CastIcon} size={48} />
                <partials.li url={`/connect`} icon={PeopleIcon} size={36} />
                <partials.li url={`/favorites`} icon={HeartIcon} size={36} />
                <partials.li url={`/feed`} icon={NewspaperIcon} size={36} />
                <partials.li url={`/messages`} icon={MessagesIcon} size={36} />
                <partials.li url={`/settings`} icon={GearIcon} size={36} />
                <partials.li url={`/account`} icon={PersonIcon} size={48} className='large' />
            </ul>
        )
    }
}