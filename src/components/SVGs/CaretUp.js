import React from 'react';
import SVG from 'components/SVGs/Svg';

const CaretUp = ({ title = 'Arrow Up', ...rest }) => (
  <SVG title={title} {...rest}>
    <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
  </SVG>
);

export default CaretUp;
