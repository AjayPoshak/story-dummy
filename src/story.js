import PropTypes from 'prop-types'
import React, { useState, memo } from 'react';

import Timeline from './Timeline';
import StorySlider from './StorySlider';

import './App.css';

function detectImageDimensions(imgURL) {
  const img = document.createElement('img');
  img.src = imgURL;

  return new Promise((resolve) => {
    const poll = setInterval(() => {
      if (img.naturalWidth) {
        clearInterval(poll);
      }

      return resolve({ width: img.naturalWidth, height: img.naturalHeight });
    }, 10);
  });
}

const Story = (props) => {
  const { children, delay, getCurrentSlideIndex, setFocusToIndex } = props;
  
  const imageCount = React.Children.count(children);

  const [pause, setPause] = useState(false)
  const [w, setW] = useState(400);
  const [idx, setIdx] = useState(0);

  if (w === 0) {
    detectImageDimensions(children[0].props.src).then((res) => {
      setW(res.width);
    });
  }

  const nextImage = () => {
    if (idx < imageCount - 1) {
      setIdx(idx + 1);
    }
  };

  const previousImage = () => {
    if(idx > 0) setIdx(idx - 1);
  }

  const holdTap = () => {
    console.log('holdTap')
    setPause(true)
  }
  
  const unTap = () => setPause(false)

  return (
    <section className="insta-story-container">
      <button type='button' onClick={nextImage}>Next</button>
      <button type='button' onClick={previousImage}>Previous</button>
      <button type='button' onClick={unTap}>UnTap</button>
      <StorySlider imageWidth={w} pivot={setFocusToIndex || idx} holdTap={holdTap} isPause={pause}>{children}</StorySlider>
      <Timeline animationIndex={idx} count={imageCount} nextImage={nextImage} isPause={pause}/>
    </section>
  );
};

Story.defaultProps = {
  setFocusToIndex: null,
  getCurrentSlideIndex: () => {},
}

Story.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  getCurrentSlideIndex: PropTypes.func,
  setFocusToIndex: PropTypes.number,
  delay: PropTypes.string.isRequired,
}

export default memo(Story);
