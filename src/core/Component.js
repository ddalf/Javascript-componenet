export default class Componenet{
    $target;
    $state;
    constructor($target){
        this.$target = $target;
        this.setup();
        this.render();
    }

    setup(){};
    template(){return ''};
    render(){
        this.$target.innerHTML = this.template();
        this.render();
    }
}