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

  messageItem(item) {
    return (
      <div className='message-container'>
        <p className={item.sent ? 'sent bubble' : 'received bubble'}>
          {item.content}
        </p>
      </div>
    )
  }

  render() {
    let messages = [
      {
        content:'Hey Brad! Check out Developer Tea sometime! I think you\'ll like it!',
        sent: false,
      },
      {
        content:'Thanks Mark! I\'ll definitely check it out soon!',
        sent: true,
      },
      {
        content:'You better!',
        sent: false,
      },
    ];
    return (
      <main className='message'>
        <header>
          <h2>Mark Hamill</h2>
        </header>
        <section>
          {messages.map(this.messageItem)}
        </section>
        <section>
          <form>
            <input className="send-message" type="text"/>
          </form>
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
