import React from 'react';

export default class ImageBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    let img = this.props.imageUrl;
    let backfill = `/images/placeholders/dev-tea.png`;
    return (
      <img src={img ? img : backfill} className="image-box"/>
    )
  }
};
