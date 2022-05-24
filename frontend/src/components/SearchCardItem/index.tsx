import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BlueHeart } from '../../assets/icons/blueHeart.svg';
import PALETTE from '../../constants/palette';
import { SearchCardItemProps, Subscription } from '../../types';

const StyledBox = styled.div`
  width: 90%;
  height: 30%;
  margin: 1rem;
  box-sizing: border-box;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border: 0.1rem solid ${PALETTE.PRI_LIGHT_010};
  border-radius: 0.5rem;
  background-color: ${PALETTE.WHITE}
  color: ${PALETTE.BLACK};
`;

const StyledText = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTitle = styled.li`
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 0.1rem;
`;

const StyledLocal = styled.li`
  font-size: 0.7em;
  color: ${PALETTE.PRI_DARK_010};
`;

const StyledDate = styled.li`
  font-size: 0.7em;
  color: ${PALETTE.DARK_020};
`;

const StyledLike = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 0.7em;
  color: ${PALETTE.DARK_020};
`;

const SearchCardItem = ({ subscription }: SearchCardItemProps) => {
  const navigate = useNavigate();

  return (
    <StyledBox>
      <StyledCard key={subscription.id} onClick={() => navigate('/detail')}>
        <StyledText>
          <StyledTitle>{subscription.houseName}</StyledTitle>
          <StyledLocal>{subscription.houseLocation}</StyledLocal>
          <StyledDate>
            {subscription.applyStartDate}~{subscription.applyEndDate}
          </StyledDate>
        </StyledText>
        <StyledLike>
          <BlueHeart />
          126
        </StyledLike>
      </StyledCard>
    </StyledBox>
  );
};

export default SearchCardItem;
