class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title 
      t.string :author
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
