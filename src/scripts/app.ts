//import { about } from '../pages/about.js';
//import { index } from "";
//import { todo } from '../pages/todo.js';

import { Controller } from '../components/Controller.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Controller();
    });

    // const path = location.pathname.split('/');
    // if (
    //     path[path.length - 1] === '' ||
    //     path[path.length - 1] === 'index.html'
    // ) {
    //     document.addEventListener('DOMContentLoaded', index);
    // } else if (path[path.length - 1] === 'todo.html') {
    //     document.addEventListener('DOMContentLoaded', todo);
    // } else {
    //     document.addEventListener('DOMContentLoaded', about);
    // }
})();
