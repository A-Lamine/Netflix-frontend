import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
            id,
            title,
            background,
            img,
            description,
            video,
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
            background,
            img,
            description,
            video,
            classification{
                name
            }
        }
    }
`