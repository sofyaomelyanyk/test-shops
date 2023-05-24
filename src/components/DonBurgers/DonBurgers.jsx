import donBurgers from "../../data/food.json";
import { Title, Wrap, List, Name } from "./DonBurgers.styled";

export const DonBurgers = () => {
  const burger = donBurgers;

  console.log(donBurgers);

  return (
    <>
      <Title>Don Burgers</Title>
      <Wrap>
        {burger.map(({ id, title, price, weight }) => {
          return (
            <List key={id}>
              <Name>{title}</Name>
              <li>Price: {price}UAH</li>
              <li>Weight: {weight} gram</li>
            </List>
          );
        })}
      </Wrap>
    </>
  );
};
