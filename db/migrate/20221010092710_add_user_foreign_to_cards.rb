class AddUserForeignToCards < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :cards, foreign_key: true
  end
end
