

export const Map2=() => {

    const data =[
        {
            id:1,name:"pen"
        },
        {
            id:2,name:"copy"
        },
        {
            id:3,name:"book"
        }
    ]
  return (
    <div>
      {
        data.map((Map2)=>
        <div key={Map2.id}>
            {Map2.name}
        </div>)
      }
    </div>
  )
}
export default Map2;