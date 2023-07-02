def generate_article(paragraphs, words_per_paragraph)
  article = []

  paragraphs.times do
    paragraph = Faker::Lorem.paragraph_by_chars(words_per_paragraph * 5, false)
    article << paragraph
  end

  article.join("\n")
end

#rake db:seed_events
namespace :db do
  desc "Seed only events table"
  task seed_events: :environment do
    require "faker"

    Event.destroy_all

    Event.create(
      title: "Animals in Russian Fairy Tales",
      event_type: "Gallery Exhibition",
      summary: " Delve into the enchanting world of Russian fairy tales as you encounter a captivating collection showcasing the prominent role of animals in these beloved stories.",
      description: "This exhibition presents a diverse array of artworks, illustrations, and artifacts that bring to life the enchanting characters from Russian fairy tales. From cunning foxes and wise owls to mystical wolves and loyal horses, the animal kingdom takes on anthropomorphic qualities, captivating both young and old alike. These beloved creatures embody virtues, vices, and a touch of mysticism, serving as metaphors for human traits and carrying profound symbolism deeply rooted in Russian culture.\n
      Discover the cunning wit of the sly fox, known for its cleverness and ability to outsmart its adversaries. Encounter the magical powers of the mystical creatures that inhabit the forests and lakes, intertwining the natural and supernatural realms. Marvel at the courage and loyalty of the animal companions who aid the heroes and heroines in their quests and trials.\n
      Through vivid illustrations and interactive displays, the exhibit offers a glimpse into the imaginative world of folklore that has captivated generations. Delve into the tales of Baba Yaga, the Firebird, and the Snow Maiden, where animals play integral roles in shaping the narrative and imparting moral lessons.\n
      As you explore the exhibition, you will gain a deeper understanding of the cultural significance of animals in Russian folklore. Discover the parallels between the animal kingdom and human nature, as well as the values and lessons imparted through these timeless tales.",
      banner_image: "https://eternamenta.files.wordpress.com/2019/02/d182d0b5d180d0b5d0bcd0bed0ba.jpg",
      date: Date.new(2023, 4, 19),
      time: Time.new(2023, 6, 15, 19, 30)
    )
    Event.create(
      title: "Sculptures of Spain",
      event_type: "Gallery Exhibition",
      summary: "Explore the captivating world of Spanish sculptures, showcasing the rich artistic heritage and diverse styles of Spain.",
      description: "Step into the realm of Spanish sculptures and immerse yourself in the profound beauty and artistic expressions of this captivating exhibition. This exhibit brings together a curated collection of sculptural masterpieces that span centuries of Spanish art history.\n
      From classical and Renaissance-inspired works to contemporary and avant-garde creations, this exhibition offers a comprehensive overview of the diverse styles, themes, and techniques employed by Spanish sculptors. Marvel at the exquisite craftsmanship and attention to detail evident in each sculpture, as they come to life in three-dimensional form.",
      banner_image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7ed45a4c-e637-11eb-a821-58982b1c936d.jpg?crop=4204%2C2803%2C0%2C0",
      date: Date.new(2023, 4, 28),
      time: Time.new(2023, 6, 15, 19, 30)
    )

    # Event.create(
    #   title: "Modern Korean Cuisine in Photos",
    #   event_type: "Gallery Exhibition",
    #   summary: "Embark on a visual journey through the rich architectural heritage of ancient Korea, captured beautifully in a captivating photography exhibition.",
    #   description: "Immerse yourself in the enchanting world of ancient Korean architecture through the lens of this mesmerizing photography exhibition. These photos invite you to explore the intricate details, timeless beauty, and cultural significance of Korea's architectural treasures.
    #   \n
    #   Through a curated collection of stunning photographs, this exhibition showcases a diverse range of architectural marvels, spanning from the grand palaces and temples to the humble traditional houses and pavilions. Each photograph offers a glimpse into the architectural styles, construction techniques, and artistic aesthetics that have defined Korean architecture throughout history.
    #   \n
    #   Marvel at the graceful curves of the traditional tiled roofs, adorned with intricate decorative elements that symbolize prosperity and protection. Experience the serene ambiance of ancient Buddhist temples, where the harmony between nature and architectural design creates a spiritual atmosphere. Encounter the majestic gates and fortified walls that once guarded palaces, reflecting the grandeur and power of Korean dynasties.",
    #   banner_image: "https://cdn.mos.cms.futurecdn.net/wZZhrrwcePVMeFra4WjCu3.jpg",
    #   date: Date.new(2023, 6, 15),
    #   time: Time.new(2023, 6, 15, 19, 30)
    # )
    Event.create(
      title: "19th century Chinese silk paintings",
      event_type: "Gallery Exhibition",
      summary: "Step into a world of elegance and grace as you explore the enchanting realm of 19th century Chinese silk paintings.",
      description: "This extraordinary exhibition presents a curated selection of artworks that exemplify the refined artistry and cultural significance of this era. Each painting tells a story, capturing the essence of Chinese history, mythology, and natural beauty.\n
      Experience the delicate brushwork and vibrant colors that adorn these intricately woven silk canvases. Marvel at the meticulous details that bring landscapes, figures, and wildlife to life with a sense of harmony and balance. From traditional landscapes depicting misty mountains and serene rivers to intimate portrayals of daily life and mythical creatures, these artworks offer a glimpse into a bygone era.\n
      As you delve deeper into the exhibition, uncover the artistic techniques and symbolism employed by the skilled artists of the time. Gain a deeper appreciation for the cultural context and historical significance of these artworks, which served as a reflection of societal values and beliefs.\n
      Whether you are an art enthusiast, history buff, or simply curious about the beauty of Chinese art, this exhibition invites you to embark on a journey through time and immerse yourself in the captivating world of Chinese 19th century silk paintings. Don't miss this rare opportunity to witness the exquisite craftsmanship and artistic mastery that has stood the test of time.",
      banner_image: "https://www.artisoo.com/images/chinesepainting3/CNAG235280.jpg",
      date: Date.new(2023, 5, 15),
      time: Time.new(2023, 6, 15, 19, 30)
    )
    Event.create(
      title: "Hockney: Figures in Space",
      event_type: "Gallery Exhibition",
      description: "Dive into the extraordinary world of David Hockney's artistry at the \"Hockney: Figures in Space\" exhibition. This captivating showcase presents a mesmerizing collection of Hockney's works, focusing on his unique portrayal of human figures within dynamic spatial settings. With his vibrant color palettes and innovative use of perspective, Hockney's artworks transport viewers into immersive environments where figures come to life. From bustling city scenes to tranquil landscapes, Hockney's compositions capture the essence of movement and energy, inviting viewers to embark on a visual journey through his artistic vision. Immerse yourself in the intricacies of Hockney's brushstrokes and explore the interplay between figures and the surrounding space. \"Hockney: Figures in Space\" offers a profound and thought-provoking experience, allowing visitors to appreciate the brilliance of one of the most celebrated artists of our time. Don't miss the opportunity to witness Hockney's captivating fusion of figures and space, offering a fresh perspective on the human form in relation to the world around us.",
      summary: "An awe-inspiring exhibition that showcases the remarkable works of David Hockney, offering a captivating exploration of human figures within vibrant and dynamic spatial compositions.",
      banner_image: "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2020/10/06/Style/Images/gwif-hockney1011.jpg",
      date: Date.new(2023, 6, 11),
      time: Time.new(2023, 6, 15, 19, 30)
    )
    Event.create(
      title: "Monet: Water Lilies",
      event_type: "Gallery Exhibition",
      description: " Immerse yourself in the captivating world of Claude Monet's iconic lily pond paintings at the Monet Lilies Art Gallery Exhibition. This extraordinary exhibition brings together a remarkable collection of Monet's masterpieces, where he effortlessly captured the enchanting beauty of water lilies and their reflections. Through his vibrant brushstrokes and innovative use of light and color, Monet's paintings transport viewers to the serene and tranquil atmosphere of his beloved Giverny garden. Experience the artist's unparalleled talent and the timeless allure of impressionistic art as you explore the exquisite details and mesmerizing compositions of these remarkable artworks. Don't miss this opportunity to witness the profound impact of Monet's lilies on the art world and revel in the harmonious blend of nature and artistry that defines his extraordinary body of work.",
      summary: "The Monet Lilies Art Gallery Exhibition showcases a breathtaking collection of Claude Monet's iconic lily pond paintings, capturing the beauty of nature and impressionistic art.",
      banner_image: "https://www.claude-monet.com/images/paintings/water-lilies-claude-monet.jpg",
      date: Date.new(2023, 8, 15),
      time: Time.new(2023, 6, 15, 19, 30)
    )
    Event.create(
      title: "Rosetta",
      event_type: "Film Screening",
      description: "Join us for a special screening of the film 'Rosetta.' The film follows the story of a young woman named Rosetta as she struggles to find a job and escape her challenging circumstances.",
      summary: "A gripping drama depicting Rosetta's determination to overcome her obstacles and find a better life.",
      banner_image: "https://fr.web.img5.acsta.net/medias/nmedia/18/64/04/29/18747734.jpg",
      date: Date.new(2023, 11, 15),
      time: Time.new(2023, 6, 15, 19, 30)
    )

    # 10.times do
    #   Event.create(
    #     title: Faker::Lorem.sentence,
    #     event_type: Faker::Lorem.word,
    #     summary: Faker::Lorem.sentence,
    #     description: generate_article(3, 300),
    #     date: Faker::Date.between(from: Date.today, to: 1.month.from_now),
    #     time: Faker::Time.between(from: Time.now.beginning_of_day, to: Time.now.end_of_day)
    #   )
    # end

    puts "Events seeded successfully!"
  end
end
