import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class SermonIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  dateString() {
    let date = new Date;
    const splitDate = this.props.sermon.date.split('-');
    date.setMonth(Number(splitDate[1]) - 1);
    date.setFullYear(splitDate[0]);
    date.setDate(splitDate[2]);
    return date.toDateString().slice(4);
  }

  render () {
    const sermon = this.props.sermon;
    return (
      <li className='sermon-item'>
        <img className='sermon-item-image' src={sermon.image} />
        <p className='sermon-title'>{sermon.title}</p>
        <p>
          <i className="fa fa-calendar-o"></i>&nbsp;
          {this.dateString()}
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
