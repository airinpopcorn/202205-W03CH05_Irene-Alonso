import { index } from '../pages/index.js';
(() => {
    document.addEventListener('DOMContentLoaded', index);
    /* const path = location.pathname.split('/');
    if (
        path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html'
    ) {
        document.addEventListener('DOMContentLoaded', index);
    } else if (path[path.length - 1] === 'details.html') {
        document.addEventListener('DOMContentLoaded', details);
    } else {
        document.addEventListener('DOMContentLoaded', about);
    }  */
})();
