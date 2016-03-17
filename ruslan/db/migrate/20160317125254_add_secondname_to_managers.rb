class AddSecondnameToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :secondname, :string
  end
end
