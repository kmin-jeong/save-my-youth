import React, { useState, useEffect } from 'react';
import { SubscriptionUsedFront } from '../types';
import SearchCardList from './SearchCardList';
import SearchPaginationBtn from './SearchPaginationBtn';


type SearchCardListProps = {
    subData: SubscriptionUsedFront[]
}

const Pagenation = ({ subData }: SearchCardListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (cur: SubscriptionUsedFront[]) => {
        const currentPosts = cur.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [subData]);

    return (
        <div>
            <SearchCardList subData={currentPosts(subData)}></SearchCardList>
            {subData.length > 0 && (
                <SearchPaginationBtn
                    totalPages={Math.ceil(subData.length / postsPerPage)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
}

export default Pagenation;