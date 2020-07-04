class Twitch < ApplicationRecord
    before_create :slugify

    def slugify
        self.slug = streamer.parameterize
    end
end
