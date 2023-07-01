class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :event_type, :description, :banner_image, :date, :time
end
