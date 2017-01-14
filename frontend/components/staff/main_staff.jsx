import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';

class Visit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {staffDetails: "none"};
  }

  handleButton (e, button) {
    e.preventDefault();
    if (button === "selma") {
      this.setState({locationDetails: "selma"});
    } else if (button === "winchester") {
      this.setState({locationDetails: "winchester"});
    } else if (button === "yorktown") {
      this.setState({locationDetails: "yorktown"});
    }
  }

  locationInfo () {
    if (this.state.locationDetails === "none") {
      return (
        <div className="no-details"></div>
      );
    } else if (this.state.locationDetails === "selma") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"selma"}
          />
          <div className="campus-info-details">
            <div className="campus-info-details-text">
              <h3>Selma</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 9:00 & 10:45am</p>
              <p><span className="fa fa-phone-square"></span> (765) 282-1648</p>
              <p><span className="fa fa-envelope"></span> selma@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> 400 N CR 600 E</p><p>&ensp; SELMA, IN 47383</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//The+Compass+Church+-+Selma,+400+N+Co+Rd+600+E,+Selma,+IN+47383/@40.195659,-85.275648,17z/data=!4m15!1m6!3m5!1s0x88153ff7cab93139:0x810f52ff63f7ba3a!2sThe+Compass+Church+-+Selma!8m2!3d40.195659!4d-85.273454!4m7!1m0!1m5!1m1!1s0x88153ff7cab93139:0x810f52ff63f7ba3a!2m2!1d-85.273454!2d40.195659" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    } else if (this.state.locationDetails === "winchester") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"winchester"}
          />
          <div className="campus-info-details">
            <div className="campus-info-details-text-winchester">
              <h3>Winchester</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 9:30am</p>
              <p><span className="fa fa-phone-square"></span> (765) 584-4151</p>
              <p><span className="fa fa-envelope"></span> winchester@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> Sunday Location:</p><p>&ensp; TOWNE SQUARE COMMUNITY CENTRE</p><p>&ensp; 123 W FRANKLIN ST</p><p>&ensp; WINCHESTER, IN 47394</p></span>
                <span><p><span className="fa fa-map-marker"></span> Office Location:</p><p>&ensp; 313 S MERIDIAN ST</p><p>&ensp; WINCHESTER, IN 47394</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//123+W+Franklin+St,+Winchester,+IN+47394/@40.171474,-84.9843989,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88155e4d3105997b:0x9e4d4f01fafb981a!2m2!1d-84.9822049!2d40.171474" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    } else if (this.state.locationDetails === "yorktown") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"yorktown"}
          />
          <div className="campus-info-details">
            <div className="campus-info-details-text">
              <h3>Yorktown</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 10:45am</p>
              <p><span className="fa fa-phone-square"></span> (765) 405-1119</p>
              <p><span className="fa fa-envelope"></span> yorktown@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> 8116 W JACKSON ST</p><p>&ensp; MUNCIE, IN 47304</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//The+Compass+Church+-+Yorktown,+8116+W+Jackson+St,+Muncie,+IN+47304/@40.2108617,-85.5166683,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8815227cd4542c5b:0xfaddb1cb57dcc2de!2m2!1d-85.481563!2d40.210867" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    }
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
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
                <div className="staff-info-button">MORE INFO</div>
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
          </div>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Melissa-Engle-Pic_ykbdn0.jpg"/>
                <span className="staff-name">MELISSA ENGLE</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>ADMINISTRATIVE ASSISTANT</p>
                <div className="staff-info-button">MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
            </div>
            <div className="staff-member">
            </div>
          </div>
          <h2>YORKTOWN CAMPUS STAFF</h2>
          <div className="staff-row">
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/clay_eu3csr.jpg"/>
                <span className="staff-name">CLAY ANDERSON</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>CAMPUS PASTOR</p>
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
              </div>
            </div>
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
          </div>
          <div className="staff-row">
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
            <div className="staff-member">
            </div>
            <div className="staff-member">
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
                <div className="staff-info-button">MORE INFO</div>
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
                <div className="staff-info-button">MORE INFO</div>
              </div>
            </div>
            <div className="staff-member">
              <div className="picture-and-name">
                <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Caleb-1_suzrve.jpg"/>
                <span className="staff-name">CALEB AUSTIN</span>
              </div>
              <div className="title-and-button">
                <span className="line"></span>
                <p>WORSHIP & YOUTH DIRECTOR, & ALL CAMPUS TECHNOLOGY DIRECTOR</p>
                <div className="staff-info-button">MORE INFO</div>
              </div>
            </div>
          </div>
          <div className="staff-row">
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
            <div className="staff-member">
            </div>
            <div className="staff-member">
            </div>
          </div>
          {this.locationInfo()}
        </div>
      </div>
    );
  }
}

export default Visit;
