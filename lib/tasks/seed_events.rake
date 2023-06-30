

def generate_article(paragraphs, words_per_paragraph)
    article = []
  
    paragraphs.times do
      paragraph = Faker::Lorem.paragraph_by_chars(words_per_paragraph * 5, false)
      article << paragraph
    end
  
    article.join("\n\n")
end

namespace :db do
    desc 'Seed only events table'
    task seed_events: :environment do
      require 'faker'

Event.destroy_all

Event.create(
  title: "Rosetta Film Screening",
  event_type: "Film Screening",
  description: "Join us for a special screening of the film 'Rosetta.' The film follows the story of a young woman named Rosetta as she struggles to find a job and escape her challenging circumstances.",
  summary: "A gripping drama depicting Rosetta's determination to overcome her obstacles and find a better life.",
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

puts 'Events seeded successfully!'
end
end