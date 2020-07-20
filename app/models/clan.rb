class Clan < ApplicationRecord
    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
end
