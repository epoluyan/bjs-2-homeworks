class PrintEditionItem  {
    constructor(name, releaseDate, pagesCount)
    {
        this.name = name;
        this.releaseDate = releaseDate; 
        this.pagesCount = pagesCount; 
        this.state = 100;
        this.type = null;  
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        (number < 0) ? this._state = 0
            : (number > 100) ? this._state = 100 
            : this._state = number
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = "book";

    }
}

class NovelBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
        this.author = author;

    }
}
class FantasticBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
        this.author = author;

    }
}
class DetectiveBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
        this.author = author;

    }
}

//----------//

class Library  {
    constructor(name, books)
    {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        return book.state > 30 ? this.books.push(book) : 0
    }

    findBookBy(type, value) {
        let array;
        this.books.map(item => { item[type] === value ? array = item : undefined });
        return array != undefined ? array : null
    }

    giveBookByName(bookName) {
        let array;
        this.books.map((item, i) => { 
            if (item.name === bookName) { 
                array = item;
                this.books.splice(i, 1);
            }
        });
        return array != undefined ? array : null
    }

}