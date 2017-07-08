@sermons.each do |sermon|
  json.set! sermon.id do
    json.extract! sermon, :id, :title, :url, :image, :speaker_id, :series_id, :date, :book, :verse
    json.set! :speaker do
      json.extract! sermon.speaker, :id, :name
    end
  end
end
