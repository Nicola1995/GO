class TeamsController < ApplicationController
	http_basic_authenticate_with name: "lazarev", password: "1234567", :only => [:addel, :edit, :destroy, :create, :update]

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
		@jopa	
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
 	  
  	  redirect_to teams_addel_path
 	 end

	def post_create
	
	end
	
	def update
		@team = Team.find(params[:id])
		@team.update(teamparams)
		redirect_to teams_addel_path	
	end
	
	def create
	 
	   qw = 1;
	   if qw == 0
	      @team = Team.new(teamparams,check: false)
	      6.times { @team.teammates.build}
	      @team.build_manager;
	      @team.manager.name = "rhzhzzzzzzzzz";
	      render 'new';
	      return;	
	   end	
	   @team = Team.new(teamparams,check: false)
	   @team.save
	
	   loc = params[:team][:manager]
	  
	
	   @team.create_manager(name: loc[:name],secondname: loc[:secondname],familyname: loc[:familyname] , univercity: loc[:univercity], kontakts: loc[:kontakts], position: loc[:position], email: loc[:email])
	     
	   params[:team][:teammate].each{|teammate|
           if teammate[:name] != "" 
@team.teammates.create(name: teammate[:name],secondname: teammate[:secondname],lastname: teammate[:lastname], level: teammate[:level],email: teammate[:email],kontakts: teammate[:kontakts])	
	    end;
	   }

	   if qw == 1
             redirect_to champs_path;
	   else 
	     render 'new';
	   end;
	end

	private def teamparams
		params.require(:team).permit(:name_team, :check, :message)
	end
	

	
end
