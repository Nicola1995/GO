class CreateManagers < ActiveRecord::Migration
  def change
    create_table :managers do |t|
	t.string :name
 	t.string :univercity
	t.text :kontakts
      t.timestamps null: false
    end
  end
end
