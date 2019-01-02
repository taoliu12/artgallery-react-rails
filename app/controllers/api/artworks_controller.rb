class Api::ArtworksController < ApplicationController
    def index
        @artworks = Artwork.all
        render json: @artworks
    end

    def show
        @artwork = Artwork.find(params[:id])
        render json: @artwork
    end

    def create
        
    end

    def update
        
    end

    def destroy
        
    end
end
