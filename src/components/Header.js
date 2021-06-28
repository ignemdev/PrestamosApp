import React, { Fragment } from 'react';

// function Header(props) {
//     const { titulo, descripcion } = props;
//     return (
//         <Fragment>
//             <h1>{titulo}</h1>
//             <h1>{descripcion}</h1>
//         </Fragment>
//     )
// }

const Header = ({ titulo }) => (<h1>{titulo}</h1>)

export default Header;

// export default Header;