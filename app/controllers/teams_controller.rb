class TeamsController < ApplicationController
	def index
		@teams = Team.all
	end
	def new
		@team = Team.new
		6.times { @team.teammates.build}
		@team.build_manager
		
	end
	def show
		@teams = Team.all		
	end
	
	def post_create
	
	end

	def create
	   
	   @team = Team.new(teamparams)
	   @team.save
	   loc = params[:team][:manager]
	   @team.create_manager(name: loc[:name], univercity: loc[:univercity])
	     
	   params[:team][:teammate].each{|teammate|
    	     @team.teammates.create(name: teammate[:name], level: teammate[:level])
	   }
	   
	   redirect_to champs_path
	   
	end

	private def teamparams
		params.require(:team).permit(:name_team)
	end
	

	
end
