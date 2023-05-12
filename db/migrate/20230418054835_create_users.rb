class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, if_not_exists: true do |t|
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
