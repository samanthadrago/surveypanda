class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :username

      t.timestamps
    end

    create_table :surveys do |t|
      t.string :title
      t.references :user

      t.timestamps
    end

    create_table :questions do |t|
      t.string :text
      t.references :survey

      t.timestamps
    end

    create_table :choices do |t|
      t.string :text
      t.references :question

      t.timestamps
    end

    create_table :responses do |t|
      t.references :choice
      t.references :user

      t.timestamps
    end
  end
end
