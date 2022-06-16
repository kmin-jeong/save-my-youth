import { SubscriptionUsedFront } from '../types';
import SearchCardItem from './SearchCardItem';

export type SearchCardListProps = {
  subData: SubscriptionUsedFront[]
}

const SearchCardList = ({ subData }: SearchCardListProps) => {
  return ( 
    <article>
      {subData &&
        subData.map((data) => {
          const SubscriptionUsedFront:SubscriptionUsedFront = {
            id: data.id,
            houseName: data.houseName,
            houseLocation: data.houseLocation,
            applyStartDate: data.applyStartDate || '',
            applyEndDate: data.applyEndDate || '2022-05-23',
          };

          return (
            <SearchCardItem key={SubscriptionUsedFront.id} subscription={SubscriptionUsedFront} />
          );
        })}
    </article>
  );
};

export default SearchCardList;
