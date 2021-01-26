import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className, logo }) {
  return (
    <img src={logo} className={className}/>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 280px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;