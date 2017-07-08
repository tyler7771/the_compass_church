class Api::SeriessController < ApplicationController
  def index
    @seriess = Series.all
    render :index
  end

  def create
    @series = Series.new(series_params)

    if @series.save
      render :show
    else
      render :json => { :errors => @series.errors.full_messages }, :status => 422
    end
  end

  private
  def series_params
    params.require(:series).permit(:name)
  end
end
