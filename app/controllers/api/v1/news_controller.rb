module Api
    module V1
        class NewsController < ApplicationController
            def index
                news = News.all
                
                render json: NewsSerializer.new(news, options).serialized_json
            end

            def show
                news = News.find_by(slug: params[:slug])
                
                render json: NewsSerializer.new(news, options).serialized_json
            end

            def create
                news = News.new(news_params)

                if news.save
                    render json: NewsSerializer.new(news).serialized_json
                else
                    render json: { error: news.errors.messages }, status: 422
                end
            end

            def update
                news = News.find_by(slug: params[:slug])

                if news.update(news_params)
                    render json: NewsSerializer.new(news, options).serialized_json
                else
                    render json: { error: news.errors.messages }, status: 422
                end
            end

            def destroy
                news = News.find_by(slug: params[:slug])

                if news.destroy
                    head :no_content
                else
                    render json: { error: news.errors.messages }, status: 422
                end
            end
            

            private

            def news_params
                params.require(:news).permit(:title, :content)
            end

            def options
                @options ||= { include: %i[reviews]}
            end
        end
    end
end