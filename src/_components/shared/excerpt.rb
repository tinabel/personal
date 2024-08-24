require 'kramdown'
require 'pry'
require_relative './site_view_component'

module Shared
  class Excerpt < SiteViewComponent
    def initialize(text:)
      super

      stripped = ActionView::Base.full_sanitizer.sanitize(text)
      @text = Kramdown::Document.new(stripped).to_html.html_safe
    end
  end
end
