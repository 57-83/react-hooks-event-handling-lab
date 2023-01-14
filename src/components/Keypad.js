// Code Keypad Component Here

function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="password" onChange={handleChange}></input>
    </div>
  );
}

export default Keypad;
