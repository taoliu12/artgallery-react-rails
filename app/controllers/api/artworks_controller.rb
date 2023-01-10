class Api::ArtworksController < ApplicationController
    def index
        @artworks = Artwork.newest_to_oldest
        render json: @artworks
    end

    def show
        @artwork = Artwork.find(params[:id])
        render json: @artwork
    end

    def create
        @artwork = Artwork.new(artwork_params)
        if @artwork.save
            render json: @artwork
        else
            render json: { message: 'Error' }, status: 400
        end
    end

    def update
        @artwork = Artwork.find(params[:id])
        if @artwork.update(artwork_params)
            render json: @artwork
        else
            render json: { message: 'Error' }, status: 400
        end
    end

    def destroy
        @artwork = Artwork.find(params[:id])
        if @artwork.destroy
            render json: 204
        else
            render json: { message: 'Error' }, status: 400
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :description, :url)
    end
end
