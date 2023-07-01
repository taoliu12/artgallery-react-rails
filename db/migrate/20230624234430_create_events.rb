class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :event_type
      t.text :description
      t.date :date
      t.time :time
      t.text :summary

      t.timestamps
    end
  end
end
