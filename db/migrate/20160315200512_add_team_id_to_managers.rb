class AddTeamIdToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :team_id, :integer
  end
end
