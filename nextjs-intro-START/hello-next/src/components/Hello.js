// Components should be named with UpperCamelCase
// Files should be named the same as components
// Components should be default exports

// export default function Hello() {
//   return <div>This is my first component</div>;
// }

const Hello = (props) => {
  return (
    <div>
      {props.children}
      <p>Hello {props.title}, nice to meet you!</p>
      <p>Goodbye {props.name}, it was nice knowing you</p>
    </div>
  );
};

export default Hello;
