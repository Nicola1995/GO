class AddEmailToTeammates < ActiveRecord::Migration
  def change
    add_column :teammates, :email, :string
  end
end
