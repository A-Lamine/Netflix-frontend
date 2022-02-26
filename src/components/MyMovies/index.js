import styles from './index.module.scss';
import { getMovies } from '../../graphql/queries/movies';
import { useQuery } from '@apollo/client';



function index(props) {
    const { loading, error, data } = useQuery(getMovies);

    if (loading) {
        return "loading...";
    }

    if (error) {
        
        return null;
    }
    
 
    return (
        
        <div className={styles.row}>
        <div className={styles.h1}>{props.title}</div>
        <div className={styles.row__posters}>
                    {
                        data?.getMovies.map((movie) => (
                                
                                movie?.classification.map((film)=>(
                                    film.name == props.title ? (
                                        
                                        <img key={movie.id} className={styles.row__posterLarge} src={movie.img} alt="" />
                                    
                                        ) : ""
                                )
                                
                                )
                            
                        ))
                    }
                </div>
            </div>
       
    )
}

export default index;