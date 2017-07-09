import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import CampusLinks from '../visit/campuslinks';
import Modal from 'react-modal';
import SermonModal from '../sermon/sermon_modal';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state={ModalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ ModalIsOpen: true });
  }

  closeModal() {
    this.setState({ ModalIsOpen: false });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.fetchLatestSermon();
  }

  render () {
    return (
      <div>
        <div className="splash-image" style={{height: innerHeight}}>
          <h1>WELCOME</h1>
        </div>
        < CampusLinks />
        <h2>LATEST SERMON</h2>
        <div className="latest-sermon-image-container" onClick={this.openModal}>
          <img className="latest-sermon-image" src={this.props.sermon.image} />
          <i className="fa fa-youtube-play latest-sermon-icon"
            aria-hidden="true">
          </i>
        </div>

        <Modal
          className="sermon-modal"
          isOpen={this.state.ModalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          overlayClassName="overlay"
          >

          <SermonModal url={this.props.sermon.url}
            closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Home;
