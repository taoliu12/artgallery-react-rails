class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks, if_not_exists: true do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
