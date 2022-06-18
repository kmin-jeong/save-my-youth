import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Pbutton = styled.button<{ isTarget: boolean }>`
  margin: 20px 0;
  width: 40px;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.isTarget ? '#8E4FF8' : '#d7c0ff')};
  * {
    margin: auto;
  }
`;

interface Props {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const SearchPaginationBtn = ({ totalPages, currentPage, setCurrentPage }: Props) => {
    const [pageState, setPageState] = useState<Array<number>>([]);

    useEffect(() => {
        const arr: number[] = [];
        new Array(totalPages).fill(0).forEach((num, index) => {
            arr.push(index + 1);
        });
        setPageState(arr);
    }, [currentPage, totalPages]);

    const handlePagination = (number: number) => {
        if (number > 0 && number < totalPages + 1) {
            setCurrentPage(number);
            window.scrollTo(0, 0);
        }
    };
    return (
        <div>
            {pageState.map((num) => (
                <li key={num}>
                    <Pbutton
                        onClick={() => {
                            if (num != currentPage) handlePagination(num);
                        }}
                        isTarget={currentPage === num}
                    >
                        {num}
                    </Pbutton>
                </li>
            ))}
        </div>
    );
}
export default SearchPaginationBtn;