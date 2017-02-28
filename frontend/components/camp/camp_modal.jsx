import React from 'react';

class StaffModal extends React.Component {
  constructor(props) {
    super(props);

    this.staff = this.props.staff;
    this.name = "";
    this.age = "";
    this.img = "";
    this.date = "";
    this.description = "";
  }

  campProfile() {
    if (this.staff === "jump") {
      this.name = "JUMP! JR HIGH CAMP";
      this.age = "ENTERING GRADES 6-8";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1488270698/13533252_10209755691706200_5309149048554262465_n_bm2g1c.jpg";
      this.date = "JUNE 25-30";
      this.description = "Raised in Delaware County, Mark graduated from Cowan in 1979. He then attended Purdue University (BOILER UP!), earning a degree in mathematics. Mark’s ship then sailed to Duke University, where he achieved a Master of Divinity in 1986. Mark is married to his wife, Lisa, and together they have four beautiful girls: Joy, Page, Beth and Lyn. Mark has been on staff at The Compass Church since 2002. Mark loves The Compass Church because the people are passionate about God and making a difference in the community and the world.";
    } else if (this.staff === "summit") {
      this.name = "SUMMIT SR HIGH CAMP";
      this.age = "ENTERING GRADES 9-12 & 2017 GRADS";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487985203/13603832_714933135314591_6517633627221900236_o_dldfnf.jpg";
      this.date = "JUNE 25-30";
      this.description = "Todd joined the The Compass Church staff in 2009, bringing a wide variety of experiences in and out of ministry. Although he has been involved in adult, youth and children’s ministry areas of the church, Todd currently oversees all worship and spiritual development at all three of our campuses. Todd loves being married to his incredible wife, Sue, and has two children: Caleb (wife Mallory) and Lauren (husband Cole).";
    } else if (this.staff === "rookie") {
      this.name = "ROOKIE CAMP";
      this.age = "BOYS AND GIRLS ENTERING GRADES 2-3";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1488270698/13533252_10209755691706200_5309149048554262465_n_bm2g1c.jpg";
      this.date = "JULY 17-19 ";
      this.description = "Shawna Sewell serves as the lead director of administration & church growth. She is married to her husband, Adam, and has two girls, Abby & Meredith. Shawna has been a part of The Compass Church staff since 2014. She is amazing at empowering our staff to succeed in their areas of ministry. Shawna brings a wonderful set of skills to make ministry flow smoothly and effectively at The Compass Church.";
    } else if (this.staff === "boyPreteen") {
      this.name = "BOYS PRETEEN CAMP";
      this.age = "BOYS ENTERING GRADES 4-5";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1488270698/13533252_10209755691706200_5309149048554262465_n_bm2g1c.jpg";
      this.date = "JULY 14-17";
      this.description = "Energy-packed Lisa Ellcessor loves the Lord and people. And she is passionate about her age! Lisa’s top ten personal goals: 1) Be sold out to Jesus Christ, 2) Be happily married to Mark Ellcessor for as as long as I live, 3) Be instrumental in leading my children to become healthy Christian adults, 4) Model a whole-life commitment to the Church, 5) Maintain an infectious, enthusiastic attitude, 6) Engage in honest communication, 7) Approach work with intensity, 8) Keep an eye on eternity, 9) Honor and value others, 10) Pray more.";
    } else if (this.staff === "girlPreteen") {
      this.name = "GIRLS PRETEEN CAMP";
      this.age = "GIRLS ENTERING GRADES 4-5";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1488270698/13533252_10209755691706200_5309149048554262465_n_bm2g1c.jpg";
      this.date = "JULY 19-22";
      this.description = "Sue has been a member of The Compass Church since 1992. She volunteered in children’s ministries, worship team and small group ministry before joining the staff as Children’s Ministries Director in 2010. Serving children has been a part of her professional life, as well, having taught at Royerton Elementary for fifteen years. When Sue isn’t serving children, she enjoys spending time with her husband, Todd, and her children Caleb (wife Mallory) and Lauren (husband Cole).";
    }
  }

  render () {
    this.campProfile();
    return (
      <div className="camp-modal">
        <img className="modal-close" onClick={this.props.closeModal} src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484368746/close-icon_i7qkqn.png"/>
        <img className="camp-modal-picture" src={this.img}/>
        <div className="camp-modal-info">
          <span className="modal-name">{this.name}</span>
          <p className="modal-age">{this.age}</p>
          <p className="modal-date">{this.date}</p>
          <p className="modal-description">{this.description}</p>
        </div>
      </div>
    );
  }
}

export default StaffModal;
