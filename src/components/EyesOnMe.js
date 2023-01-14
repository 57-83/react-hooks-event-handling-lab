// Code EyesOnMe Component Here
function EyesOnMe() {
  function handleFocus(event) {
    console.log("Good!");
    console.log(event.target.value);
  }
  function handleBlur(event) {
    console.log("Hey! Eyes on me!");
    console.log(event.target.value);
  }
  return (
    <div>
      <button type="text" onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}
export default EyesOnMe;
