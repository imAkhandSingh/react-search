import React,{Component} from 'react';
import './Avatar.css'
import AvatarList from './AvatarList'
import {persons} from './persons'
import 'tachyons'
import SearchBox from './SearchBox'

class Avatar extends Component{
    constructor(){
        super();
        this.state = {
            name : "Welcome Avatar World!",
            person : persons,
            searchfield: ''
        }
    }
    nameChange() {
        this.setState({
            name : 'This is Akhand Avatar World!'
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
        
    }
    
    render(){

        const filterAvatars = this.state.person.filter(persons => {
            return persons.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        console.log(filterAvatars);
        
        const personList = this.state.person.map((user ,i) => {
            return <AvatarList key={i} id={this.state.person[i].id} name={this.state.person[i].name} post={this.state.person[i].post}/>
        });
        
         return (
            <div className='tc contain'>
                <h1>{this.state.name}</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <div className="clearfix">
                    { personList }
                </div>
                <a href='#' onClick={ () => this.nameChange()} 
                    className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-blue">
                    Subscribe
                </a>
            </div>
        )
    }
}

export default Avatar;
