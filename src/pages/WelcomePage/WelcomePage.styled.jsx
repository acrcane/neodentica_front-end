import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color-black);
`;
export const Title = styled.h1`
    color: var(--primary-color-white);
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 3em;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Icon = styled.svg`
    width: 32px;
    height: 32px;
`;
export const Test = styled.img`
    /* width: 200px;
height: 320px; */
`;
export const Text = styled.span`
    color: var(--primary-color-white);
`;

export const Button = styled.button`
    outline: none;
    width: 240px;
    height: 40px;
    border-radius: 15px;
    background: linear-gradient(32deg, #e92d89 0%, #500f75 84%);
    color: var(--primary-color-white);
    background-size: 200% 200%;
    background-position: 100% 100%;
    transition: background-position 0.9s ease;
    &:hover {
        background: linear-gradient(32deg, #500f75 0%, #e92d89 84%);
    }
`
