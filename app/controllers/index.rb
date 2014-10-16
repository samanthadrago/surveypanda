# get '/' do
#   redirect '/posts'
# end

# get '/posts' do
#   @posts = Post.all
#   erb :index
# end

# get '/posts/:id/vote' do
#   post = Post.find(params[:id])
#   post.votes.create(value: 1)
#   # redirect "/posts"
#   { points: post.points, post_id: post.id}.to_json
# end

# delete '/posts/:id' do
#   post = Post.find(params[:id])
#   post_id = post.id
#   post.destroy
#   { post_id: post_id}.to_json
# end

# post '/posts' do
#   post = Post.create( title: params[:title],
#                       username: Faker::Internet.user_name,
#                       comment_count: rand(1000) )
#   erb :_post_container
#   { post_id: post.id, points: post.points, timestamp: post.time_since_creation, author: post.username, comments: post.comment_count }.to_json

# end

# get '/post/:id' do
#   @post = Post.find(params[:id])
#   erb :post
# end
