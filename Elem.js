class Elem {
    constructor( szuloElem){
        szuloElem.append("<div class='elem'><p></p></div>");
        this.DivElem = $("article div:last-child");
        this.pElem = $("article div:last-child p");
        this.DivElem.on("click", () => {
        this.setElem("x");
        this.esemenyTrigger()

        });
        
    }

    setElem(ertek){
        this.pElem.text(ertek);
    }
    esemenyTrigger(){
        const esemeny = new ConstEvent("elemKattintas");
        window.dispatchEvent(esemeny);
    }
}
export default Elem;