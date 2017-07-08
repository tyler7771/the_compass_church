import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class SermonIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    const sermon = this.props.sermon;
    return (
      <li className='sermon-item'>
        <img className='sermon-item-image' src={sermon.image} />
        <p className='sermon-title'>{sermon.title}</p>
        <p>
          <i className="fa fa-calendar-o"></i>&nbsp;
          {Date(sermon.date).slice(4, 15)}
        </p>
        <p>
          <i className="fa fa-book"></i>&nbsp;
          {sermon.book} {sermon.verse}
        </p>
        <p>
          <i className="fa fa-microphone"></i>&nbsp;
          {sermon.speaker.name}
        </p>
      </li>
    );
  }
}

export default SermonIndexItem;
