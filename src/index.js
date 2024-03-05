import {html as litHtml, render} from 'lit-html';
import {_ as _con} from 'cute-con';
export const html = litHtml;
export const _ = _con;

export const $ = (selector) =>
{
    const el = document.querySelector(selector);

    el.render = (template) =>
    {
        // Check if template is a function and call it, otherwise use it directly
        const content = typeof template === 'function' ? template() : template;
        render(content, el);
    };
    el.inject = (template) =>
    {
        const tempContainer = document.createElement('template');
        // Check if template is a function and call it, otherwise use it directly
        const content = typeof template === 'function' ? template() : template;
        render(content, tempContainer.content);
        el.appendChild(tempContainer.content.cloneNode(true));
    };

    el.on = (event, handler) => el.addEventListener(event, handler);
    el.click = (handler) => el.addEventListener('click', handler);
    el.hide = () => el.style.display = 'none';
    el.show = () => el.style.display = '';
    el.toggle = () => el.style.display = el.style.display === 'none' ? '' : 'none';
    el.addClass = (className) => el.classList.add(className);
    el.removeClass = (className) => el.classList.remove(className);
    el.hasClass = (className) => el.classList.contains(className);
    el.attr = (name, value) => value === undefined ? el.getAttribute(name) : el.setAttribute(name, value);
    el.css = (styleName, value) => value === undefined ? getComputedStyle(el).getPropertyValue(styleName) : el.style[styleName] = value;
    el.remove = () => el.parentNode.removeChild(el);
    el.scrollTo = (options) => el.scrollIntoView(options);
    el.id = () => el.getAttribute('id');

    return el;
};

export const $$ = (selector) =>
{
    const elements = document.querySelectorAll(selector);
    elements.hide = () => elements.forEach((el) => el.style.display = 'none');
    elements.show = () => elements.forEach((el) => el.style.display = '');
    return elements;
};
