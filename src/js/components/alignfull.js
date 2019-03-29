class AlignFull{
    constructor() {

    }

    static calculation(){
        var body = document.querySelector('body');

        if (window.innerWidth > body.clientWidth + 5) {
            body.classList.add('has-scrollbar');
            body.setAttribute('style', '--scroll-bar: ' + (window.innerWidth - body.clientWidth) + 'px');
        } else {
            body.classList.remove('has-scrollbar');
        }
    }

    static init(){
        AlignFull.calculation();
    }
}

export default AlignFull;
