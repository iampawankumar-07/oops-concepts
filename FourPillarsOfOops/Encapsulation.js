
//hiding the data- methods and attributes of a class to the outside to make the class more maintainable and secure


class Movie {

    #title
    #year


    constructor(t, y) {

        this.#title = t
        this.#year = y
    }

}


new Movie('Shawshank Redemption', '1999')