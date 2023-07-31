namespace :db do
  desc "Seed only artworks table"
  task seed_artworks: :environment do
    Artwork.destroy_all
    response = HTTParty.get("https://openaccess-api.clevelandart.org/api/artworks?limit=1000")
    artworksArray = JSON.parse(response.body)["data"]

    artworksArray.each do |obj|
      title = obj["title"]
      creation_date = obj["creation_date"]
      artist = obj["creators"]&.first&.dig("description")
      technique = obj["technique"]
      url = obj["images"]&.dig("web", "url")

      Artwork.create(title: title, artist: artist, description: technique, url: url) if url
    end

    puts "Artworks seeded successfully!"
  end
end
