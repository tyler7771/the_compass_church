class AddSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.string :pdf_link, null:false
      t.string :img1, null:false
      t.string :img2, null:false
      t.timestamps null: false
    end
  end
end
