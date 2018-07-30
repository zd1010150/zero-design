import React, {Component} from 'react';
import Example from '../lib';
import { SecondExample, CategoryFilter } from '../lib';
import 'antd/dist/antd.css';
const mockDate = ['Nutritional Foods', 'Woman Care', 'swiss', 'blackmores']
for(let i = 0; i< 20; i++){
    mockDate.push(`test data ${i}`)
}
const label = 'Category';
class App extends Component{
    selectCategory = () => {

    }
    render() {
        return  <div>
            <Example />
            <SecondExample />
            <CategoryFilter selectCategory={this.selectCategory} label={label} data={mockDate}/>
        </div>
    }
}

export default App;
