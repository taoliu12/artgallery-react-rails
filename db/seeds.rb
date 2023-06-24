response = HTTParty.get('https://openaccess-api.clevelandart.org/api/artworks?limit=1000')
artworksArray = JSON.parse(response.body)["data"]

Artwork.destroy_all

artworksArray.each do |obj| 
    title = obj['title']
    creation_date = obj['creation_date']
    artist = obj['creators']&.first&.dig('description')
    technique = obj['technique']
    url = obj['images']&.dig('web', 'url')
        
    Artwork.create(title: title, artist: artist,  description: technique, url: url) if url
end

Event.create(
  title: "Rosetta Film Screening",
  event_type: "Film Screening",
  description: "Join us for a special screening of the film 'Rosetta.' The film follows the story of a young woman named Rosetta as she struggles to find a job and escape her challenging circumstances.",
  summary: "A gripping drama depicting Rosetta's determination to overcome her obstacles and find a better life.",
  date: Date.new(2023, 6, 15),
  time: Time.new(2023, 6, 15, 19, 30)
)
