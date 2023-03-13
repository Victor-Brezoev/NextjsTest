import styled from "styled-components";
import { SectionHeading } from "../../components/Typography/SectionHeading";
import { SectionSubheading } from "../../components/Typography/SectionSubheading";

export const StyledMediaAndListHeading = styled(SectionHeading)`
  margin-block: 0;
  color: ${(props) => props.theme.black};
`;

export const StyledMediaAndListSubheading = styled(SectionSubheading)`
  margin: 0.25rem 0 0;
`;
export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 25.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    max-width: 290px;
  }
`;
export const WrapperMediaAndList = styled(({ ...props }) => <div {...props} />)`
  padding-block: 100px;
`;

export const ContainerMediaAndList = styled(({ ...props }) => (
  <div {...props} />
))`
  margin: 0 auto;
  padding-inline: 20px;
  max-width: 1280px;
`;
export const HeaderMediaAndList = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  margin-bottom: 50px;
`;
export const InnerMediaAndList = styled(({ ...props }) => <div {...props} />)`
  background: url("/img/background.png") right center/contain no-repeat;
  background-position: -106% -3%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 60px 0;
  }
`;

export const Cards = styled.div`
  color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
  @media (max-width: 1024px) {
    gap: 2.25rem;
  }
`;
