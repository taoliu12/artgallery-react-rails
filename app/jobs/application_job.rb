class ApplicationJob < ActiveJob::Base
    def perform
        puts 'hello'
        logger.info 'hello'
    end
end
