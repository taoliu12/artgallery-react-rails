require 'rails_helper'

RSpec.describe "API Artworks", type: 'request' do
    describe "POST /artworks" do
      it "Creates post request" do
        post '/artworks', params: { artwork: { 
            title: 'Hello, world! rspec',
            author: 'Hello, world! rspec',
            description: 'Hello, world! rspec',
            url: 'Hello, world! rspec',
             } }
        expect(response).to have_http_status(:created)
      end
    end
  end