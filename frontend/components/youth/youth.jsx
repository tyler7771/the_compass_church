import React from 'react';
import MediaQuery from 'react-responsive';

class Youth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {youthGroup: "none"};
  }

  componentDidMount() {
    this.props.fetchSchedules();
  }

  handleButton (e, button) {
    e.preventDefault();
    if (button === "selma") {
      this.setState({youthGroup: "selma"});
    } else if (button === "winchester") {
      this.setState({youthGroup: "winchester"});
    } else if (button === "yorktown") {
      this.setState({youthGroup: "yorktown"});
    }
  }

  youthSchedule(type) {
    const schedules = this.props.schedules;
    if (this.state.youthGroup === "none") {
      return (
        <div className="no-details"></div>
      );
    } else if (this.state.youthGroup === "selma") {
      if (type === "desktop") {
        return (
          <div>
            <a href={schedules[0].pdf_link} target="_blank" className="download-button">DOWNLOAD SELMA SCHEDULE</a>
            <div className="youth-schedule-container">
              <img className="youth-schedule-img" src={schedules[0].img1} />
              <img className="youth-schedule-img" src={schedules[0].img2} />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <a href={schedules[0].pdf_link} target="_blank" className="download-button">DOWNLOAD SELMA SCHEDULE</a>
            <div className="youth-schedule-container-mobile">
              <img className="youth-schedule-img-mobile" src={schedules[0].img1} />
              <img className="youth-schedule-img-mobile" src={schedules[0].img2} />
            </div>
          </div>
        );
      }
    } else if (this.state.youthGroup === "winchester") {
      if (type === "desktop") {
        return (
          <div>
            <a href={schedules[1].pdf_link} target="_blank" className="download-button">DOWNLOAD WINCHESTER SCHEDULE</a>
            <div className="youth-schedule-container">
              <img className="youth-schedule-img" src={schedules[1].img1} />
              <img className="youth-schedule-img" src={schedules[1].img2} />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <a href={schedules[1].pdf_link} target="_blank" className="download-button">DOWNLOAD WINCHESTER SCHEDULE</a>
            <div className="youth-schedule-container-mobile">
              <img className="youth-schedule-img-mobile" src={schedules[1].img1} />
              <img className="youth-schedule-img-mobile" src={schedules[1].img2} />
            </div>
          </div>
        );
      }
    } else if (this.state.youthGroup === "yorktown") {
      if (type === "desktop") {
        return (
          <div>
            <a href={schedules[2].pdf_link} target="_blank" className="download-button">DOWNLOAD YORKTOWN SCHEDULE</a>
            <div className="youth-schedule-container">
                <img className="youth-schedule-img" src={schedules[2].img1} />
                <img className="youth-schedule-img" src={schedules[2].img2} />
              </div>
          </div>
        );
      } else {
        return (
          <div>
            <a href={schedules[2].pdf_link} target="_blank" className="download-button">DOWNLOAD YORKTOWN SCHEDULE</a>
            <div className="youth-schedule-container-mobile">
              <img className="youth-schedule-img-mobile" src={schedules[2].img1} />
              <img className="youth-schedule-img-mobile" src={schedules[2].img2} />
            </div>
          </div>
        );
      }
    }
  }

  render () {
    return (
      <div className="visit">
        <div className="visit-header">
          <h2>YOUTH</h2>
        </div>
        <div className="locations">
          <h2>CHECK OUT WHAT OUR YOUTH ARE DOING</h2>
          <div className="campus-links">
            <a className="campus-link">
              <div className="selma-youth">
                <div className="campus-title">SELMA</div>
                <button onClick={ (e) => this.handleButton(e, "selma") }>YOUTH SCHEDULE</button>
              </div>
            </a>
            <a className="campus-link">
              <div className="winchester-youth">
                <div className="campus-title">WINCHESTER</div>
                <button onClick={ (e) => this.handleButton(e, "winchester") }>YOUTH SCHEDULE</button>
              </div>
            </a>
            <a className="campus-link">
              <div className="yorktown-youth">
                <div className="campus-title">YORKTOWN</div>
                <button onClick={ (e) => this.handleButton(e, "yorktown") }>YOUTH SCHEDULE</button>
              </div>
            </a>
          </div>
          <MediaQuery query='(min-device-width: 1224px)'>
            {this.youthSchedule("desktop")}
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
            {this.youthSchedule("mobile")}
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Youth;
