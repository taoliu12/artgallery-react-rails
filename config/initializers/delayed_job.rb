Delayed::Worker.destroy_failed_jobs = false
Delayed::Worker.sleep_delay = 60
Delayed::Worker.max_attempts = 3
Delayed::Worker.max_run_time = 5.minutes
Delayed::Worker.delay_jobs = !Rails.env.test?


Delayed::Job.enqueue(ApplicationJob.new, run_at: 1.second.from_now, queue: 'default', priority: 0)
