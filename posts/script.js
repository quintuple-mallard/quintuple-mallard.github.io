import hljs from './assets/js/@highlightjs/cdn-assets/es/core.js';
import javascript from './assets/js/@highlightjs/cdn-assets/es/languages/javascript.min.js';

hljs.registerLanguage('javascript', javascript);
document.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));