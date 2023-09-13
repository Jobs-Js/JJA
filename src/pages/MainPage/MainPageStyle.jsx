import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const fadeOutBackground = keyframes`
    from{
    }
    to{
        background: transparent bottom / 100% 85px;
    }
`;

const fadeOutBgAnimate = p => css`
    animation: ${p.isFadeOut &&
    css`
        ${fadeOutBackground} 0.25s forwards;
    `};
`;

export const MainWrapper = styled.div`
    background: url(${({ bookShelfImg }) => bookShelfImg}) no-repeat bottom /
        100% 85px;
    ${fadeOutBgAnimate}
    @media screen and (min-height: 925px) {
        height: calc(100vh - 104px);
    }
`;

export const BookList = styled.ul`
    position: relative;
    width: max-content;
    margin: 0 auto;
    background: url(${({ bookShelfImg }) => bookShelfImg}) no-repeat bottom /
        100% 85px;
    padding: 0 80px 0 30px;
    ${fadeOutBgAnimate}

    @media screen and (min-height: 925px) {
        display: flex;
        align-content: end;
        flex-wrap: wrap;
        height: calc(100vh - 104px);
    }
`;

const fadeOutBooks = keyframes`
    0%{
        opacity: 1;
    }
    90%{
        opacity: 0;
    }
    100%{
        opacity: 0;
        display: none;
    }
`;

const fadeInBook = keyframes`
    0%{
        transform: scale(1.1) rotate(0);
    }
    100%{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(1.0);
    }
`;

export const BookItem = styled.li`
    display: inline-block;
    margin: 60px 2px 80px 0;
    width: 100px;
    height: 680px;
    background: url(${({ bgUrl }) => bgUrl}) no-repeat top / contain;
    transition: all 0.5s;

    &:nth-of-type(3) {
        transform: rotate(16deg);
        margin: 0 90px 0 88px;
    }
    &:nth-of-type(9) {
        transform: rotate(-11deg);
        margin-left: 63px;
    }

    &:nth-of-type(${({ selectedBook }) => selectedBook}) {
        margin: 60px 0 80px;

        ${({ isFadeOut }) =>
            isFadeOut &&
            css`
                animation: ${fadeInBook} 0.5s forwards;
            `};
    }

    &:hover {
        transform: scale(1.1);
    }

    &:not(:nth-of-type(${({ selectedBook }) => selectedBook})) {
        ${({ isFadeOut }) =>
            isFadeOut &&
            css`
                animation: ${fadeOutBooks} 0.3s forwards;
            `};
    }

    button {
        width: 680px;
        height: 100px;
        transform: rotate(90deg) translateX(-100px);
        transform-origin: 0% 100%;
        font-weight: 600;
        padding: 0 44px;
        display: flex;
        align-items: center;
        gap: 52px;
    }

    span {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.xl};
        transform: rotate(-90deg);
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.large};
        line-height: 160%;
    }
`;
