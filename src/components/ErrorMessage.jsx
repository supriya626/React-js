import { useRouteError } from "react-router-dom"

export default ErrorMessage = () =>{

    const error = useRouteError();
    return(
        <center>
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{error.status} : {error.statusText}</h3>
            <h3>{error.data}</h3>
        </center>
    )
}
