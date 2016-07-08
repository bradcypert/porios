import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Page from 'components/page';
import HomePage from 'pages/home';
import ConnectPage from 'pages/connect';
import PodcastPage from 'pages/podcast';
import SeasonPage from 'pages/season';
import ExplorePage from 'pages/explore';
import PlayerPage from 'pages/player';
import MessagesPage from 'pages/messages';
import FeedPage from 'pages/feed';
import SettingsPage from 'pages/settings';

export default class extends React.Component {
    render() {
        return (
          <Provider store={this.props.store}>
            <Router history={browserHistory}>
                <Route path="/" component={Page}>
                  <Route path="/connect" component={ConnectPage} />
                  <Route path="/podcast/:id" component={PodcastPage} />
                  <Route path="/podcast/:id/:season" component={SeasonPage} />
                  <Route path="/explore" component={ExplorePage} />
                  <Route path="/messages" component={MessagesPage} />
                  <Route path="/feed" component={FeedPage} />
                  <Route path="/player/:podcastId/:episodeId" component={PlayerPage} />
                  <Route path="/settings" component={SettingsPage} />
                  <IndexRoute component={ExplorePage} />
                </Route>
            </Router>
          </Provider>
        )
    }
}
