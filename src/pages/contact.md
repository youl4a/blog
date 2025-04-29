---
title: Contact me
permalink: /contact/index.html
description: 'Contacts'
layout: page
---

I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.

<article class="full  section" style="--spot-color: var(--color-bg-accent)">
{% svg "divider/soft-top", null, "divider" %}
 <section class="feature section__inner wrapper">
<center><form action="https://formspree.io/f/mwpopjgb" method="POST">
  <label for="name">Name</label><br />
  <input type="text" id="name" name="name" required><br /><br />

  <label for="email">Email</label><br />
  <input type="email" id="email" name="_replyto" required><br /><br />

  <label for="message">Message</label><br />
  <textarea id="message" name="message" rows="5" required></textarea><br /><br />
  
  <a href="#" class="button" data-button-variant="tertiary">Send</a>
</form></center>
</section>
{% svg "divider/soft-bottom", null, "divider" %}
</article>