require 'kramdown'
require 'pry'
require_relative './site_view_component'

module Shared
  class Excerpt < SiteViewComponent
    def initialize(text:)
      super


      stripped = ActionView::Base.safe_list_sanitizer.sanitize(text, tags: %w[p a figure figcaption img], attributes: %w[id class href rel src style target])
      @text = Kramdown::Document.new(stripped).to_html.html_safe
    end
  end
end
