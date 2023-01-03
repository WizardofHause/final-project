class AvatarSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :image, :image_url
  has_one :user_profile

  # def image
  #   return unless self.image.attached?

  #   self.image.blob.attributes
  #     .slice('filename', 'byte_size')
  #     # .slice('id')
  #     .merge(url: image_url)
  #     .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  # end

  # def image_url
  #   url_for(self.image)
  # end

end
