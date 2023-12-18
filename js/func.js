"use strict"
class Car {
    #brand;
    #model;
    #year;
    #averageSpeed;

    constructor(brand, model, year, averageSpeed) {
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#averageSpeed = averageSpeed;
    }

    get brand() {return this.#brand;}
    set brand(b) {this.#brand = b;}
    get model() {return this.#model;}
    set model(m) {this.#model = m;}
    get year() {return this.#year;}
    set year(y) {this.#year = y;}
    get averageSpeed() {return this.#averageSpeed;}
    set averageSpeed(s) {this.#averageSpeed = s;}

    displayInfo() {
        return `Brand: ${this.#brand}, Model: ${this.#model}, Year: ${this.#year}, Av speed: ${this.#averageSpeed} km per h`;
    }

    calculateTravelTime(distance) {
        const timeWithoutBreaks = distance / this.#averageSpeed;
        const breaks = Math.floor(timeWithoutBreaks / 4);
        const totalTime = timeWithoutBreaks + breaks;
        return totalTime;
    }
}


class Fraction {
    #a;
    #b;

    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }

    get a() {return this.#a;}
    set a(a1) {this.#a = a1;}
    get b() {return this.#b;}
    set b(b1) {this.#b = b1;}

    add(c) {return new Fraction(this.#a * c.#b + c.#a * this.#b, this.#b * c.#b);}
    subtract(c) {return new Fraction(this.#a * c.#b - c.#a * this.#b, this.#b * c.#b);}
    multiply(c) {return new Fraction(this.#a * c.#a, this.#b * c.#b);}
    divide(c) {return new Fraction(this.#a * c.#b, this.#b * c.#a);}

    reduce() {
        function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        }

        let nod = gcd(this.#a, this.#b);
        this.#a /= nod;
        this.#b /= nod;

        if (this.#b < 0) {
            this.#a = -this.#a;
            this.#b = -this.#b;
        }

        return this;
    }
}


class Time {
    #h;
    #min;
    #sec;

    constructor(h, min, sec) {
        this.#h = h;
        this.#min = min;
        this.#sec = sec;
    }

    get h() {return this.#h;}
    set h(h1) {this.#h = h1;}
    get min() {return this.#min;}
    set min(m1) {this.#min = m1;}
    get sec() {return this.#sec;}
    set sec(s1) {this.#sec = s1;}

    displayTime() {
        return `${this.#h.toString().padStart(2, '0')}:${this.#min.toString().padStart(2, '0')}:${this.#sec.toString().padStart(2, '0')}`;
    }

    addSec(addSec) {
        this.#sec += addSec;
        this.#min += Math.floor(this.#sec / 60);
        this.#sec %= 60;
        this.#h += Math.floor(this.#min / 60);
        this.#min %= 60;
        this.#h %= 24;
    }

    addMin(addMin) {
        this.#min += addMin;
        this.#h += Math.floor(this.#min / 60);
        this.#min %= 60;
        this.#h %= 24;
    }

    addHr(addHr) {
        this.#h += addHr;
        this.#h %= 24;
    }
}