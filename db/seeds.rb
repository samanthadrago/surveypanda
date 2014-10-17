module Seed

  def self.run
  	10.times do 
  		user = User.create( name: Faker::Name.name, username: Faker::Internet.user_name, password: 'password')
    end
    20.times do
      survey = Survey.create( title: Faker::Company.catch_phrase,
                   user_id: rand(10))
    end
    Survey.all.each do |survey| 
    	3.times do 
    		survey.questions << Question.create(text: Faker::Company.catch_phrase)
    	end
    end
    Question.all.each do |question|
    	4.times do 
    		question.choices << Choice.create(text: Faker::Company.catch_phrase)
    	end
    end
  end
end