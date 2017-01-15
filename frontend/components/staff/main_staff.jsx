import React from 'react';
import CampusMap from '../map/map';
import Modal from 'react-modal';
import StaffModal from './staff_modal';

class Visit extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ModalIsOpen: false };
    this.closeModal = this.closeModal.bind(this);
    this.staff = "none";
  }

  openModal() {
    this.setState({ ModalIsOpen: true });
  }

  closeModal() {
    this.setState({ ModalIsOpen: false });
    this.staff = "none";
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleButton(e, staff) {
    this.staff = staff;
    this.openModal();
  }

  render () {
    return (
      <div className="visit">
        <div className="staff-header">
          <h2>OUR STAFF</h2>
        </div>
        <div className="staff">
          <h2>LEAD STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/Mark-1_wgs9oh.jpg"/>
                <span className="staff-name">MARK ELLCESSOR</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>LEAD PASTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Mark") }>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Todd-1-e1481817504423_dqio8j.jpg"/>
                <span className="staff-name">TODD AUSTIN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>DIRECTOR OF WORSHIP & SPIRITUAL GROWTH</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Todd")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/shawna_ojd36k.jpg"/>
                <span className="staff-name">SHAWNA SEWELL</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>DIRECTOR OF ADMINISTRATION & CHURCH GROWTH</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Shawna")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360505/Lisa-1_zwkxew.jpg"/>
                <span className="staff-name">LISA ELLCESSOR</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>DIRECTOR OF CONNECTORS, YOUTH, & MISSIONS</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Lisa")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360507/Sue-1_qjde7w.jpg"/>
                <span className="staff-name">SUE AUSTIN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>DIRECTOR OF CHILDREN'S MINSTRY</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Sue")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360509/Lori-N-1_mexc8f.jpg"/>
                <span className="staff-name">LORI NEAL</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>DIRECTOR OF CONGREGATIONAL CARE, PROPERTY, & SPORTS MINISTRIES</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Lori")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <h2>ALL CAMPUS STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346733/Allison-1_dlnvwi.jpg"/>
                <span className="staff-name">ALLISON FRY</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>BOOKEEPER</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Allison")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Bill-1_oaorbz.jpg"/>
                <span className="staff-name">BILL BRUNEAU</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>PASTORAL CARE</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Bill")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <h2>SELMA CAMPUS STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346728/Courtney-1_s08l0r.jpg"/>
                <span className="staff-name">KIM WOLFE</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>MINISTRY ASSISTANT</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Kim")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346732/Phil-1_cgw8hj.jpg"/>
                <span className="staff-name">PHIL HUGHES</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>HEAD CUSTODIAN</p>
                <div className="hidden"> </div>
              </div>
            </div>
          </div>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346733/Vicky-1_nsychc.jpg"/>
                <span className="staff-name">VICKY HUGHES</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CUSTODIAN</p>
                <div className="hidden"> </div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Melissa-Engle-Pic_ykbdn0.jpg"/>
                <span className="staff-name">MELISSA ENGLE</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>ADMINISTRATIVE ASSISTANT</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Melissa")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <h2>YORKTOWN CAMPUS STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/clay_eu3csr.jpg"/>
                <span className="staff-name">CLAYTON ANDERSON</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CAMPUS PASTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Clayton")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Leigh-1_ixo2ww.jpg" />
                <span className="staff-name">LEIGH EDWARDS</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CONNECTOR, YOUTH, & CHILDREN'S DIRECTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Leigh")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/Shane-1_knre0y.jpg"/>
                <span className="staff-name">SHANE TRACY</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>WORSHIP DIRECTOR</p>
                <div className="hidden"> </div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Bo-1_dzfnao.jpg"/>
                <span className="staff-name">BO DUNCAN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CUSTODIAN</p>
                <div className="hidden"> </div>
              </div>
            </div>
          </div>
          <h2>WINCHESTER CAMPUS STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/Jeremy-2_pnrpo4.jpg"/>
                <span className="staff-name">JEREMY DUNCAN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CAMPUS PASTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Jeremy")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Lori-C-1_tfw6zn.jpg" />
                <span className="staff-name">LORI CLEVENGER</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CHILDREN'S DIRECTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Lori C")}>MORE INFO</div>
              </div>
            </div>
          </div>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Caleb-1_suzrve.jpg"/>
                <span className="staff-name">CALEB AUSTIN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>WORSHIP & YOUTH DIRECTOR, & ALL CAMPUS TECHNOLOGY DIRECTOR</p>
                <div className="staff-info-button" onClick={ (e) => this.handleButton(e, "Caleb")}>MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346732/Brad-1_e6uclt.jpg"/>
                <span className="staff-name">BRAD MULLEN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CUSTODIAN</p>
                <div className="hidden"> </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          className="staff-modal"
          isOpen={this.state.ModalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          overlayClassName="overlay"
          >

          <StaffModal staff={this.staff}
            closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Visit;
