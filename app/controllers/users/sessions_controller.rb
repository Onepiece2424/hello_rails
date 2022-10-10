class Users::SessionsController < Devise::SessionsController
  def after_sign_out_path_for(resource)
    new_user_session_path
  end

  private
  def check_captcha
    unless verify_recaptcha
      self.resource = resource_class.new sign_in_params
      resource.validate
      set_minimum_password_length
      respond_with_navigational(resource) { render :new }
    end
  end

  prepend_before_action :check_captcha, only: [:create]
end
