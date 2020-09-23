import React, { Component } from 'react';
import sampleData from '../../data/sampleData'


class SampleComponent extends Component {
    state = {  }
    
    render() { 
        const myObj = {
            "firstName": "zey",
            "lastName": "Jones",
            "age": "a"
          };
          sampleData.push(myObj);
    return ( <div>
        {
            sampleData.map((item,i) => {
                return(
                    <div>
                        <h4>My Name is {item.firstName} {item.lastName} and my age is {item.age}.</h4>
                    </div>
                )
            })
            
        }
    </div> );
    }
}
 
export default SampleComponent;