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
  
  essay.join("\n\n") # Join paragraphs with double newline characters
end

Artwork.destroy_all
