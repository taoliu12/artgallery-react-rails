def generate_article(paragraphs, words_per_paragraph)
  article = []

  paragraphs.times do
    paragraph = Faker::Lorem.paragraph_by_chars(words_per_paragraph * 5, false)
    article << paragraph
  end

  article.join("\n\n")
end

#rake db:seed_events
namespace :db do
  desc "Seed only events table"
  task seed_events: :environment do
    require "faker"

    Event.destroy_all

    Event.create(
      title: "Monet: Water Lilies",
      event_type: "Gallery Exhibition",
      description: " Immerse yourself in the captivating world of Claude Monet's iconic lily pond paintings at the Monet Lilies Art Gallery Exhibition. This extraordinary exhibition brings together a remarkable collection of Monet's masterpieces, where he effortlessly captured the enchanting beauty of water lilies and their reflections. Through his vibrant brushstrokes and innovative use of light and color, Monet's paintings transport viewers to the serene and tranquil atmosphere of his beloved Giverny garden. Experience the artist's unparalleled talent and the timeless allure of impressionistic art as you explore the exquisite details and mesmerizing compositions of these remarkable artworks. Don't miss this opportunity to witness the profound impact of Monet's lilies on the art world and revel in the harmonious blend of nature and artistry that defines his extraordinary body of work.",
      summary: "The Monet Lilies Art Gallery Exhibition showcases a breathtaking collection of Claude Monet's iconic lily pond paintings, capturing the beauty of nature and impressionistic art.",
      banner_image: "https://www.claude-monet.com/images/paintings/water-lilies-claude-monet.jpg",
      date: Date.new(2023, 6, 15),
      time: Time.new(2023, 6, 15, 19, 30)
    )
    Event.create(
      title: "Rosetta",
      event_type: "Film Screening",
      description: "Join us for a special screening of the film 'Rosetta.' The film follows the story of a young woman named Rosetta as she struggles to find a job and escape her challenging circumstances.",
      summary: "A gripping drama depicting Rosetta's determination to overcome her obstacles and find a better life.",
      banner_image: "https://fr.web.img5.acsta.net/medias/nmedia/18/64/04/29/18747734.jpg",
      date: Date.new(2023, 6, 15),
      time: Time.new(2023, 6, 15, 19, 30)
    )

    10.times do
      Event.create(
        title: Faker::Lorem.sentence,
        event_type: Faker::Lorem.word,
        summary: Faker::Lorem.sentence,
        description: generate_article(3, 300),
        date: Faker::Date.between(from: Date.today, to: 1.month.from_now),
        time: Faker::Time.between(from: Time.now.beginning_of_day, to: Time.now.end_of_day)
      )
    end

    puts "Events seeded successfully!"
  end
end
