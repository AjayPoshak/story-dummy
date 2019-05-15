import React, { memo } from 'react';
import PropTypes from 'prop-types'

import {TimelineElement, TimelineArticle} from './style'

const Timeline = (props) => {
  const { animationIndex, count, nextImage, isPause } = props;
  console.log('isPause ', isPause)
  const animationEndCB = () => {
    console.log('animationEndCB')
    nextImage()
  }

  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      let className = '';
      if (i < animationIndex) {
        className = '__fill';
      } else if (i === animationIndex) {
        className = '__active';
      }

      const element = <TimelineElement className={className} key={i} onAnimationEnd={animationEndCB}/>;
      elements.push(element);
    }
    return elements;
  };

  const timelineStyle = {
    width: 'inherit',
    position: 'fixed',
    top: '60px',
  }

  return (
    <section style={timelineStyle}>
      <TimelineArticle isPause={isPause}>
        {renderElements()}
      </TimelineArticle>
    </section>
  );
};


Timeline.propTypes = {
  animationIndex: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
}

export default memo(Timeline);
