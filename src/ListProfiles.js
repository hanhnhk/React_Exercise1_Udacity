import React, {Component} from 'react'

class ListProfiles extends Component{
    render() {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;
        console.log('users', users);
        console.log('movies', movies);

        /*Jane Cruz's favorite movie is Planet Earth 1.*/
        return <ol>
            {profiles.map((profile) => {
                const userName = users[profile.userID].name;
                const movie = movies[profile.favoriteMovieID].name;
                return <li key={profile.id}>
                    <p>{`${userName}'s favorite movie is ${movie}.`}</p>
                </li>;
            })}
        </ol>;
    }
}

export default ListProfiles;

