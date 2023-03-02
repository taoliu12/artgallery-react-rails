response = HTTParty.get('https://openaccess-api.clevelandart.org/api/artworks?limit=35')
artworksArray = JSON.parse(response.body)["data"]

artworksArray.each do |obj|
    if obj['images'] && obj['images']['web'] && obj['images']['web']['url']
        Artwork.create(title: 'Yoda', author: 'Joe',  description: "Homage to my favorite hero", url: obj['images']['web']['url'])
    end
end

# Artwork.create(title: 'Luke', author: 'Joe', description: "Homage to my favorite hero", url: Faker::LoremFlickr.image(size: '600x600', search_terms: [], match_all: false))
# Artwork.create(title: 'Yoda', author: 'Joe',  description: "Homage to my favorite hero", url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13bf07c6-6dfe-41ca-9c9b-d742d39e774c/df9vii8-e620bf8e-481c-42e5-a834-212f01060aba.png/v1/fill/w_1920,h_3037,q_80,strp/ningguang_by_istoma_df9vii8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAzNyIsInBhdGgiOiJcL2ZcLzEzYmYwN2M2LTZkZmUtNDFjYS05YzliLWQ3NDJkMzllNzc0Y1wvZGY5dmlpOC1lNjIwYmY4ZS00ODFjLTQyZTUtYTgzNC0yMTJmMDEwNjBhYmEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Nb_bnKcqRgaxK7qg51lbCzZol4T_T3b-y01oiWF3RWU')

# Artwork.create(title: 'Yoda', author: 'Joe',  description: "Homage to my favorite hero", url: 'https://i.pinimg.com/originals/b3/7d/fb/b37dfb28dcb6063a81288dadbc01a63a.jpg')
# Artwork.create(title: 'Luke', author: 'Joe', description: "Homage to my favorite hero", url: 'https://i.imgur.com/faCkQR2.jpg')
# Artwork.create(title: 'Yoda', author: 'Joe',  description: "Homage to my favorite hero", url: 'https://i.pinimg.com/originals/b3/7d/fb/b37dfb28dcb6063a81288dadbc01a63a.jpg')
# Artwork.create(title: 'Luke', author: 'Joe', description: "Homage to my favorite hero", url: 'https://i.imgur.com/faCkQR2.jpg')
# Artwork.create(title: 'Yoda', author: 'Joe',  description: "Homage to my favorite hero", url: 'https://i.pinimg.com/originals/b3/7d/fb/b37dfb28dcb6063a81288dadbc01a63a.jpg')
# Artwork.create(title: 'Han', author: 'Joe',  description: "Homage to my favorite hero", url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6be1286-1b5b-406e-a4e6-ba82886c3597/d7v1fqx-fd123bf2-08ec-42d0-8536-f460c4bac3fc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2YmUxMjg2LTFiNWItNDA2ZS1hNGU2LWJhODI4ODZjMzU5N1wvZDd2MWZxeC1mZDEyM2JmMi0wOGVjLTQyZDAtODUzNi1mNDYwYzRiYWMzZmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CDcWeIW5NBYLl57zJfTYq3ricZDrTD_2qLhxUBj-HCs')

