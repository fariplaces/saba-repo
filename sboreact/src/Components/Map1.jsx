

export const Map1 = () => {
const data =[
    {
        id:1,name:"bilal"
    },
    {
        id:2,name:"faisal"
    },
    {
        id:3,name:"saba"
    }
]



  return (
    <div>
    {
   
    data.map((Map1)=>
    <div key={Map1.id}>
        {Map1.name}
    </div>)
    
 }
 </div>
  )
}
export default Map1;