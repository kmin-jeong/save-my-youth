import React, { useState, useEffect } from 'react';
import { SubscriptionUsedFront } from '../types';
import SearchCardList from './SearchCardList';
import useSubscription from '../hooks/useSubscription'
import styled from 'styled-components';
import PALETTE from '../constants/palette';

export const PostsWrapper = styled.div`
  max-width: 400px;
  width: 10%;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 1rem 0;
  padding-left: 1em;
  font-size: 0.8em;
  color: ${PALETTE.DARK_020};
`;

type SearchCardListProps = {
    subData: SubscriptionUsedFront[]
}



const SearchResult = ({ subData }: SearchCardListProps) => {

    return (
        <div>
            <MessageWrapper>총 {subData.length}개의 공고가 있습니다</MessageWrapper>
            <SearchCardList type={'popular'} subData={subData}></SearchCardList>
        </div>
    );
}

export default SearchResult;