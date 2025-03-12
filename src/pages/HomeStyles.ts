import styled from "styled-components";

import backgroundImage from "./image/Background.png"

interface DifferentiatorsItem {
  color: string
}

export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;

  height: 34rem;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
`

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: ${props => props.theme["base-title"]};
  line-height: 130%;
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${props => props.theme["base-subtitle"]};
`

export const DifferentiatorsItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  & > p{
    color: ${props => props.theme["base-text"]};
  }
`

export const DifferentiatorsIcon = styled.div<DifferentiatorsItem>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.color};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

`

export const TitleSection = styled.div`
  margin-bottom: 4.125rem;
`

export const DifferentiatorsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  grid-auto-flow: row;
`