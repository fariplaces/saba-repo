

export const Mapfunction = () => {

  const data=[
  {
    id:1,name:"saba"
  },
  {
    id:2,name:"sahil"
  },
  {
    id:3,name:"fria"
  },
  ]
  return (
    <div>
      { data.map((Mapfunction) =>(
        <div key={Mapfunction.id}>
          {Mapfunction.name}
        </div>  // return each item as a new div element with its id and name  // map function is used to iterate over an array and return a new array with the results of calling a provided function on every element in the array.
      )) 
      }
    </div>
  )
}
export default Mapfunction;