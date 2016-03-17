class AddFamilynameToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :familyname, :string
  end
end
