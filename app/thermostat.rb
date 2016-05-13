

require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    erb :index
  end

  get '/session' do
    content_type :json
    return_value = {temperature: (session[:temperature] ||= 20),
                    city: (session[:city])}
    return_value.to_json
  end

  post '/session' do
    session[:temperature] = params[:temperature].to_i
    session[:city] = params[:city]
  end

  run! if app_file == $0
end
