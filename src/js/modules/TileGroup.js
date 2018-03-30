import React from 'react';
import PropTypes from 'prop-types';

import Tile from 'js/modules/Tile';
import SectionHeader from 'js/modules/SectionHeader';
import I18nLink from 'js/modules/I18nLink';


const TileGroup = ({ tiles, tag, border, title, description, titlePath, direction }) => (
  <div className={`coa-TileGroup ${border ? 'coa-TileGroup--border' : ''}`}>
  { title && (
    <div className="coa-TileGroup__title">
      <I18nLink to={titlePath}>
        <SectionHeader title={title} arrow={true} />
      </I18nLink>
    </div>
  )}
  { description && <p>{description}</p> }
    <div className={`
      coa-TileGroup__tiles
      ${direction ? `coa-TileGroup__tiles--${direction}` : ''}
    `}>
      {
        tiles.map(({ url, text }, index) =>
        <Tile
          url={url}
          text={text}
          tag={tag}
          key={index}
        />
      )
    }
    </div>
  </div>
)

TileGroup.propTypes = {
  tiles: PropTypes.array.isRequired,
  tag: PropTypes.string,
  border: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  titlePath: PropTypes.string,
};

export default TileGroup;
