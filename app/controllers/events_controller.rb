class EventsController < ApplicationController
  def index
    events = Event.all
    render json: EventSerializer.new(events).serialized_json
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  rescue ActiveRecord::RecordNotFound
    render json: {error: "Event not found"}, status: :not_found
  end
end
