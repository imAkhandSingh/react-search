import React,{Component} from 'react';
import 'tachyons'

class Demo extends Component{
    render(){
        return <h1 className='tc'>Hello {this.props.name}</h1>
    }
}
export default Demo;

