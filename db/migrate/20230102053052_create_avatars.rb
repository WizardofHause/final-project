class CreateAvatars < ActiveRecord::Migration[7.0]
  def change
    create_table :avatars do |t|
      t.belongs_to :user_profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
