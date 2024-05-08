// function Btn() { // Function name starts with a capital letter
//     const handleClick = () => {
//       console.log('clicked');
//     };
  
//     return (
//       <button onClick={handleClick}>
//         Click Me
//       </button>
//     );
//   }
  
//   export default Btn;
  
function Btn() { // Function name starts with a capital letter
    const handleClick = () => {
      console.log('mouseover');
    };
  
    return (
      <button onMouseOver={handleClick}>
        Click Me
      </button>
    );
  }
  
  export default Btn;
  