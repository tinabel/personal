# frozen_string_literal: true
require 'action_view'
require 'kramdown'

module Builders
  # This module provides helper methods for formatting text excerpts in a site.
  # It inherits from SiteBuilder and defines a build method to register the helper.
  #
  # Methods:
  #   - build: Registers the :format_excerpt helper method.
  #   - excerpt(text): Sanitizes the given text by allowing only specific HTML tags and attributes,
  #                    then converts it to HTML using Kramdown and marks it as safe HTML.
  #
  # Example usage (in .erb files):
  #   <%= format_excerpt text: writing.data.summary %>
  #   sanitized_html = writing_helpers.excerpt("<p>Some text</p>")
  module WritingHelpers # rubocop:disable Style/Documentation
    def format_excerpt(text:)
      puts text
      stripped = ActionView::Base.safe_list_sanitizer.sanitize(text, tags: %w[p a strong div figure figcaption img], attributes: %w[id class href rel src alt style target]) # rubocop:disable Layout/LineLength

      return Kramdown::Document.new(stripped).to_html.html_safe
    end
  end
end

Bridgetown::RubyTemplateView::Helpers.include Builders::WritingHelpers
