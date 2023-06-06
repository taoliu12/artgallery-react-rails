# spec/models/artwork_spec.rb

require 'rails_helper'

RSpec.describe Artwork, type: :model do
  it "is valid with valid attributes" do
    artwork = Artwork.new(
      title: "Sample Title",
      artist: "Sample artist",
      description: "Sample Description",
      url: "http://example.com"
    )
    expect(artwork).to be_valid
  end

  # it "is not valid without a title" do
  #   artwork = Artwork.new(title: nil)
  #   expect(artwork).to_not be_valid
  # end

  # it "is not valid without an artist" do
  #   artwork = Artwork.new(artist: nil)
  #   expect(artwork).to_not be_valid
  # end

  # it "is not valid without a description" do
  #   artwork = Artwork.new(description: nil)
  #   expect(artwork).to_not be_valid
  # end

  # it "is not valid without a URL" do
  #   artwork = Artwork.new(url: nil)
  #   expect(artwork).to_not be_valid
  # end
end
