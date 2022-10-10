class Card < ApplicationRecord
  validates :name,:last4,:exp_year,:exp_month, presence: true

  has_many :users
end
