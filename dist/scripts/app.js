import { index } from '../pages/index.js';
import { details } from '../pages/details.js';
(() => {
    const path = location.pathname.split('/');
    if (path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html') {
        document.addEventListener('DOMContentLoaded', index);
    }
    else if (path[path.length - 1] === 'details.html') {
        document.addEventListener('DOMContentLoaded', details);
    }
})();
