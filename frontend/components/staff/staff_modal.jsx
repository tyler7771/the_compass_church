import React from 'react';

class StaffModal extends React.Component {
  constructor(props) {
    super(props);

    this.staff = this.props.staff;
    this.name = "";
    this.job = "";
    this.img = "";
    this.email = "";
    this.description = "";
  }

  staffProfile() {
    if (this.staff === "Mark") {
      this.name = "MARK ELLCESSOR";
      this.job = "LEAD PASTOR";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/Mark-1_wgs9oh.jpg";
      this.email = "markellcessor@thecompass.church";
      this.description = "Raised in Delaware County, Mark graduated from Cowan in 1979. He then attended Purdue University (BOILER UP!), earning a degree in mathematics. Mark’s ship then sailed to Duke University, where he achieved a Master of Divinity in 1986. Mark is married to his wife, Lisa, and together they have four beautiful girls: Joy, Page, Beth and Lyn. Mark has been on staff at The Compass Church since 2002. Mark loves The Compass Church because the people are passionate about God and making a difference in the community and the world.";
    } else if (this.staff === "Todd") {
      this.name = "TODD AUSTIN";
      this.job = "LEAD DIRECTOR OF WORSHIP & SPIRITUAL GROWTH";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Todd-1-e1481817504423_dqio8j.jpg";
      this.email = "toddaustin@thecompass.church";
      this.description = "Todd joined the The Compass Church staff in 2009, bringing a wide variety of experiences in and out of ministry. Although he has been involved in adult, youth and children’s ministry areas of the church, Todd currently oversees all worship and spiritual development at all three of our campuses. Todd loves being married to his incredible wife, Sue, and has two children: Caleb (wife Mallory) and Lauren (husband Cole).";
    } else if (this.staff === "Shawna") {
      this.name = "SHAWNA SEWELL";
      this.job = "LEAD DIRECTOR OF ADMINISTRATION & CHURCH GROWTH";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/shawna_ojd36k.jpg";
      this.email = "shawnasewell@thecompass.church";
      this.description = "Shawna Sewell serves as the lead director of administration & church growth. She is married to her husband, Adam, and has two girls, Abby & Meredith. Shawna has been a part of The Compass Church staff since 2014. She is amazing at empowering our staff to succeed in their areas of ministry. Shawna brings a wonderful set of skills to make ministry flow smoothly and effectively at The Compass Church.";
    } else if (this.staff === "Lisa") {
      this.name = "LISA ELLCESSOR";
      this.job = "LEAD DIRECTOR OF CONNECTORS, YOUTH, & MISSIONS";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360505/Lisa-1_zwkxew.jpg";
      this.email = "lisaellcessor@thecompass.church";
      this.description = "Energy-packed Lisa Ellcessor loves the Lord and people. And she is passionate about her job! Lisa’s top ten personal goals: 1) Be sold out to Jesus Christ, 2) Be happily married to Mark Ellcessor for as as long as I live, 3) Be instrumental in leading my children to become healthy Christian adults, 4) Model a whole-life commitment to the Church, 5) Maintain an infectious, enthusiastic attitude, 6) Engage in honest communication, 7) Approach work with intensity, 8) Keep an eye on eternity, 9) Honor and value others, 10) Pray more.";
    } else if (this.staff === "Sue") {
      this.name = "SUE AUSTIN";
      this.job = "LEAD DIRECTOR OF CHILDREN'S MINSTRY";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360507/Sue-1_qjde7w.jpg";
      this.email = "sueaustin@thecompass.church";
      this.description = "Sue has been a member of The Compass Church since 1992. She volunteered in children’s ministries, worship team and small group ministry before joining the staff as Children’s Ministries Director in 2010. Serving children has been a part of her professional life, as well, having taught at Royerton Elementary for fifteen years. When Sue isn’t serving children, she enjoys spending time with her husband, Todd, and her children Caleb (wife Mallory) and Lauren (husband Cole).";
    } else if (this.staff === "Lori") {
      this.name = "LORI NEAL";
      this.job = "LEAD DIRECTOR OF CONGREGATIONAL CARE, PROPERTY, & SPORTS MINISTRIES";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484360509/Lori-N-1_mexc8f.jpg";
      this.email = "lorineal@thecompass.church";
      this.description = "Lori has been a part of The Compass Church since 2008, along with her husband, Jon, and children, Dru, Brandon, Megan, Olivia and Lilly. Lori started as the office administrator for the Yorktown campus in 2009, then transferred to the Selma campus in 2010. Lori loves people and her job, and she looks forward to lifting your spirits as you enter the the Selma campus lobby.";
    } else if (this.staff === "Allison") {
      this.name = "ALLISON FRY";
      this.job = "ALL CAMPUS BOOKEEPER";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346733/Allison-1_dlnvwi.jpg";
      this.email = "accounts@thecompass.church";
      this.description = "";
    } else if (this.staff === "Bill") {
      this.name = "BILL BRUNEAU";
      this.job = "ALL CAMPUS PASTORAL CARE";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Bill-1_oaorbz.jpg";
      this.email = "billbruneau@thecompass.church";
      this.description = "Bill Bruneau serves as our Pastoral Care Pastor. He has a part of our staff since 2013. Bill is passionate about people and does a great job loving those in need. He works with Lori Neal to provide for the needs of our campuses with their team of volunteers.";
    } else if (this.staff === "Kim") {
      this.name = "KIM WOLFE";
      this.job = "SELMA MINISTRY ASSISTANT";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346728/Courtney-1_s08l0r.jpg";
      this.email = "kimwolfe@thecompass.church";
      this.description = "";
    } else if (this.staff === "Melissa") {
      this.name = "MELISSA ENGLE";
      this.job = "ADMINISTRATIVE ASSISTANT";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346734/Melissa-Engle-Pic_ykbdn0.jpg";
      this.email = "melissaengle@thecompass.church";
      this.description = "";
    } else if (this.staff === "Clayton") {
      this.name = "CLAYTON ANDERSON";
      this.job = "YORKTOWN CAMPUS PASTOR";
      this.img = "http://thecompass.church/wp-content/uploads/2016/09/IMG_5909.jpg";
      this.email = "claytonanderson@thecompass.church";
      this.description = "Clayton Anderson is a passionate follower of Jesus. He began working for The Compass Church in 2016 as the campus pastor at the Yorktown campus. Clayton has two beautiful children, Caden, and Cali and a wonderful wife Candi. He brings a wide variety of skills and experiences to The Compass Church. Clayton is hungry to see leaders raised up in the Kingdom along with transformation in the city of Yorktown.";
    } else if (this.staff === "Leigh") {
      this.name = "LEIGH EDWARDS";
      this.job = "YORKTOWN CONNECTOR, YOUTH, & CHILDREN'S DIRECTOR";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Leigh-1_ixo2ww.jpg";
      this.email = "leighedwards@thecompass.church";
      this.description = "Leigh serves as Youth Director and Campus Connector at Yorktown, guiding our Yorktown campus to stay mission-focused in each ministry area. Leigh and her husband, John, have two boys, Jack and Ben. She joined our staff in 2015. Leigh has a heart for the marginalized. She has amazing talent in areas of organization, leadership, and communication. Her love for God and for people is seen in her life and in her ministry.";
    } else if (this.staff === "Jeremy") {
      this.name = "JEREMY DUNCAN";
      this.job = "WINCHESTER CAMPUS PASTOR";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346735/Jeremy-2_pnrpo4.jpg";
      this.email = "jeremyduncan@thecompass.church";
      this.description = "Jeremy joined the staff at The Compass Church in 2016 as the campus pastor of the Winchester Campus. He graduated magna cum laude from Ball State University with a Bachelor of Science in Elementary Education in 2000, from Olivet Nazarene University with a Masters of Education in 2006, and he completed the Principal’s Licensure Program from Indiana Wesleyan University in 2008. He is passionate about making a difference in lives of others through the church, his vocation, and his life. In addition to being a campus pastor, Jeremy serves as the principal of Willard Elementary School in Winchester and has been very involved in coaching youth sports for many years. Jeremy and his wife, Brandy, reside in Farmland with their two amazing children, Catherine and Carter.";
    } else if (this.staff === "Lori C") {
      this.name = "LORI CLEVENGER";
      this.job = "WINCHESTER CHILDREN'S DIRECTOR";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Lori-C-1_tfw6zn.jpg";
      this.email = "loriclevenger@thecompass.church";
      this.description = "Lori has been working with The Compass Church as a volunteer for over ten years in children’s ministry. Lori recently came on staff as the Winchester Children’s Director. She is passionate about leading children into a relationship with Jesus, and seeing them grow in their love for Him.";
    } else if (this.staff === "Caleb") {
      this.name = "CALEB AUSTIN";
      this.job = "WINCHESTER WORSHIP & YOUTH DIRECTOR, & ALL CAMPUS TECHNOLOGY DIRECTOR";
      this.img = "http://res.cloudinary.com/dmow8kfvt/image/upload/v1484346731/Caleb-1_suzrve.jpg";
      this.email = "calebaustin@thecompass.church";
      this.description = "Caleb Austin has volunteered with The Compass Church for the past ten years in worship and children’s ministry. He worked with CCO in 2014 and 2015 doing campus ministry at Ball State. He graduated from Indiana Wesleyan with a Bachelor's degree in business administration in 2015. He is currently pursuing an MDiv degree at United Theological Seminary in Dayton, OH. Caleb is passionate about worship and leading people into the presence of God. Caleb loves to empower people in their relationship with God. It is his heart’s cry to see people transformed by the love of God. In 2016 he was hired to work with the Youth, Worship, and Technology.";
    }
  }

  render () {
    this.staffProfile();
    return (
      <div className="staff-modal">
        <img className="modal-close" onClick={this.props.closeModal} src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484368746/close-icon_i7qkqn.png"/>
        <img className="modal-picture" src={this.img}/>
        <div className="modal-info">
          <span className="modal-name">{this.name}</span>
          <p className="modal-job">{this.job}</p>
          <p className="modal-email">{this.email}</p>
          <p className="modal-description">{this.description}</p>
        </div>
      </div>
    );
  }
}

export default StaffModal;
