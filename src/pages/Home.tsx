

const resList = [
{
 resName: "Meghana Foods",
 resId: 1
},
{
 resName: "KFC",
 resId: 2
},
{
 resName: "McDonald's",
  resId: 3
},
{
 resName: "Dominos",
  resId: 4
},
{
 resName: "Pizza Hut",
  resId: 5
}
]

const RestaurantCard = (props) => {
  const { resName } = props;
 return(
 <div className="resCard">
  {resName}
 </div>
 )
}

export default function Home()  {
  return (
    <div className="resContainer" >
      {resList.map((restaurant) => (
        <RestaurantCard  resName={restaurant.resName} key={restaurant.resId} />
      ))}
    </div>
  );
}


