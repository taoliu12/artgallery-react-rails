class Artwork < ApplicationRecord
  scope :newest_to_oldest, -> { order("created_at DESC") }
end
