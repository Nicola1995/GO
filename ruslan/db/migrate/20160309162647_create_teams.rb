class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
	t.string :name_team
	t.boolean :check
      t.timestamps null: false
    end
  end
end
