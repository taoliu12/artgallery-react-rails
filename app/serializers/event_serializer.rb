class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :event_type, :description, :date, :time
end
