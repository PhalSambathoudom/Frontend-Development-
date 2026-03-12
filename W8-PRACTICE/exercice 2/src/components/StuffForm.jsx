import React from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);

  function handleAdd() {
    console.log(`A new object named ${name}, price ${price}$ will be added to the list`);
    onAddStuff({ name, price });
  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="button" onClick={handleAdd}>
        Add Stuff
      </button>
    </form>
  );
}