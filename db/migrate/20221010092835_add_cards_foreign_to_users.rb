class AddCardsForeignToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :cards, :users, foreign_key: true
  end
end
