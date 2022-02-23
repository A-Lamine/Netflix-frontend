import gql from "graphql-tag";

export const Catalogue = gql`
    mutation createCatalogue($name: String!){
        createCatalogue(name: $name) {
            id,
            name
        }
    
    }
`