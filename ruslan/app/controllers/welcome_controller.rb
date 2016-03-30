class WelcomeController < ApplicationController
  def index
		
  end
  def rus
  	session[:lang] = 0;
  	redirect_to welcome_index_path;
  end

  def eng
  	session[:lang] = 1;
  	redirect_to welcome_index_path;
  end
end
