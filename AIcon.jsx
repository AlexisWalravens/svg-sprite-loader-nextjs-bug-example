import * as icons from '/assets/icons'

const AIcon = ({ name, className, style }) => {
  const { viewBox, id } = icons[name]

  return (
    <i>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </i>
  )
}

export default AIcon
