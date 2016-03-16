class CreateTeammates < ActiveRecord::Migration
  def change
    create_table :teammates do |t|
	t.string :level
	t.string :name
	t.text :kontakts
		
      t.timestamps null: false
    end
  end
end
