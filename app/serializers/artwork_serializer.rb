class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :author,  :description, :url
end
