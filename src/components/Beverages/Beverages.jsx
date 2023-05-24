import beverages from "../../data/beverages.json";

export const Beverages = () => {
  return (
    <>
      <h1>Beverages</h1>
      {beverages.map(({ id, title, price, volume }) => {
        return (
          <ul key={id}>
            <li>{title}</li>
            <li>Price: {price}UAH</li>
            <li>Volume: {volume} ml</li>
          </ul>
        );
      })}
    </>
  );
};
