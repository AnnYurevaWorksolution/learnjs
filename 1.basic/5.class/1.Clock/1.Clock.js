// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
// function Clock({ template }) {
//
//     let timer;
//
//     function render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     this.stop = function() {
//         clearInterval(timer);
//     };
//
//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
//
// }
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        this.date = new Date();

        this.hours = this.date.getHours();
        if (this.hours < 10) this.hours = '0' + this.hours;

        this.mins = this.date.getMinutes();
        if (this.mins < 10) this.mins = '0' + this.mins;

        this.secs = this.date.getSeconds();
        if (this.secs < 10) this.secs = '0' + this.secs;

        this.output = this.template
            .replace('h', this.hours)
            .replace('m', this.mins)
            .replace('s', this.secs);

        console.log(this.output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();