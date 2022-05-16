import styled from 'styled-components';
import Picture from '../../asset/picture.png';
import { ArrowRight } from '../../asset';
import COLOR from '../../constants/color';
import { SaleSchedule } from '../../components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const StyledContentWrapper = styled.div`
  display: flex;
`;

const StyledLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.PRI_DARK_010};
  font-size: 0.9rem;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const StyledDate = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${COLOR.DARK_020};
`;

const StyledImg = styled.img``;

const Detail = () => {
  const [menuCheck, setMenuCheck] = useState<number>(0);
  const [check, setCheck] = useState('schedule');
  const menu = [
    { name: '분양일정', option: 'schedule' },
    { name: '공급대상', option: 'target' },
    { name: '임대조건', option: 'lease' },
    { name: '위치', option: 'location' },
  ];
  const checkList: any = {
    0: <>분양일정 데이터 연동중이에요!</>,
    1: <>공급대상 데이터 연동중이에요!</>,
    2: <>임대조건 데이터 연동중이에요!</>,
    3: <SaleSchedule />,
  };
  const menuList = menu.map((i, index) => (
    <StyledMenuTitle
      key={i.option}
      id={i.option}
      check={check}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.name}
    </StyledMenuTitle>
  ));

  const clickFunc = (e: any, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };

  return (
    <>
      <StyledImg src={Picture} width="100%" alt="picture" />
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLocationWrapper>
            서울특별시 <ArrowRight /> 강북구
          </StyledLocationWrapper>
          <StyledTitle>제 1차 장기전세주택 입주자모집공고</StyledTitle>
          <StyledDate>2022.05.15 등록</StyledDate>
        </StyledTitleWrapper>

        <StyledContentWrapper>{menuList}</StyledContentWrapper>
        {checkList[menuCheck]}
      </StyledWrapper>
    </>
  );
};

export default Detail;
