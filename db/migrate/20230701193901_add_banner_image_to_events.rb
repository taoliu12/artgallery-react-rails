class AddBannerImageToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :banner_image, :string
  end
end
