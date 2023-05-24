import beverages from "../../data/beverages.json";
import { Title, Wrap, List, Name } from "./Beverages.styled";

export const Beverages = () => {
  return (
    <>
      <Title>Beverages</Title>
      <Wrap>
        {beverages.map(({ id, title, price, volume }) => {
          return (
            <List key={id}>
              <Name>{title}</Name>
              <li>Price: {price}UAH</li>
              <li>Volume: {volume} ml</li>
            </List>
          );
        })}
      </Wrap>
    </>
  );
};
