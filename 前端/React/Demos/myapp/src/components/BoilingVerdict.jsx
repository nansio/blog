export default function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>水会沸腾!</p>
  }
  return <p>水不会沸腾!</p>
}