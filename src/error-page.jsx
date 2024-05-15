import {useRouteError} from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError
    console.log(error)

    return(
        <div id="error-page">
            <h1>Opps!</h1>
            <p>Khe mamabicho eres, algo salio mal</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}