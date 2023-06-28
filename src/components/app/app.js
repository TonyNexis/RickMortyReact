import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
// import { WhoAmI } from './someTests';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Tony Nexis', salary: 600, increase: false, id: 1},
                {name: 'Alex Monk', salary: 1200, increase: false, id: 2},
                {name: 'John Karakey', salary: 800, increase: false, id: 3},
                {name: 'Dan Brown', salary: 750, increase: true, id: 4},
                {name: 'Yoko Shido', salary: 1500, increase: false, id: 5},
                {name: 'Mala Karyka', salary: 350, increase: false, id: 6},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    render() {
        return (
            <div className='app' >
                {/* <WhoAmI name='John' surname='Smith' link='google.com'/> */}
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App;