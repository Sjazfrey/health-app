import React, {
    Component
} from 'react';
import "../App.css"

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            baseUrl: 'https://api.edamam.com/api/food-database/v2/parser?ingr=',
            AppId: "6da4e002",
            key: '7574ab6f294955fb73ddbdd43bb7f5c5',
            product: '',
            searchURL: ''
        }

        this.handleClick = this.handleClick.bind(this)


    }
    handleClick(event) {
        event.preventDefault()
        this.setState({
            searchKey: document.getElementById("product").value
        })
        let answer = document.getElementById("product").value
        // https://api.edamam.com/api/food-database/v2/parser?ingr=apple&app_id=6da4e002
        fetch(this.state.baseUrl + answer + "&app_id=" + this.state.AppId + "&app_key=" + this.state.key).then(response => {
            return response.json()
        }).then(json => {
            console.log(json.parsed[0]);
            this.setState({
                results: json.parsed[0]
            })
        })

    }



    render(){
        return(

            <div className="all"> 
                <input className= "hi" type="button" value="Search Products" onClick={this.handleClick}/>
                <input id= "product" className= "search-box" type="text" /> <br />
                    <img alt = "food" src = 
                        {this.state.results!=null ? this.state.results.food.image : "" }className = "pic"/> <br />
                        <span className="food"> FOOD:  </span>
                        {this.state.results!=null ? this.state.results.food.label: "" } <br />
                       <br /> <span className="carbs"> Carbs in grams:  </span>                        
                        {this.state.results!=null ? this.state.results.food.nutrients.CHOCDF: "" }<br />

                        <br /><span className="energy"> Energy in kcal:  </span>
                        {this.state.results!=null ? this.state.results.food.nutrients.ENERC_KCAL: "" }<br />

                       <br /> <span className="fat"> Fats in grams:  </span>
                        {this.state.results!=null ? this.state.results.food.nutrients.FAT: "" } <br />

                        <br /><span className="fiber"> Fiber in grams:  </span>
                        {this.state.results!=null ? this.state.results.food.nutrients.FIBTG: "" } <br />

                       <br /> <span className="protein">Protein in grams:  </span>                   
                        {this.state.results!=null ? this.state.results.food.nutrients.PROCNT: "" }<br />

                        {/* <input defaultValue="Sugar"/>                   
                        {this.state.results!=null ? this.state.results.food.nutrients.SUGAR: "" } */}
                       
                    
                    
                    

            </div>
        )

        
    }

}