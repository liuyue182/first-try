import React, { Component } from 'react';

// class PageA extends Component {
// //     constructor(props) {
// //         super(props);
// //
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 A
// //                 {this.props.match.params.id}
// //             </div>
// //         );
// //     }
// // }

const PageA=({match})=>{
    return (
        <div> A
            {match.params.id}
        </div>
    )
}
export default PageA;
