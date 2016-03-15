class TeamsController < ApplicationController
	def index
		@teams = Team.all
	end
	def new
		@team = Team.new
	end
	def show
		@teams = Team.all		
	end
	
	def post_create
	
	end

	def create
	   
	   @team = Team.new(teamparams)
	   @team.save
	   @team.manager.create(params[:manager])
	  
	   params[:teammates].each{|teammate|
    	     @team.teammates.create(teammate)
	   }
	   
	   redirect_to champs
	   
	end

	private def teamparams
		params.require(:team)
	end
	

	
end
