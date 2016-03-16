class AddTeamIdToTeammates < ActiveRecord::Migration
  def change
    add_column :teammates, :team_id, :integer
  end
end
