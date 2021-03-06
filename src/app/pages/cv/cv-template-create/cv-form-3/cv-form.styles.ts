import styled, { keyframes } from 'styled-components'

const arrowRecommend = keyframes`
  0%{transform: translateX(5px); opacity: 0.3;};
  100%{transform: translateX(-5px); opacity: 1;}
`

const arrowSubInfo = keyframes`
  0%{transform: translateX(-5px); opacity: 0.3;};
  100%{transform: translateX(5px); opacity: 1;}
`

export const CVFormStyle = styled.div`
  .div-one-category {
    border: 1px solid #fff;
    &:hover {
      border: 1px solid #d1d5db;
    }
  }

  .div-one-category-left {
    border: 1px solid #f3f4f6;
    &:hover {
      border: 1px solid #d1d5db;
    }
  }

  .category-hobby,
  .category-career-goals {
    padding: 0px 4px 4px 4px;
  }

  .metadata-root {
    .metadata-control {
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      .metadata-control {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .arrow-recommend {
    animation: ${arrowRecommend} 2s infinite;
  }

  .arrow-sub-info {
    animation: ${arrowSubInfo} 2s infinite;
  }

  .cv-page-2 {
    top: 1115px;
    left: -100px;
  }
  .cv-page-3 {
    top: 2230px;
    left: -100px;
  }
`
