class Api::SermonsController < ApplicationController
  def index
    @sermons = Sermon.all
    render :index
  end

  def create
    @sermon = Sermon.new(sermon_params)
    @sermon.date = Date.parse(sermon_params.date)
    debugger
    if @sermon.save
      render :index
    else
      render :json => { :errors => @sermon.errors.full_messages }, :status => 422
    end
  end

  def update
    @sermon = Sermon.find(params[:id])

    if @sermon.update_attributes(sermon_params)
      render :index
    else
      render :json => { :errors => @sermon.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @sermon = Sermon.find(params[:id])
    @sermon.destroy
    render :json => @sermon
  end

  private
  def sermon_params
    params.require(:sermon)
    .permit(:title, :url, :image, :speaker_id, :series_id, :date, :book, :verse)
  end
end
