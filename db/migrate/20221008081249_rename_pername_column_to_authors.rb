class RenamePernameColumnToAuthors < ActiveRecord::Migration[6.1]
  def change
    rename_column :authors, :pername, :penname
  end
end
