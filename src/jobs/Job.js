import { useParams } from "react-router-dom"

const Job = () => {
    const {id} = useParams()

    return (
        <h1>This is job: {id}</h1>
    )
}

export default Job