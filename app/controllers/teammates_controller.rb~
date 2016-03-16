class TeammatesController < ApplicationController
	def new
	    @team = team.find(params[:team_id])
	    @teammate = @team.teammates.build

	end	
	def create
	    @teammate = Teammate.new(teammate_params)
	    @teammate.safe	   
	end
private
  def teammate_params
    params.require(:name).permit(:univercity, :kontakts, :level)
  end

end
