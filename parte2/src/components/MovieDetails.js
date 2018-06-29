import React, {Component} from 'react';

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
        };
    }
    render() {
        console.log('teste', this.props);
        return (
            <a key={this.props.movie.title} className="card-link" onMouseEnter={() =>this.setState({showText:true})} onMouseLeave={() =>this.setState({showText:false})}>
                <div
                    className="video-artwork is-loaded lazy-background-image"
                    style={{
                        backgroundColor: '#202020',
                        backgroundImage: `url(${imageUrl}${size}${this.props.movie.backdrop_path})`
                    }}
                >
                    {this.state.showText && <div className="content-details">
                        <div className="content-details-title">{this.props.movie.title}</div>
                        <div className="content-details-title">
                            <div>{this.props.movie.release_date ? this.props.movie.release_date.split('-')[0] : null}</div>
                            <div>Nota: {this.props.movie.vote_average}</div>
                            <div>{this.props.movie.overview ? this.props.movie.overview.substring(0, 100) + '...' : 'Esse filme ainda não tem uma descrição.'}</div>
                        </div>
                    </div>}
                </div>
            </a>
        );
    }
}

export default MovieDetails;