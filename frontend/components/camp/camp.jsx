import React from 'react';
import MediaQuery from 'react-responsive';
import Modal from 'react-modal';
import CampModal from './camp_modal';

class Youth extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ModalIsOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.camp = "none";
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ ModalIsOpen: true });
  }

  closeModal() {
    this.setState({ ModalIsOpen: false });
    this.camp = "none";
  }

  handleButton(e, camp) {
    this.camp = camp;
    this.openModal();
  }

  render () {
    return (
      <div className="visit">
        <div className="camp-header">
          <h2>CAMPS</h2>
        </div>
        <div className="mission-and-vision">
          <h2>WHY CAMP?</h2>
          <p className="youth-purpose-text">We believe the camp experience creates an ideal environment for focused spiritual growth for children and youth.</p>
        </div>
        <div className="camps">
          <h2>OUR CAMPS</h2>
          <p className="youth-purpose-text">We are participating in the following camps for 2017.  Each camp has its own registration process, so please pay careful attention to the instructions to make sure your child is properly registered.  There is also a form to turn in to The Compass Church for each camp to ensure we know that your child is attending that you can receive and turn in at each campus.</p>
          <div className="camp-links">
            <a className="camp-link">
              <div className="jump" onClick={ (e) => this.handleButton(e, "jump") }>
                <div className="camp-title">
                  <p className="camp-name">JUMP!</p>
                  <p className="camp-range">JR HIGH</p>
                </div>
                <button>CAMP DETAILS</button>
              </div>
            </a>
            <a className="camp-link" onClick={ (e) => this.handleButton(e, "summit")}>
              <div className="summit">
                <div className="camp-title">
                  <p className="camp-name">SUMMIT</p>
                  <p className="camp-range">SR HIGH</p>
                </div>
                <button>CAMP DETAILS</button>
              </div>
            </a>
            <a className="camp-link" onClick={ (e) => this.handleButton(e, "rookie") }>
              <div className="rookie">
                <div className="camp-title">
                  <p className="camp-name">ROOKIE</p>
                  <p className="camp-range">GRADES 2-3</p>
                </div>
                <button>CAMP DETAILS</button>
              </div>
            </a>
          </div>
          <div className="camp-links">
            <a className="camp-link">
              <div className="boy-preteen" onClick={ (e) => this.handleButton(e, "boyPreteen") }>
                <div className="camp-title">
                  <p className="camp-name">BOYS PRETEEN</p>
                  <p className="camp-range">BOYS GRADES 4-5</p>
                </div>
                <button>CAMP DETAILS</button>
              </div>
            </a>
            <a className="camp-link" onClick={ (e) => this.handleButton(e, "girlPreteen")}>
              <div className="girl-preteen">
                <div className="camp-title">
                  <p className="camp-name">GIRLS PRETEEN</p>
                  <p className="camp-range">GIRLS GRADES 4-5</p>
                </div>
                <button>CAMP DETAILS</button>
              </div>
            </a>
          </div>

          <Modal
            className="camp-modal"
            isOpen={this.state.ModalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Modal"
            overlayClassName="overlay"
            >

            <CampModal staff={this.camp}
              closeModal={this.closeModal}/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Youth;
