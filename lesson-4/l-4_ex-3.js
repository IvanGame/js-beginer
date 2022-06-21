'use strict'

//es5
function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostEs5.prototype.edit = function () {
    this.text = prompt('Введите текст')
};

PostEs5.prototype.datetime = function () {
    let date = new Date();
    this.date = date.toLocaleDateString();
};

function AttachedPostEs5(author, text, date, highlighted) {
    PostEs5.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;

AttachedPostEs5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let objPostEs5 = new PostEs5("Tom")
objPostEs5.edit();
objPostEs5.datetime();
console.log(objPostEs5);

let objAttachedPostEs5 = new AttachedPostEs5("Jhon");
objAttachedPostEs5.edit();
objAttachedPostEs5.datetime();
objAttachedPostEs5.makeTextHighlighted();
console.log(objAttachedPostEs5);



//es6
class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt('Введите текст')
    }

    datetime() {
        let date = new Date();
        this.date = date.toLocaleDateString();
    }
}

class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let objPostEs6 = new PostEs6("Jeremy", "", "")
objPostEs6.edit();
objPostEs6.datetime();
console.log(objPostEs6);

let objAttachedPostEs6 = new AttachedPostEs6("Frodo");
objAttachedPostEs6.edit();
objAttachedPostEs6.datetime();
objAttachedPostEs6.makeTextHighlighted();
console.log(objAttachedPostEs6);