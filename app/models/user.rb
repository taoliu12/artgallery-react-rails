class User < ApplicationRecord
    has_secure_password

    has_many :artworks
    has_many :submitted_artworks, class_name: "Artwork", foreign_key: 'artist_id'
    has_many :favorite_artworks, through: :favorites, source: :artwork

    validates :username,  presence: true, uniqueness: {case_sensitive: :false}

    def formatted_created_at
        # created_at.strftime('%B %e, %Y at %l:%M %p')
        created_at.strftime('%B %e, %Y')
    end
end
