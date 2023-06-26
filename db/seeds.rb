response = HTTParty.get('https://openaccess-api.clevelandart.org/api/artworks?limit=1000')
artworksArray = JSON.parse(response.body)["data"]

def generate_essay(words)
  essay = []
  
  while essay.size < words
    paragraph = Faker::Lorem.paragraphs.join(' ')
    words_remaining = words - essay.size
    
    if paragraph.split.size <= words_remaining
      essay << paragraph
    else
      essay << paragraph.split[0...words_remaining].join(' ')
    end
  end
  
  essay.join(' ')
end

Artwork.destroy_all
Event.destroy_all

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

20.times do
  Event.create(
    title: Faker::Lorem.sentence,
    event_type: Faker::Lorem.word,
    summary: Faker::Lorem.sentence,
    description: generate_essay(1000),
    date: Faker::Date.between(from: Date.today, to: 1.month.from_now),
    time: Faker::Time.between(from: Time.now.beginning_of_day, to: Time.now.end_of_day)
  )
end