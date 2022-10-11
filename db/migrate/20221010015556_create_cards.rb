class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :last4
      t.integer :exp_year
      t.integer :exp_month

      t.timestamps
    end
  end
end
