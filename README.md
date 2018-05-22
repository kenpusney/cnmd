CNMD: Cross-Notation Markdown
=======

CNMD is a syntax extension of standard markdown. It allows you setup handlers to automatically generate links.

CNMD is widely used in [kenpusney/wiki](https://github.com/kenpusney/wiki) to cross ref resources in the site, and other sites like GitHub, Wikipedia, as well as Twitter etc.

### Syntax

CNMD cross notation is pretty simple, just a colunm seperated link tag, e.g.:

```markdown
[wiki:JavaScript]()
```

means, it will call `wiki` handler and provide the link of `JavaScript`.

and the wiki handler will simply be:

```javascript
(postfix) => `https://en.wikipedia.org/wiki/${postfix}`
```

in this case, the CNMD notation will generate follow html:
```html
<a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a>
```
