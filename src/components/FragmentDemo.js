// import React from "react";

// function FragmentDemo() {
//   return (
//     <div>
//       <h1>FragmentDemo</h1>
//       <p> This describe the fragment demo component</p>
//     </div>
//   );
// }

// export default FragmentDemo;

// in this actually without div tag it gives error that atleast 1 psrent element should be present but by adding div tag one more element gets added in the DOM tree and there is div tag in App.js so this is the extra one so to remove this do as given in below code
//Fragments basically let us grp a list of children elements without adding extra node to the DOM
//It can accept key attributes while rendering the list

// u can also use <> ... </>empty opening and closing tags
// React.Fragment

import React from "react";

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>FragmentDemo</h1>
      <p> This describe the fragment demo component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
