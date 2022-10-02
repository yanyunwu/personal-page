import store from "@/store";

export default function () {
  return (
    <div className="IndexHome-home">
      <div className="IndexHome-title">
        <h1>{store.title}</h1>
        <h4>{store.subTitle}</h4>
      </div>
    </div>
  )
}
