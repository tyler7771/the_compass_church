class Schedule < ActiveRecord::Base
  validates :pdf_link, :img1, :img2, presence: true
end
