import styled, { css } from "styled-components";
import { Button, Flex } from "../../common/components/styled";

export const Header = styled.header<{ $isScrolled: boolean }>`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.97rem;
  transition: box-shadow 0.3s ease;

  ${({ $isScrolled }) =>
    $isScrolled && "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)"}
`;

export const Main = styled.main`
  margin-top: 5.85rem;
`;

const weatherCardSharedStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21rem;
  background-color: #fff;
  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

export const MainWeatherCard = styled.div`
  ${weatherCardSharedStyles}
  flex-direction: column;
  height: 26rem;
  padding: 3.5rem 4.5rem;
`;

export const MainWeatherCardNowText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightgray};
  align-self: flex-start;
`;

export const MainWeatherCardIcon = styled.img`
  width: 11rem;
  margin: -2.5rem 0 -2.5rem;
`;

export const MainWeatherCardTemperature = styled.div`
  font-size: 6.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ChangeTempUnitButton = styled(Button)`
  width: 100%;
`;

export const ItemWeatherCardsFlexContainer = styled(Flex)`
  width: 45rem;
`;

export const ItemWeatherCard = styled.div`
  ${weatherCardSharedStyles}
  height: 12.5rem;
  padding: 1.25rem 5rem;
`;

export const ItemWeatherCardTitle = styled.h4`
  font-weight: 400;
`;

export const ItemWeatherCardValue = styled.div`
  font-size: 1.9rem;
  font-weight: 600;
  margin-top: 0.2rem;
`;

export const ItemWeatherCardIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const ForecastWeatherFlexWrapper = styled(Flex)`
  background-color: #fff;
  padding: 2rem;
`;

export const ForecastWeatherFlexCard = styled(Flex)`
  font-size: 1.1rem;
  width: 38rem;
  height: 4.87rem;
  background: ${({ theme }) => {
    const { primary, secondary } = theme.colors;
    return `linear-gradient(90deg, ${secondary} 0%, ${primary} 100%);`;
  }};
  padding: 0 1.9rem;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 100px;

  div {
    color: #fff;
    font-weight: 700;
  }
`;
