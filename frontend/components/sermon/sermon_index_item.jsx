import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Modal from 'react-modal';
import SermonModal from './sermon_modal';

class SermonIndexItem extends React.Component {
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
      <li className='sermon-item' onClick={this.openModal}>
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

        <Modal
          className="sermon-modal"
          isOpen={this.state.ModalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          overlayClassName="overlay"
          >

          <SermonModal url={sermon.url}
            closeModal={this.closeModal}/>
        </Modal>
      </li>
    );
  }
}

export default SermonIndexItem;
