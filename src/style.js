import styled, {keyframes} from 'styled-components'

const loader = keyframes`
    0% {
        transform: scaleX(0);
    }
    100% {
        transform: scaleX(1);
    }
`

export const TimelineArticle = styled.article `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .__fill {
        background-color: #fff;
    }

    .__active::after {
        content: '';
        width: 100%;
        height: 2px;
        display: block;
        background-color: #fff;
        transform-origin: 0% center 0px;
        animation: ${loader} 3s linear;
        animation-play-state: ${p => p.isPause ? 'paused' : 'running'}
    }
`
export const TimelineElement = styled.div`
    width: 20%;
    height: 2px;
    margin: 5px;
    backgroundColor: #999;
`