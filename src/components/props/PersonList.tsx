import { Name } from "./Person.types"

type PersonProps = {
  names: Name[]
}

const PersonList = ({names}:PersonProps) => {
  return (
    <div>
        {names.map((name,i) => (
            <p key={i}>{name.first}{name.last}</p>
        ))}
    </div>
  )
}

export default PersonList