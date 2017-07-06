import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import NewSermonForm from './sermon_form_container';
import SermonIdForm from './sermon_id_container';

class Mission extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    if (this.props.sermonData.title) {
      return (
        < NewSermonForm />
      );
    } else {
      return (
        < SermonIdForm />
      );
    }
  }
}

export default Mission;
