import Elem from "./Elem.js"
class Jatekter {
    constructor(){
        this.#lepes = 0;
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++){
            const elem = new elem(szuloElem, index);
        }
        $(window).on("elemKattintas", (event)=> {
            console.log(event.detail);
            let aktElem = event.detail;
            if (this.#lepes % 2 == 0){
                
            }
        })
    }
}