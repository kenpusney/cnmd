
import { Renderer, MarkedOptions } from "marked"

const DEFAULT_HANDLERS = {
    "": (postfix, render) => render(`/#/wiki/${postfix}`, postfix),
    "github": (postfix, render) => render(`https://github.com/${postfix}`, postfix),
    "\\": (postfix, render) => render(`:${postfix}`, postfix),
    "twitter": (postfix, render) => render(`https://twitter.com/${postfix}`, postfix),
    "wiki": (postfix, render) => render(`https://en.wikipedia.org/wiki/${postfix}`, postfix),
}

export type CrossNotationRenderer = (url: string, description: string) => string

export type CrossNotationHandler = (postfix: string, render: CrossNotationRenderer) => string
export type Handlers =  { [key: string]: CrossNotationHandler }

export class CnmdRenderer {

    static default_handlers: Handlers

    handlers: Handlers

    constructor(handlers?: Handlers) {
        this.handlers = handlers || DEFAULT_HANDLERS;
    }

    link(href, title, text) {
        if (text.match(/^\w*:.*/)) {
            let segment = text.split(":");
            if (this.handlers[segment[0]]) {
                const result = this.handlers[segment[0]](segment[1], (url, title) => {
                    return `<a href="${url}" title="${title}">${title}</a>`;
                });
                return result; 
            }
        }
        return `<a href="${href}" title="${title}">${text}</a>`;
    }
}

CnmdRenderer.default_handlers = DEFAULT_HANDLERS;
