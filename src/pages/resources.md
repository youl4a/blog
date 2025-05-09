---
title: Resources
permalink: /resources/index.html
description: 'resources'
layout: page
sizes: '(max-width: 615px) 50vw, 100vw'
widths: [400, 520]
---
<p>
  Honestly, I made this starter for myself, based on how I want to start a project and how I like to organize
  everything. I am delighted that so many of you find it useful too! This is a list of sites based on / built
  with Eleventy Excellent. This uses Eleventy's
  <a href="https://www.11ty.dev/docs/services/screenshots/">screenshot API </a>. New screenshots are fetched
  in development only.
</p>


<section class="section region flow">
  <h3 class="text-center">Free Design Resources</h3>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
    {% for item in items %}
      <a href="{{ item.url }}" class="card" style="text-decoration: none;">
        <img src="{{ item.data.thumbnail }}" alt="{{ item.data.title }}" style="width: 100%; border-radius: 1rem;">
        <div class="flow" style="padding-top: 0.5rem;">
          <h3 style="margin: 0;">{{ item.data.title }}</h3>
          <p class="text-muted" style="font-size: 0.9rem;">{{ item.data.description }}</p>
        </div>
      </a>
    {% endfor %}
  </div>
</section>



<article class="full  section" style="--spot-color: var(--color-bg-accent)">
  {% svg "divider/soft-top", null, "divider" %}

  <section class="feature section__inner wrapper">
    <h2></h2>
  </section>

  {% svg "divider/soft-bottom", null, "divider" %}
</article>
{% css "local" %}
  {% include "css/custom-card.css" %}
{% endcss %}
