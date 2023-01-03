class Avatar < ApplicationRecord
  belongs_to :user_profile
  has_one_attached :image, dependent: :destroy

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
