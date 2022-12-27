class AddDateToMemories < ActiveRecord::Migration[7.0]
  def change
    add_column :memories, :date, :date
  end
end
