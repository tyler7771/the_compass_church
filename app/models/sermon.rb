class Sermon < ActiveRecord::Base
  validates :title, :url, presence: true

  belongs_to :speaker
  belongs_to :series
end
