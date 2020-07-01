class CreateTwitches < ActiveRecord::Migration[6.0]
  def change
    create_table :twitches do |t|
      t.string :streamer
      t.string :url
      t.string :twitch_img
      t.string :slug

      t.timestamps
    end
  end
end
