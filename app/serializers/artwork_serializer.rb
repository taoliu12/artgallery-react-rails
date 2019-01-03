class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url
end
