class Api::SpeakersController < ApplicationController
  def index
    @speakers = Speaker.all
    render :index
  end

  def create
    @speaker = Speaker.new(speaker_params)

    if @speaker.save
      render :index
    else
      render :json => { :errors => @speaker.errors.full_messages }, :status => 422
    end
  end

  private
  def speaker_params
    params.require(:speaker).permit(:name)
  end
end
