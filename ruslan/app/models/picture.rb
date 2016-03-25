class Picture < ActiveRecord::Base
	belongs_to :article
	has_attached_file :image, :styles => {:thumb => "480*480>"}
	

	validates_attachment_presence :image
	validates_attachment_size :image, :less_than => 5.megabytes
	validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/png']

end
