import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import SermonIndexItem from './sermon_index_item';

const booksOfTheBible = [
      'Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua',
      'Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings',
      '1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job',
      'Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah',
      'Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel',
      'Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah',
      'Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John',
      'Acts','Romans','1 Corinthians','2 Corinthians','Galatians',
      'Ephesians','Philippians','Colossians','1 Thessalonians',
      '2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon',
      'Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John',
      'Jude','Revelation'
    ];

class SermonIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speaker: '',
      series: '',
      book: ''
    };

    this.fetchByParams = this.fetchByParams.bind(this);
  }

  componentDidMount() {
    this.props.fetchSermons({type: 'all'});
    this.props.fetchSeriess();
    this.props.fetchSpeakers();
  }

  fetchByParams(field) {
    return e => {
      this.props.fetchSermons({
        type: field,
        params: e.currentTarget.value
      });

      if (field === 'series') {
        this.setState({
          series: e.currentTarget.value,
          speaker: '',
          book: ''
        });
      } else if (field === 'speaker') {
        this.setState({
          speaker: e.currentTarget.value,
          series: '',
          book: ''
        });
      } else if (field === 'book') {
        this.setState({
          book: e.currentTarget.value,
          series: '',
          speaker: ''
        });
      }
    };
  }

  toggleField(field) {
    const capital = field[0].toUpperCase() + field.slice(1);
    const addS = field + 's';

    return (
      <div className={`params-container`}>
        <div className={`sermon-params-section-container`}>
          <select
            className="select"
            value={this.state[field]}
            onChange={this.fetchByParams(`${field}`)}>

            <option>{capital}</option>

            {
              this.props[addS].map((obj) => (
                <option key={obj.id}
                  value={obj.id}>{obj.name}
                </option>
              ))
            }
          </select>
          <i className="fa fa-caret-down absolute-icon"
            aria-hidden="true">
          </i>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className='sermon-page-container'>
        <div className='header-padding'></div>
        <div className='sermon-page'>
          <div className='sermon-params'>
            <p>Speaker</p>
            {this.toggleField('speaker')}

            <p>Series</p>
            {this.toggleField('series')}

            <p>Main Verse</p>
            <div className="params-container">
              <div className="sermon-params-section-container">
                <select
                  className="select"
                  value={this.state.book}
                  onChange={this.fetchByParams("book")}>

                  <option>Book</option>

                  {
                    booksOfTheBible.map((book) => (
                      <option key={book}
                        value={book}>{book}
                      </option>
                    ))
                  }
                </select>
                <i className="fa fa-caret-down absolute-icon"
                  aria-hidden="true">
                </i>
              </div>
            </div>
          </div>

          <ul className='sermons-index'>
            {
              this.props.sermons.map(sermon => (
                <SermonIndexItem
                  key={sermon.id}
                  sermon={sermon} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SermonIndex;
