class NewsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :slug

  has_many :reviews
end
