import gql from "graphql-tag";

export const getCatalogues = gql`
    query {
        getCatalogues{
            id,
            name
    }}
`

export const getCatalogue = gql`
    query getCatalogue($id:ID){
        getMovie (id:$id){
            id,
            name
        }
    }
`