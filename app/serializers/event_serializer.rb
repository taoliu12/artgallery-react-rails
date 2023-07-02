class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :event_type, :description, :summary, :banner_image, :date, :time
end
