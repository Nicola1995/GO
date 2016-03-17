class AddSecondnameToTeammates < ActiveRecord::Migration
  def change
    add_column :teammates, :secondname, :string
  end
end
