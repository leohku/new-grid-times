import React from 'react';
import styled from 'styled-components/macro';
import ImageWithFallback from '../ImageWithFallback';

import { QUERIES, FAMILIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <ImageGridArea>
          <Image alt={image.alt} src={image.src} />
        </ImageGridArea>
        <Heading>{title}</Heading>
        <div>
          <Abstract>{abstract}</Abstract>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: auto;
    grid-template-areas:
      'image'
      'heading'
      'abstract'
      ;
  }
`;

const ImageGridArea = styled.div`
  grid-area: image;
`;

const Image = styled(ImageWithFallback)`
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 4px;
    margin-bottom: -3px;
  }
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-family: ${FAMILIES.text};
`;

export default SecondaryStory;
