import React from 'react';

class SermonIdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSermonData(this.state.id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sermon-form">
        <h2>New Sermon ID</h2>
        <input type="text"
          className="sermon-id-field"
          placeholder="Vimeo Video ID ex.'https://vimeo.com/(video ID)'"
          value={this.state.id}
          onChange={this.update("id")} />
        <input className="sermon-id-submit"
          type="submit"
          value="Get Video Information" />
      </form>
    );
  }

}

export default (SermonIdForm);
