import React from 'react';
import { Link } from 'react-router';
import {selectState} from '../util/state';
import {connect} from 'react-redux';

class FeedItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='feed-item'>
        <header>
          <h4>Brad Cypert</h4>
        </header>
        <section>
          <p>
            Heres a message.
          </p>
        </section>
      </section>
    )
  }
}

class Feed extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  render() {
    let updates = this.props.updates || [];
    return (
      <div className='feed'>
        {updates.map((update) => <FeedItem item={update}/>)}
      </div>
    )
  }
}

export default connect(selectState('updates'))(Feed);
