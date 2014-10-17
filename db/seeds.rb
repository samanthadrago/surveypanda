module Seed

  def self.run
  	10.times do 
  		user = User.create( name: Faker::Name.name, username: Faker::Internet.user_name, password: 'password')
    20.times do
      survey = Survey.create( title: Faker::Company.catch_phrase,
                   user_id: rand(10))

      end

    end
  end

end