class AddPositionToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :position, :string
  end
end
