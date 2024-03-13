import { html, render } from 'lit-html';

export const $ = (selector) =>
{
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Element not found: ${selector}`);

    el.render = (content) =>
    {
        if (typeof content === 'function') {
            content = content();
        }
        if (typeof content === 'string') {
            el.innerHTML = content;
        }
        else if (content instanceof HTMLElement) {
            el.innerHTML = '';
            el.appendChild(content);
        }
        else render(content, el);
    };
    el.inject = (content) =>
    {
        if (typeof content === 'function') {
            content = content();
        }
        if (typeof content === 'string') {
            el.insertAdjacentHTML('beforeend', content);
        }
        else if (content instanceof HTMLElement) {
            el.appendChild(content);
        }
        else {
            const tempContainer = document.createElement('template');
            render(content, tempContainer.content);
            el.appendChild(tempContainer.content);
        }
    };
    el.hide = () => el.style.display = 'none';
    el.show = () => el.style.display = '';
    el.toggle = () => el.style.display = el.style.display === 'none' ? '' : 'none';
    return el;
};

export const $$ = (selector) =>
{
    const elements = document.querySelectorAll(selector);
    if (!elements.length) throw new Error(`No elements found: ${selector}`);

    elements.render = (content) =>
    {
        elements.forEach((el) =>
        {
            if (typeof content === 'function') {
                content = content();
            }
            if (typeof content === 'string') {
                el.innerHTML = content;
            }
            else if (content instanceof HTMLElement) {
                el.innerHTML = '';
                el.appendChild(content.cloneNode(true));
            }
            else render(content, el);
        });
    };
    elements.inject = (content) =>
    {
        elements.forEach((el) =>
        {
            if (typeof content === 'function') {
                content = content();
            }
            if (typeof content === 'string') {
                el.insertAdjacentHTML('beforeend', content);
            }
            else if (content instanceof HTMLElement) {
                el.appendChild(content.cloneNode(true));
            }
            else {
                const tempContainer = document.createElement('template');
                render(content, tempContainer.content);
                el.appendChild(tempContainer.content.cloneNode(true));
            }
        });
    };
    elements.hide = () => elements.forEach((el) => el.style.display = 'none');
    elements.show = () => elements.forEach((el) => el.style.display = '');
    return elements;
};

export { html, render };
export { _ } from 'cute-con';