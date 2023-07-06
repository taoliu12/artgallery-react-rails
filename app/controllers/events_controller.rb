class EventsController < ApplicationController
  def index
    limit = params[:limit]
    events = limit ? Event.order(date: :asc).limit(limit) : Event.order(date: :asc)  
    render json: EventSerializer.new(events)
  end
  
  
  def show
    event = Event.find(params[:id])
    render json: EventSerializer.new(event).serialized_json
  rescue ActiveRecord::RecordNotFound
    render json: {error: "Event not found"}, status: :not_found
  end
end
