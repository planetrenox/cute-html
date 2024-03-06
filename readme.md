https://www.npmjs.com/package/cute-html

# cute-html

A small library designed to enhance the way you interact with the DOM using modern JavaScript.

## Features

- Simplifies DOM manipulation and event handling
- Integrates smoothly for efficient rendering
- Offers a concise API for common tasks
- Enables dynamic content injection and manipulation with minimal boilerplate

## Why

This package solves the problem of verbose and repetitive DOM manipulation code in modern web development. It provides a more readable, efficient, and enjoyable way to write interactive web applications.

## Getting Started

### Installation

1. Install cute-html locally.


   ```
   npm install cute-html
   ```


### Usage

Import the library and start using its features in your project:

```javascript
import { $, $$, html, _ } from 'cute-html';

// Shorthand for document.querySelector(selector)
let el;
el = $('#example');
el = $('.example');

// Write clean html component however way (can be multi-line)
let cute;
cute = html`<p>I suppose.</p>`;
cute = (str = 'ye') => html`<p>${str}</p>`; 
cute = cute("all valid"); // cute and cute()

// Render html (overwrite)
$('example').render(cute);

// Inject html (no overwrite)
$('example').inject(html`<div>Additional content</div>`);

// Best part: console.log() is
_('srsly? nooo');


// Utility
const elementsToHide = $$('.elements-to-hide');
elementsToHide.hide();
elementsToHide.show();
$('.example').on('click', () => _('Element clicked'));
$('.example').click(() => _('Element clicked'));
$('.example').hide(); // Hide the element
$('.example').show(); // Show the element
$('.example').toggle(); // Toggle visibility
$('.example').addClass('visible'); // Add a class
$('.example').removeClass('hidden'); // Remove a class
$('.example').attr('data-role', 'admin'); // Set an attribute
$('.example').css('background-color', 'blue'); // Set CSS style
$('.example').scrollTo({behavior: 'smooth'}); // Scroll into view
_($('.example').attr('data-role')); // Get an attribute
_($('.example').css('background-color')); // Get CSS style
_($('.example').id()); // Get the element's ID attribute
_($('.example').hasClass('visible'));
// i missed a few
```
