//old version before 19

// import { forwardRef } from "react";

// const UserInput = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };
// export default forwardRef(UserInput);

//new version after 19

const UserInput = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
};
export default UserInput;
