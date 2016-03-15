class ManagersController < ApplicationController
	def new
	    @team = team.find(params[:team_id])
	    @manager = @team.manager.build

	end	
	def create
	    @manager = Manager.new(manager_params)
	    @teammate.safe	   
	end
private
  def manager_params
    params.require(:name).permit(:univercity, :kontakts, :position)
  end

end
