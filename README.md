# Art Gallery

The project is a react app that mimics a website for an art gallery or museum. It allows users to browser images and events.

[Live Demo](https://artgallery-react-rails.onrender.com) - Initial loading can take up to 30 seconds due to render.io's hosting free tier.

## Installation Instructions

#### Setup Rails API backend

Clone this repo, and then navigate to the repo directory in your terminal.

Run `bundle install` to install all gem dependencies.

Run all rake migrations with `rake db:migrate` and `rake db:seed`

Start up a rails server on port 3001: `rails s -p 3001`

#### Setup React server frontend

Change directories into client folder: `cd client`

Run `npm install` to install all package dependencies

Start up React server and enjoy the app! `npm start`


## Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

Available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
