class ArtworksController < ApplicationController
    include Pagy::Backend

    def index
      if params[:search].blank?
        # @artworks = Artwork.newest_to_oldest             
        @artworks = Artwork.all            
      else         
        @artworks = Artwork.where("lower(title) LIKE ? OR lower(artist) LIKE ?", "%#{params[:search].downcase.strip}%", "%#{params[:search].downcase.strip}%")
      end
        @pagy, @pagy_artworks = pagy(@artworks, items: [@artworks.count, 20].min, page: params[:page])    
        render json: @pagy_artworks
    end

    def show
        @artwork = Artwork.find(params[:id])
        render json: @artwork
    end

    def create
        @artwork = Artwork.new(artwork_params)
        if @artwork.save
            render json: @artwork, status: :created
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
        params.require(:artwork).permit(:title, :artist, :description, :url)
    end
end
