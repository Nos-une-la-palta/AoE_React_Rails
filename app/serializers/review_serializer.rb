class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :news_id
end
