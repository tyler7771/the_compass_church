# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "admin", password: "password")

Schedule.create(pdf_link: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487754374/Selma_Youth_Schedule.pdf",
  img1: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756955/2016-2017-Selma-Campus-Newsletter-2-WEB-1_pfjeuz.jpg",
  img2: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756984/2016-2017-Selma-Campus-Newsletter-2-WEB-2_cq7paz.jpg")
Schedule.create(pdf_link: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487754374/Selma_Youth_Schedule.pdf",
  img1: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756951/2017-Winchester-Winter-Newsletter-WEB-1_mncjax.jpg",
  img2: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756955/2017-Winchester-Winter-Newsletter-WEB-2_qmbych.jpg")
Schedule.create(pdf_link: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487755204/Yorktown_Schedule_zzqvsb.pdf",
  img1: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756955/2016-2017-Yorktown-Campus-Newsletter-2-WEB1_kwijln.jpg",
  img2: "http://res.cloudinary.com/dmow8kfvt/image/upload/v1487756955/2016-2017-Yorktown-Campus-Newsletter-2-WEB-2_l0v5hb.jpg")

Speaker.create(name: 'Mark Ellcessor')
Speaker.create(name: 'Todd Austin')
Speaker.create(name: 'Jerry Gillespie')
Speaker.create(name: 'Shawna Sewell')
Speaker.create(name: 'Sue Austin')
Speaker.create(name: 'Bill Bruneau')
Speaker.create(name: 'Jeremy Duncan')
Speaker.create(name: 'Caleb Austin')
Speaker.create(name: 'Adam Sewell')
Speaker.create(name: 'Clayton Anderson')
Speaker.create(name: 'Janice Austin')
Speaker.create(name: 'Lisa Ellcessor')
Speaker.create(name: 'Mike Richardson')
Speaker.create(name: 'Bishop Michael Coyner')

Series.create(name: '40 Days: Expect God To Transform Your Life')
Series.create(name: 'AHA')
Series.create(name: 'Altar Ego')
Series.create(name: 'Christmas')
Series.create(name: 'David')
Series.create(name: 'Discipleshift')
Series.create(name: 'From Baggage to Luggage')
Series.create(name: 'Fruit of the Spirit')
Series.create(name: 'Generous Living')
Series.create(name: "God's Christmas Gifts")
Series.create(name: 'Multiply')
Series.create(name: 'Proverbs: Wisdom From Above')
Series.create(name: 'Rock Solid')
Series.create(name: 'The Gospel of Mark')
Series.create(name: 'The Grave Robber')
Series.create(name: 'The Great Commission')
Series.create(name: 'The Growth Grid')
Series.create(name: 'The Last 24 Hours')
Series.create(name: 'The Story of Us')
Series.create(name: "Through John's Eyes")
Series.create(name: 'Unfinished')
