https://www.npmjs.com/package/cute-html

# cute-html

A small and intuitive library designed to simplify DOM manipulation and enhance your web development experience. EXPERIMENTAL.

## Features

- Support for rendering and injecting various content types:
    - Strings (plain text and HTML)
    - HTMLElements
    - lit-html templates
- Efficient rendering and content injection
- Minimalistic and lightweight, with no unnecessary overhead

## Why choose cute-html?

`cute-html` simplifies the way you interact with the DOM, making your code more readable, maintainable, and enjoyable to write. It provides a set of powerful and intuitive methods that streamline common tasks, reducing boilerplate and allowing you to focus on building great web applications.

## Getting Started

### Installation

Install `cute-html` locally using npm:


```
npm install cute-html
```


### Usage

Import the library and start using its features in your project:

```javascript
import { $, $$, html, _ } from 'cute-html';

// Shorthand for document.querySelector(selector)
let el;
el = $('#withId');
el = $('.withClass');
el = $('orHtml'); // like ('body')

// Write clean html component however way (can be multi-line)
let cute;
cute = html`<p>I suppose.</p>`;
cute = (str = 'ye') => html`<p>${str}</p>`; 
cute = cute("all valid");
cute = '<div>bare</div>';
cute = 'even string';
cute = $('#orEntireElement');

// Render html (overwrite)
$('example').render(cute);

// Inject html (appends, no overwrite)
$('example').inject(html`<div>Additional content</div>`);

// Best part: console.log is
_('srsly? nooo');

// Multiple elements. 
const elements = $$('.elements');
// All the same methods are supported ...
```
