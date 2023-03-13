import Image from "next/image";
import { Card } from "../../collections";

import {
  WrapperMediaAndList,
  ContainerMediaAndList,
  HeaderMediaAndList,
  InnerMediaAndList,
  StyledImageContainer,
  StyledMediaAndListHeading,
  StyledMediaAndListSubheading,
  Cards,
} from "./elements";

export const MediaAndList = ({ image, title, description, listItems }) => {
  return (
    <WrapperMediaAndList>
      <ContainerMediaAndList>
        <HeaderMediaAndList>
          {title && (
            <StyledMediaAndListHeading>{title}</StyledMediaAndListHeading>
          )}
          {description && (
            <StyledMediaAndListSubheading>
              {description}
            </StyledMediaAndListSubheading>
          )}
        </HeaderMediaAndList>

        <InnerMediaAndList>
          <StyledImageContainer>
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImageContainer>

          <Cards>
            {listItems &&
              listItems.map((element, index) => (
                <Card
                  key={index}
                  title={element.title}
                  description={element.description}
                  image={element.image}
                  link={element.link}
                />
              ))}
          </Cards>
        </InnerMediaAndList>
      </ContainerMediaAndList>
    </WrapperMediaAndList>
  );
};
