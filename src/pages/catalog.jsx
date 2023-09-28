import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";
import { useEffect, useState } from "react";

//too nervous to wreck this to make any real changes

function Catalog(props){

    let [products, setProducts] = useState([]);
    let [categories, setCategories]= useState([]);
    let [prodsDisplay, setProdsDisplay]= useState([]);

    useEffect(function(){
        console.log("component loaded");
        //similar to the init();
        loadCatalog();
    },[]);

    function filter(category){
        console.log("filter clicked");
        //i need some memory to store the category
        let list = [];
        //find the products that match the filter - use the category
        //and add them to the list
        for(let i=0; i<products.length; i++){
            let prod = products[i];
            if (prod.category === category){
                list.push(prod);
            }
        }
        console.log(list);
        setProdsDisplay(list);

    }

    /*
    Create a new button that displays all the products again (clear the filter)
    */

    function clearFilter(){
        setProdsDisplay(products);

    }

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
        let cats = ["Dessert", "Pastries", "Celebrations", "Breakfast"];
        setCategories(cats);
        setProdsDisplay(prods);
    }

    return(
        <div className="catalog">
            {/*please create buttons using the categories state variable */}
            <h1>Check out our {products.length} products</h1>
            <br />
            <button onClick={clearFilter} className="btn btn-sm btn-dark btn-filter">All</button>
            <br />
            {categories.map(c => <button key={c} onClick={() => filter(c)} className='btn btn-sm btn-primary btn-filter'>{c}</button> )}
            <br />
            {prodsDisplay.map(d => <Product key={d._id} data={d}/>)}
            <br />
            {/* {products.map(p => <Product key={p._id} data={p}/>)} */}

        </div>
    )
}

export default Catalog;

