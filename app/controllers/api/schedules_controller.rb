class Api::SchedulesController < ApplicationController
  def index
    @schedules = Schedule.all
    render :index
  end

  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      render :index
    else
      render :json => { :errors => @schedule.errors.full_messages }, :status => 422
    end
  end

  def update
    @schedule = Schedule.find(params[:id])

    if @schedule.update_attributes(schedule_params)
      render :index
    else
      render :json => { :errors => @schedule.errors.full_messages }, :status => 422
    end
  end

  private
    def schedule_params
      params.require(:schedule).permit(:pdf_link, :img1, :img2)
    end
end
