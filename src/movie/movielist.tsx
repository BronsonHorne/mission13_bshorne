import { useEffect, useState } from "react";
import {Movie} from "../types/movie"

function MovieList()
{
    const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

    useEffect (() => {       
        const fetchMovie = async () => {
            const rsp = await fetch('https://localhost:7047/movie');
            const temp = await rsp.json();
            setListOfMovies(temp);
        };
        fetchMovie();
    }, []);

    

    return (
        <>
          <div>
            <h3>Joel Hilton's Movie Collection</h3>
          </div>
    
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Director</th>
                  <th>Rating</th>
                  <th>Edited</th>
                  <th>Lent To</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {listOfMovies.map((m) => (
                  <tr key={m.movieID}>
                    <td>{m.category}</td>
                    <td>{m.title}</td>
                    <td>{m.year}</td>
                    <td>{m.director}</td>
                    <td>{m.rating}</td>
                    <td>{m.edited}</td>
                    <td>{m.lentTo}</td>
                    <td>{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
        </>
      );
}

export default MovieList;