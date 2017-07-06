class CreateSermons < ActiveRecord::Migration
  def change
    drop_table :sermons
    create_table :sermons do |t|
      t.string :title, null:false
      t.string :url, null:false
      t.string :image
      t.string :verse
      t.string :book
      t.date :date
      t.integer :speaker_id
      t.integer :series_id
      t.timestamps null: false
    end
  end
end
