class EventSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :type, :description, :date, :time
end
  