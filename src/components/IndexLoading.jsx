
export default function (props) {
  return () => props.loading && (
    <div className="loading">
      {new Array(8).fill(0).map(() => <div className="loadingItem"/>)}
    </div>
  )
}
