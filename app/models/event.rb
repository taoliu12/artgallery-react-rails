class Event < ApplicationRecord
    def formatted_time_range
        "#{start_time.strftime('%-I%P')} to #{end_time.strftime('%-I%P')}"
    end
end
