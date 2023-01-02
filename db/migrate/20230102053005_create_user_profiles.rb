class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.date :dob
      t.string :pob
      t.string :current_city
      t.string :family
      t.string :interests
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
