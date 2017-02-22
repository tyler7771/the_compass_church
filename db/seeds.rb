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
