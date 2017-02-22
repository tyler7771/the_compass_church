@schedules.each do |schedule|
  json.set! schedule.id do
    json.extract! schedule, :id, :pdf_link, :img1, :img2
  end
end
