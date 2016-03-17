class TeamsController < ApplicationController
	def index
		@teams = Team.all
	end
	
	def addel
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
	
	def edit
	    @team = Team.find(params[:id])	
	end
	
	def destroy
  	  @team = Team.find(params[:id])
  	  @team.destroy
 
  	  redirect_to teams_path
 	 end

	def post_create
	
	end
	
	def update
		@team = Team.find(params[:id])
		@team.update(teamparams)
		redirect_to teams_addel_path	
	end
	
	def create
	   
	   @team = Team.new(teamparams,check: false)
	   @team.save
	   loc = params[:team][:manager]
	   @team.create_manager(name: loc[:name],lastname: loc[:lastname],familyname: loc[:familyname] , univercity: loc[:univercity], kontakts: loc[:kontakts], position: loc[:position], email: loc[:email])
	     
	   params[:team][:teammate].each{|teammate|
    	     @team.teammates.create(name: teammate[:name],familyname: teammate[:familyname],lastname: teammate[:lastname], level: teammate[:level],email: teammate[:email])
	   }
	   
	   redirect_to champs_path
	   
	end

	private def teamparams
		params.require(:team).permit(:name_team, :check, :message)
	end
	

	
end
