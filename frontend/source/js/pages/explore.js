import React from 'react';
import { Link } from 'react-router';
import Page from 'components/page';
import { jsxIf } from 'lib/jsx-helpers';
import { podcast as mockPodcast, mockCategories } from 'lib/mock-data';
import * as arrays from 'lib/arrays';
import {selectState} from '../util/state';
import {connect} from 'react-redux';

const render = {
  categories: (categories) => {
      return categories.map(category => <partials.PodcastList key={category.name} label={category.name} podcasts={category.podcasts} />)
  }
};

const partials = {
  PodcastList: class extends React.Component {
    render() {
      return (
        <div className="podcast-list">
          <h2 className="list-title">{this.props.label}</h2>
          <ul>
            {this.props.podcasts.map(this.li)}
          </ul>
        </div>
      )
    }

    li(podcast, i) {
      return (
        <li key={i}>
          <a href={`#/podcast/${podcast.id}`}>
            <div className="podcast-background" style={{ backgroundImage: `url(${podcast.logo})` }}></div>
            <div className="podcast-title">{podcast.title}</div>
          </a>
        </li>
      )
    }
  }
};

class Explore extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    let mockData = mockCategories
        .map(category => ({
          name: category,
          podcasts: arrays.generate(6, mockPodcast)
        }));

    Promise.resolve( mockData )
      .then(categories => this.setState({ categories }));
  }

  render() {
    console.log(this.props);
    return (
      <div className='explore'>
        { jsxIf(this.state.categories, () => render.categories(this.state.categories)) }
      </div>
    )
  }
}

export default connect(selectState('podcasts'))(Explore);
