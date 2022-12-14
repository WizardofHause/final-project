class CreateMemories < ActiveRecord::Migration[7.0]
  def change
    create_table :memories do |t|
      t.string :title
      t.string :type
      t.string :status
      t.string :main_img
      t.string :description
      t.integer :likes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
