import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
            id,
            title,
            img,
            classification{
                name
            }
        }
    }
`

export const getMovie = gql`
    query getMovie($id:ID){
        getMovie (id:$id){
            id,
            title,
            img,
            classification{
                name
            }
        }
    }
`