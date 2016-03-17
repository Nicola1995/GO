class AddLastnameToTeammates < ActiveRecord::Migration
  def change
    add_column :teammates, :lastname, :string
  end
end
