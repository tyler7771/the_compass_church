@speakers.each do |speaker|
  json.set! speaker.id do
    json.extract! speaker, :id, :name
  end
end
