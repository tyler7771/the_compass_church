import React from 'react';

class StaffModal extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    const source = this.props.url.slice(0,8) +
      'player.'+
      this.props.url.slice(8,18) +
      'video/' +
      this.props.url.slice(18) +
      '?autoplay=1';
    return (
      <div className="sermon-modal-container">
        <img className="modal-close" onClick={this.props.closeModal} src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484368746/close-icon_i7qkqn.png"/>

        <iframe
          className='sermon-player'
          src={source}
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default StaffModal;
