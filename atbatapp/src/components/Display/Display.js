import React, { Component } from 'react';

const Display = props => {
  const { balls, strikes } = props;

  return (
    <>
    <h3>Counts</h3>
    <div>
      {balls} balls and {strikes} strikes
    </div>
    </>
  )
}

export default Display;

// class Display extends Component {
//   // keep track of balls and strikes with state
//   state = {
//     ballCount: 0,
//     strikeCount: 0
//   }
//
//   render() {
//     return (
//       <div>
//         <div>
//           {/* display ballCount from state */}
//           <h2 data-testid='balls title'>Balls:</h2>
//           <div data-testid='balls count'>{this.state.ballCount}</div>
//         </div>
//         <div>
//           {/* display strikeCount from state */}
//           <h2 data-testid='strikes title'>Strikes:</h2>
//           <div data-testid='strikes count'>{this.state.strikeCount}</div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Display;
