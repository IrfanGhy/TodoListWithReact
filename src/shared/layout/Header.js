//   import React, { Component } from 'react';
//   import PropTypes from 'prop-types';
//   import logo from '../../images/logo.svg';

//   class Header extends Component {
//     static propTypes = {
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string
//     };

//     render() {
//       const { 
//         title = 'Welcome to React', 
//         url = 'http://localhost:3000' 
//       } = this.props;

//       return (
//         <header className="App-header">
//           <a href={url}>
//             <img src={logo} className="App-logo" alt="logo" />
//           </a>
//           <h1 className="App-title">{title}</h1>
//         </header>
//       );
//     }
//   }

//   export default Header;

  import React from 'react';
  import PropTypes from 'prop-types';
  import logo from '../../images/logo.svg';

  // We created a component with a simple arrow function.
  const Header = props => {
    const { 
      title = 'Welcome to React', 
      url = 'http://localhost:3000' 
    } = props;

    return (
      <header className="App-header">
        <a href={url}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="App-title">{title}</h1>
      </header>
    );
  };

  // Even with Functional Components we are able to validate our 
  // PropTypes.
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  };

  export default Header;