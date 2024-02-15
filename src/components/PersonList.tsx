
type PersonProps = {
  names: {
    first: string,
    last: string
  }[]
}

const PersonList = (props:PersonProps) => {
  return (
    <div>
        {props.names.map((name,i) => (
            <p key={i}>{name.first}{name.last}</p>
        ))}
    </div>
  )
}

export default PersonList