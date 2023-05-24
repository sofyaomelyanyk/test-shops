import donBurgers from "../../data/food.json";

export const DonBurgers = () => {
  const burger = donBurgers;

  console.log(donBurgers);

  return (
    <>
      <h1>Don Burgers</h1>

      {burger.map(({ id, title, price, weight }) => {
        return (
          <ul key={id}>
            <li>{title}</li>
            <li>Price: {price}UAH</li>
            <li>Weight: {weight} gram</li>
          </ul>
        );
      })}
    </>
  );
};
