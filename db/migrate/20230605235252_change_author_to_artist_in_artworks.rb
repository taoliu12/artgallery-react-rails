class ChangeAuthorToArtistInArtworks < ActiveRecord::Migration[6.1]
  def change
    rename_column :artworks, :author, :artist
  end
end
