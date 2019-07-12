import React,{Component} from 'react';
import './Avatar.css'
import 'tachyons'

class AvatarList extends Component{
    render(){
        return (
            <div className="fl w-third w-20-ns pa2 grow bg-blue space">
                    <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt='avatar' className="main"/>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.post}</p>
            </div>
        )
    }
}

export default AvatarList;