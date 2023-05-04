response = HTTParty.get('https://openaccess-api.clevelandart.org/api/artworks?limit=535')
artworksArray = JSON.parse(response.body)["data"]

Artwork.destroy_all

artworksArray.each do |obj| 
    title = obj['title']
    creation_date = obj['creation_date']
    artist = obj['creators']&.first&.dig('description')
    technique = obj['technique']
    url = obj['images']&.dig('web', 'url')
        
    Artwork.create(title: title, author: artist,  description: technique, url: url)
end


# title	"Nathaniel Hurd"
# creation_date	"c. 1765"
# technique	"oil on canvas"
# creators	
#     0	
#         id	3071
#         description	"William Merritt Chase (American, 1849–1916)"
