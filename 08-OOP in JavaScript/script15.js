'use strict';

class Hamburger
{

    constructor(hambSize, hambStuffing)
    {
        if (arguments.length !== 2)
            throw new SyntaxError("Недостатньо параметрів");
        if (hambSize !== Hamburger.SIZE_LARGE && hambSize !== Hamburger.SIZE_SMALL)
            throw new SyntaxError("Розмір вказано неправильно");
        if (hambStuffing !== Hamburger.STUFFING_CHEESE && hambStuffing !== Hamburger.STUFFING_SALAD && hambStuffing !== Hamburger.STUFFING_POTATO)
            throw new SyntaxError("Начинку вказано неправильно");
        this._size = hambSize;
        this._stuffing = hambStuffing;
        this._toppings = [];
    }

    get toppings()
    {
        return this._toppings;
    };

    get size()
    {
        return this._size;
    };

    set toppings(newTopping)
    {
        if (this._toppings.indexOf(newTopping) !== -1
        ) {
            throw new SyntaxError("Спроба дублікації");
        }
        else
            this._toppings.push(newTopping);
    };

    get stuffing()
    {
        return this._stuffing;
    };

    static removeTopping(oldTopping)
    {
        if (this._toppings.indexOf(oldTopping) === -1)
        {
            throw new SyntaxError("Спроба видалення неіснуючого елементу");
        }
        else
            this._toppings.splice(this._toppings.indexOf(oldTopping), 1);
    };

    static calculatePrice()
    {
        let fullPrice = this._size.price + this._stuffing.price;
        for (let i = 0; i < this._toppings.length; i++)
            fullPrice += this._toppings[i].price;
        return fullPrice;
    };

    static calculateCalories()
    {
        let allCalories = this._size.calories + this._stuffing.calories;
        for (let i = 0; i < this._toppings.length; i++)
            allCalories += this._toppings[i].calories;
        return allCalories;
    };
}

Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_LARGE = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {price: 15, calories: 0};
