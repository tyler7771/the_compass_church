class Api::SermonsController < ApplicationController
  def index
    if  params[:params][:type] == 'series' && params[:params][:params] != 'Series'
      @sermons = Sermon.includes(:speaker).where(series: params[:params][:params] ).order(:date)
    elsif params[:params][:type] == 'speaker' && params[:params][:params] != 'Speaker'
      @sermons = Sermon.includes(:speaker).where(speaker: params[:params][:params] ).order(:date)
    elsif params[:params][:type] == 'book' && params[:params][:params] != 'Book'
      @sermons = Sermon.includes(:speaker).where(book: params[:params][:params] ).order(:date)
    else
      @sermons = Sermon.includes(:speaker).all.order(:date)
    end
    render :index
  end

  def show
    @sermon = Sermon.all.order(date: :desc)[0]
    render :show
  end

  def create
    @sermon = Sermon.new(sermon_params)
    @sermon.date = Date.parse(params[:sermon][:date])
    if @sermon.save
      render :show
    else
      render :json => { :errors => @sermon.errors.full_messages }, :status => 422
    end
  end

  def update
    @sermon = Sermon.find(params[:id])

    if @sermon.update_attributes(sermon_params)
      render :show
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
