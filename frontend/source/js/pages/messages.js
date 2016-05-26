import React from 'react';
import { Link } from 'react-router';
import Page from 'components/page';
import {selectState} from '../util/state';
import {connect} from 'react-redux';
import {loadPodcasts} from '../actions/podcast-actions';

class MessageList extends React.Component {
  constructor() {
    super();
  }

  messageListItem(item) {
    return (
      <li>
        <h4></h4>
      </li>
    );
  }

  render() {
    let messages = this.props.messages || [];
    return (
      <section className='message-list'>
        <ul>
          {messages.map(this.messageListItem)}
        </ul>
      </section>
    );
  }
}

class Message extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className='message'>
        <header>
          <h2>Brad Cypert</h2>
        </header>
        <section>
          <p>
            Heres a message.
          </p>
        </section>
      </main>
    )
  }
}

class Messages extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  render() {
    let messages = this.props.messages || [];
    return (
      <div className='messages'>
        <MessageList messages={messages} />
        <Message message={messages[0]}/>
      </div>
    )
  }
}

export default connect(selectState('messages'))(Messages);
