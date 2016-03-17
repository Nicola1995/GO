class AddMessageToTeams < ActiveRecord::Migration
  def change
    add_column :teams, :message, :text
  end
end
