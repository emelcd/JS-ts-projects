import './style.css'

const add = document.querySelector<HTMLButtonElement>("#add")!
const less = document.querySelector<HTMLButtonElement>("#less")!
const reset = document.querySelector<HTMLButtonElement>("#reset")!
const count = document.querySelector<HTMLHeadingElement>("#count")!
class GlobalCounter {
    counter: number;
    counterDom: HTMLHeadingElement;
    constructor(counter:number, counterDom:HTMLHeadingElement) {
        this.counter = counter;
        this.counterDom = counterDom;
        this.render()
    }
    render() {
        if(this.counter <= 0) {
            this.counterDom.style.color = "red";
        } else {
            this.counterDom.style.color = "green";
        }
        this.counter !== 0 && localStorage.setItem("counter", this.counter.toString());
        this.counterDom.innerText = this.counter.toString();
    }

    add() {
        this.counter++;
        this.render();
    }
    less() {
        this.counter--;
        this.render();
    }
    reset() {
        this.counter = 0;
        this.render();
    }

}

const globalCounter = new GlobalCounter(0, count);


add.addEventListener("click", globalCounter.add.bind(globalCounter));
less.addEventListener("click", globalCounter.less.bind(globalCounter));
reset.addEventListener("click", globalCounter.reset.bind(globalCounter));


window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp") {
        globalCounter.add();
    } else if(e.key === "ArrowDown") {
        globalCounter.less();
    } else if(e.key === "ArrowLeft") {
        globalCounter.reset();
    }
}
)

window.addEventListener("DOMContentLoaded", () => {
    const counter = localStorage.getItem("counter");
    if(counter) {
        globalCounter.counter = parseInt(counter);
        globalCounter.render();
    }
})
