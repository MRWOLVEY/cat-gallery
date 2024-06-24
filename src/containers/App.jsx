import { Component } from "react";
import SearchBox from '../components/SearchBox'
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state={
      cats:[],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats:users}))
  }

  onsearchchange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const {cats,searchfield}=this.state;
    const filteredCats=cats.filter(cat=>{return cat.name.toLowerCase().includes(searchfield.toLowerCase())})
      return !cats.length ? <h1 className="ma0 f1 orange">Loading</h1>:(
        <div className="tc grad pa3">
          <h1 className="ma0 f1 orange">CAT Gallery</h1>
          <SearchBox searchChange = {this.onsearchchange} searchfield = {searchfield}/>
          <Scroll>
            <CardList cats={filteredCats}/>
          </Scroll>
        </div>
      );
  }
}

export default App