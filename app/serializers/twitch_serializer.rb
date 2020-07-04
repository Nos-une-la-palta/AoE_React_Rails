class TwitchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :streamer, :twitch_img, :slug
end
