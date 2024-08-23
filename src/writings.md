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
            <div class="published-date" aria-label="Published on <%= data.date.strftime("%B %d, %Y") %>" title="Pulish Date">
              <%= data.date.strftime("%B %d, %Y") %>
            </div>
          <p class="excerpt"><%= writing.data.summary%></p>
        </a>
      </article>
    </li>
  <% end %>
</ul>
