module Api
    module V1
        class TwitchesController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                twitches = Twitch.all
                
                render json: TwitchSerializer.new(twitches).serialized_json
            end

            def show
                twitch = Twitch.find_by(slug: params[:slug])
                
                render json: TwitchSerializer.new(twitch).serialized_json
            end

            def create
                twitch = Twitch.new(twitches_params)

                if twitch.save
                    render json: TwitchSerializer.new(twitch).serialized_json
                else
                    render json: { error: twitch.errors.messages }, status: 422
                end
            end

            def update
                twitch = Twitch.find_by(slug: params[:slug])

                if twitch.update(twitches_params)
                    render json: Twitch.new(twitch).serialized_json
                else
                    render json: { error: twitch.errors.messages }, status: 422
                end
            end

            def destroy
                twitch = Twitch.find_by(slug: params[:slug])

                if twitch.destroy
                    head :no_content
                else
                    render json: { error: twitch.errors.messages }, status: 422
                end
            end
            

            private

            def twitches_params
                params.require(:twitch).permit(:streamer, :twitch_img)
            end
        end
    end
end