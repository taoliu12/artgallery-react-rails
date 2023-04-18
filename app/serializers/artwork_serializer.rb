class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist,  :description, :url
end
