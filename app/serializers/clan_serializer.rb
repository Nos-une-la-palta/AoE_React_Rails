class ClanSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :slug
end
