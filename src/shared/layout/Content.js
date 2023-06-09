// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Content extends Component {
//   static propTypes = {
//     children: PropTypes.element.isRequired
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <main>
//         {children}
//       </main>
//     );
//   }
// }

// export default Content;

import React from 'react';
import PropTypes from 'prop-types';

const Content = props => { 
  const { children } = props;

  return ( 
    <main>
      {children} 
    </main>
  ); 
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;