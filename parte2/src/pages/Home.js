import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import MovieDetails from '../components/MovieDetails'
import axios from 'axios';

const url = "https://api.themoviedb.org/3";
const key = '5a9940cf4d7f375315e37a7f90afdd98';
const options = 'language=language%3Dpt-BR';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movielist: [],
        };
    }

    componentDidMount() {

        axios.get(`${url}/movie/now_playing?api_key=${key}&${options}`)
            .then((res) => {
                this.setState({movielist: res.data.results});
            })
    }

    render() {
        let menu = ['inicio', 'favoritos'];
        console.log(this.state.movielist);
        return (
            <div className="home">
                <Navbar menu={menu}/>
                <div className="mainView">
                    <div className="lolomo is-fullbleed">
                        {this.state.movielist.length>0&&<MovieDetails movie={this.state.movielist[0]}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;