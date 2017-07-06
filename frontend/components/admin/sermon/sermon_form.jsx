import React from 'react';

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

const months = [
        'Jan','Feb','Mar','Apr','May','Jun',
        'Jul','Aug','Sept','Oct','Nov','Dec'
      ];

class SermonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.sermonData.url,
      title: this.props.sermonData.title,
      image: this.props.sermonData.thumbnail_large,
      dateMonth: '',
      dateDay: '',
      dateYear: '',
      speaker: '',
      book: '',
      verse: '',
      series: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let sermon = this.state;
    sermon.date = `${this.state.dateMonth}-${this.state.dateDay}-${this.state.dateYear}`;
    this.props.createSermon(this.state);
  }

  range(lowNum, highNum, type) {
    let result = [];

    if (type === 'up') {
      for (let i = lowNum; i <= highNum; i++) {
        result.push(i);
      }
    } else {
      const year = new Date().getFullYear();
      for (let i = year; i >= lowNum; i--) {
        result.push(i);
      }
    }
    return result;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sermon-form">
        <div className="header-padding"></div>
        <h2>{this.state.title}</h2>

        <img src={this.state.image} className="sermon-create-image"/>
        <button className="new-image-button"
          onClick={(e) => {
            e.preventDefault();
            window.cloudinary.openUploadWidget(window.cloudinary_options,
              function(error, results){
                if(!error){
                  this.setState({image: results[0].url});
                }
              }.bind(this)
            );
          }}>
          New Thumbnail
        </button>

        <p>Title</p>
        <input type="text"
          className="sermon-id-field"
          placeholder="Video Title"
          value={this.state.title}
          onChange={this.update("title")}
          className="sermon-input" />

        <p>Date</p>
        <div className='date-container'>
          <div className="sermon-form-section-container">
            <select
              className="select"
  						value={this.state.dateMonth}
  						onChange={this.update("dateMonth")}>

              <option>Month</option>
              {
                months.map((month, idx) => (
                  <option key={idx}
                    value={idx + 1}>{month}
                  </option>
                ))
              }
            </select>
            <i className="fa fa-caret-down absolute-icon"
              aria-hidden="true">
            </i>
          </div>

          <div className="sermon-form-section-container">
            <select
              className="select"
  						value={this.state.dateDay}
  						onChange={this.update("dateDay")}>

              <option>Day</option>
              {
                this.range(1, 31, 'up').map((num) => (
                  <option key={num}
                    value={num}>{num}
                  </option>
                ))
              }
            </select>
            <i className="fa fa-caret-down absolute-icon"
              aria-hidden="true">
            </i>
          </div>

          <div className="sermon-form-section-container">
            <select
              className="select"
  						value={this.state.dateYear}
  						onChange={this.update("dateYear")}>

              <option>Year</option>

              {
                this.range(2014, 0, 'down').map((num) => (
                  <option key={num}
                    value={num}>{num}
                  </option>
                ))
              }
            </select>
            <i className="fa fa-caret-down absolute-icon"
              aria-hidden="true">
            </i>
          </div>
        </div>

        <p>Main Verse</p>
        <div className="verse-container">
          <div className="sermon-form-section-container verse">
            <select
              className="select"
              value={this.state.book}
              onChange={this.update("book")}>

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

          <input type="text"
            className="sermon-id-field"
            placeholder="Verse"
            value={this.state.verse}
            onChange={this.update("verse")}
            className="sermon-input verse verse-input" />
        </div>

        <input className="submit" type="submit" value="Create Sermon" />
        <button className="remove-button"
          onClick={this.props.removeSermonData}>
          Incorrect Video
        </button>
      </form>
    );
  }

}

export default (SermonForm);
