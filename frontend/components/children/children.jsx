import React from 'react';

class Mission extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="mission">
        <div className="children-header">
          <h2>CHILDREN</h2>
        </div>
        <div className="mission-and-vision">
          <h2>OUR MISSION</h2>
          <span className="mission-subheading">WHAT WE DESIRE TO DO</span>
          <p className="children-mission-text">We believe that the Bible is never boring, that good leaders always care, and that we can have fun on Sunday mornings.  Each Sunday, staff and volunteers work hard to create a safe and meaningful experience for kids.  We offer families with young children a variety of events and exciting opportunities throughout the year.  From infants to 5th graders, we have safe, secure environments where your children can grow in their faith and knowledge about Jesus. We also believe in empowering our children and giving them opportunities to become a part of ministry by teaching them to reach out and care for children in our church and our community!</p>
          <h2>OUR MINISTRY</h2>
          <span className="mission-subheading">WAYS YOUR CHILDREN CAN GET CONNECTED</span>
        </div>
        <div className="vision-info">
          <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1487845170/13567015_10209794870125636_7672859164094490382_n_skmt6i.jpg"/>
          <div className="vision-text">
            <span>Children’s Church</span>
            <p>Every Sunday morning, at every service your children have their own worship and teaching time in our children’s ministry environments.  You’ll appreciate the opportunity to participate in the adult & youth service, knowing that your children are receiving exceptional care and supervision, as well as their own time to grow closer to God and their friends.</p>
            <span>Mid-Week</span>
            <p>Occasionally throughout the year, children K-5th grade are invited to a weekly series of Bible stories, games, crafts and singing.  Each series has a specific focus that will help your children understand God, themselves, and how to follow Jesus better.</p>
            <span>Vacation Bible School</span>
            <p>VBS is a great way during the summer to get your kids involved in a wonderful ministry output.  They will learn about the Bible in new and adventurous ways, while having tons of fun doing it.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
