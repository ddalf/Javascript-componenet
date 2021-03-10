import Items from './componenets/Items.js'

class App{
    constructor(){
        const $app = document.querySelector('#app');
        new Items($app);
    }
}

new App();