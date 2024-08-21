---
layout: page
title: Writing
paginate:
  collection: writings
  per_page: 4
---

<ul>
  <% for writing in paginator.resources %>
    <li>
      <a href="<%= writing.relative_url %>"><%= writing.data.title %></a>
    </li>
  <% end %>
</ul>
