import React from 'react';
import $ from 'jquery'; 
import ReactDOM from 'react-dom';

class Pizza extends React.Component{
 constructor(props) {
        super(props)
        this.state = {
         recipes:[],
        }
      }
    componentDidMount(){
        var $this = this;
        console.log("hgduyfuih");
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "https://forkify-api.herokuapp.com/api/search?q=pizza",
            success: function (result) {
                console.log("result",result.count);
                $this.setState({recipes:result.recipes});
                 console.log("21",$this.state.recipes);
                }
            });
       
    }
    render(){
        return(
            <div className={"app-wrapper"}>
                <div className={"header"}>
                    <span>Recipes</span>
                </div>
                <div className={"content"}>
                  
                        {
                            this.state.recipes.map(x=>{return(
                              <div className="recipe">  
                                 <img src={x.image_url} />
                                 <span>Recipe Id-{x.recipe_id}</span>
                                 <a href={x.source_url}>{x.title}</a>
                                 <a href={x.publisher_url}>{x.publisher}</a>
                                 
                              </div>
                            )     
                         })
                        }
                  
                </div>


                
            </div>
        );
    }
}

export default Pizza;