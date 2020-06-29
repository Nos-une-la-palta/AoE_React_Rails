class CreateNews < ActiveRecord::Migration[6.0]
  def change
    create_table :news do |t|
      t.string :title
      t.string :content
      t.string :slug

      t.timestamps
    end
  end
end
