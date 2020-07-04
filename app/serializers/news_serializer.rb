class NewsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :slug, :avg_score

  has_many :reviews
end
