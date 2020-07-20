module Api
    module V1 
        class ClansController < ApplicationController
            protect_from_forgery with: :null_session

            def index 
                clans = Clan.all

                render json: ClanSerializer.new(clans).serialized_json
            end

            def show 
                clan = Clan.find_by(slug: params[:slug])

                render json: ClanSerializer.new(clan).serialized_json
            end

            def create
                clan = Clan.new(clan_params)

                if clan.save
                    render json: ClanSerializer.new(clan).serialized_json
                else 
                    render json: {error: clan.errors.messages}, status: 422
                end   
            end

            def update
                clan = Clan.find_by(slug: params[:slug])

                if clan.update(clan_params)
                    render json: ClanSerializer.new(clan).serialized_json
                else 
                    render json: {error: clan.errors.messages}, status: 422
                end   
            end

            def destroy
                clan = Clan.find_by(slug: params[:slug])

                if clan.destroy
                    head :no_content
                else 
                    render json: {error: clan.errors.messages}, status: 422
                end   
            end
            

            
            private 

            def clan_params
                params.require(:clan).permit(:name, :image)
            end
        end
    end
end 