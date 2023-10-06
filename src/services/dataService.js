import axios from 'axios';

var catalog = [
    {
        "title": "Cake",
        "category": "Celebrations",
        "price": 111.99,
        "image": "cakes.jpeg",
        "_id": "1",
    },
    {
        "title": "Cupcake",
        "category": "Celebrations",
        "price": 88.99,
        "image": "slices.jpeg",
        "_id": "2",
    },
    {
        "title": "Brownie",
        "category": "Dessert",
        "price": 77.99,
        "image": "chocolate.jpeg",
        "_id": "3",
    },
    {
        "title": "Muffin",
        "category": "Pastries",
        "price": 66.99,
        "image": "fruits.jpeg",
        "_id": "4",
    },
    {
        "title": "Cookie",
        "category": "Pastries",
        "price": 55.99,
        "image": "assorted.jpeg",
        "_id": "5",
    },
    {
        "title": "Danish",
        "category": "Breakfast",
        "price": 44.99,
        "image": "pastries.jpeg",
        "_id": "6",
    },
    {
        "title": "Croissant",
        "category": "Breakfast",
        "price": 33.99,
        "image": "breakfast.jpeg",
        "_id": "7",
    },
    {
        "title": "Ice Cream",
        "category": "Dessert",
        "price": 2.99,
        "image": "cups.jpeg",
        "_id": "8",
    },
];

class DataService {

    serverURL = "http://127.0.0.1:5000";

    async getProducts(){
        //to work with hardcoded values

        //return catalog;

        //call the server
        const response = await axios.get(this.serverURL + "/api/products");
        return response.data;

    }

    async saveProduct(product) {
        let response = await axios.post(this.serverURL + '/api/products', product);
        return response.data;
    }
}

export default DataService;

// please create at least on 7 of this objects
