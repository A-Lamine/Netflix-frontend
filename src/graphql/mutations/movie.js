import gql from "graphql-tag";


export const Movies = gql`
    mutation createMovie($title: String!,$background: String, $img: String, $description:String, $video: String, $classification:[ID]){
      createMovie(title: $title,background:$background,img:$img,description:$description,video:$video,classification:$classification)
            {
              id,
              title
            }
        },
`