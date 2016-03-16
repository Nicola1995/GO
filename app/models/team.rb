class Team < ActiveRecord::Base
	has_many :teammates, :dependent => :destroy
	has_one :manager, :dependent => :destroy
	accepts_nested_attributes_for :teammates
	accepts_nested_attributes_for :manager
end
