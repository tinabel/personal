---
layout: page
title: Writing
paginate:
  collection: writings
  per_page: 4
---

<ul class="writings">
  <% for writing in paginator.resources %>
    <li class="essay">
      <article>
        <a class="article-link" href="<%= writing.relative_url %>">
          <h2><%= writing.data.title %></h2>
            <div class="published-date" aria-label="Published on <%= writing.data.date.strftime("%B %d, %Y") %>" title="Publish Date">
              <%= writing.data.date.strftime("%B %d, %Y") %>
            </div>
            <div class="excerpt"><%= format_excerpt text: writing.data.summary %></div>
        </a>
      </article>
    </li>
  <% end %>
</ul>

<% if paginator.total_pages > 1 %>

  <ul class="pagination">
    <% if paginator.previous_page %>
    <li>
      <a href="<%= paginator.previous_page_path %>">Previous Page</a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li>
      <a href="<%= paginator.next_page_path %>">Next Page</a>
    </li>
    <% end %>
  </ul>
<% end %>
