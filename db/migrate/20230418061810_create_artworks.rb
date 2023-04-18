class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
