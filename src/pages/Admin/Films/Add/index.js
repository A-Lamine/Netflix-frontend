import React, { useEffect, useState } from 'react'
import styles from '../../index.module.scss'
import Header from '../../AdminComposents/header'
import Nav from '../../AdminComposents/nav'
import style from '../../Categories/index.module.scss'
import Label from '../../AdminComposents/label'
import Input from '../../../../components/UI/Input'
import mystyles from './index.module.scss'
import Message from '../../../../components/UI/Message/Message'
import { Movies } from '../../../../graphql/mutations/movie';
import { useQuery } from "@apollo/react-hooks";
import { getCatalogues } from '../../../../graphql/queries/catalogues'
import { useMutation } from "@apollo/react-hooks";


function Index() {
    /*     const [title, setTitle] = useState()
        const [background, setBackground] = useState()
        const [img, setImg] = useState()
        const [video, setVideo] = useState()
        const [description, setDescription] = useState()*/
    const [classification, setClassification] = useState([]);
    const [movie, setMovie] = useState({});
    const { loading, error, data } = useQuery(getCatalogues);
    /*     console.log(movie.title)
        console.log(movie.background)
        console.log(movie.img)
        console.log(movie.description)
        console.log(movie.video) */


    const [handleSubmit, { loading2, error2, data2 }] = useMutation(Movies, {
        variables: {
            title: movie.title,
            background: movie.background,
            img: movie.img,
            description: movie.description,
            video: movie.video,
            classification: classification
        }
    });


    if ((loading) || (loading2)) {
        console.log('....loading')
        return "loading...";

    }

    if ((error) || (error2)) {
        return null,
            console.log(error2)

    }


    return (

        <div>
            <Header />
            <div className={styles.main}>
                <Nav />
                <div className={style.panel}>
                    <form className={mystyles.form_add_movie} onSubmit={handleSubmit}>
                        <Label id="Ajouter un film" />
                        <div className={mystyles.row_add_movie}>
                            <h3 name="titre">Titre :</h3>
                            <Input
                                type="text"
                                label="titre"
                                id="titre"
                                name="Titre"
                                placeholder="Nom Du Film"
                                required={true}
                                onChange={(e) => {
                                    setMovie({ ...movie, title: e.target.value })
                                }}
                            />

                        </div>

                        <div className={mystyles.row_add_movie}>
                            <h3 name="Background">Background :</h3>
                            <Input
                                type="text"
                                label="Background"
                                id="Background"
                                name="Background"
                                placeholder="Couverture Large Du Film"
                                required={true}
                                onChange={(e) => {
                                    setMovie({ ...movie, background: e.target.value })
                                }}
                            />

                        </div>



                        <div className={mystyles.row_add_movie}>
                            <h3 name="img">Image :</h3>
                            <Input
                                type="img"
                                label="img"
                                id="img"
                                name="img"
                                placeholder="Couverture Film"
                                required={true}
                                onChange={(e) => {
                                    setMovie({ ...movie, img: e.target.value })
                                }}
                            />

                        </div>

                        <div className={mystyles.row_add_movie}>
                            <h3 name="video">Video :</h3>
                            <Input
                                type="video"
                                label="video"
                                id="video"
                                name="video"
                                placeholder="Lien de la video Youtube"
                                required={true}
                                onChange={(e) => {
                                    setMovie({ ...movie, video: e.target.value })
                                }}
                            />

                        </div>
                        <div className={mystyles.row_add_movie}>
                            <h3 name="description">Description :</h3>
                            <textarea
                                type="description"
                                label="description"
                                id="description"
                                name="description"
                                placeholder="Description du Film"
                                required={true}
                                onChange={(e) => {
                                    setMovie({ ...movie, description: e.target.value })
                                }}
                            />

                        </div>
                        <div className={mystyles.row_add_movie}>
                            <h3 name="Categories">Categories :</h3>
                            <div className={mystyles.list_categories}>
                                {
                                    data.getCatalogues.map((catalogue) => (
                                        <div className={mystyles.one_categorie} key={catalogue.id}>
                                            <input
                                                name={catalogue.name}
                                                type="checkbox"
                                                onChange={(e) => {
                                                    classification.indexOf(catalogue.id) == -1 ?
                                                        setClassification([...classification, catalogue.id])
                                                        :
                                                        classification.splice(classification.indexOf(catalogue.id), 1); return classification

                                                }}
                                            />

                                            <label>{catalogue.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={mystyles.panel_button}>
                            <button type='submit' className='btn btn-Submith'>Ajouter</button>
                        </div>
                        {
                            data2 ? (
                                <Message message="Film ajouter avec succès" type="success" />
                            )
                                :
                                ""
                        }

                    </form>


                </div>
            </div>
        </div>
    )
}

export default Index