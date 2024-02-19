import { personProps } from "./Person.types"

const Person = ({name}: personProps) => {
    return (
        <div>{name.first} {name.last}</div>
    )
}

export default Person