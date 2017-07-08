@seriess.each do |series|
  json.set! series.id do
    json.extract! series, :id, :name
  end
end
