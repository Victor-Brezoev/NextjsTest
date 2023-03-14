import Image from "next/image";
import { Card } from "../../collections";

import {
  StyledWrapperMediaAndList,
  StyledContainerMediaAndList,
  StyledHeaderMediaAndList,
  StyledInnerMediaAndList,
  StyledImageContainer,
  StyledMediaAndListHeading,
  StyledMediaAndListSubheading,
  StyledCards,
} from "./elements";

export const MediaAndList = ({ image, title, description, listItems }) => {
  return (
    <StyledWrapperMediaAndList>
      <StyledContainerMediaAndList>
        <StyledHeaderMediaAndList>
          {title && (
            <StyledMediaAndListHeading>{title}</StyledMediaAndListHeading>
          )}
          {description && (
            <StyledMediaAndListSubheading>
              {description}
            </StyledMediaAndListSubheading>
          )}
        </StyledHeaderMediaAndList>

        <StyledInnerMediaAndList>
          <StyledImageContainer>
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImageContainer>

          <StyledCards>
            {listItems &&
              listItems.map((element, id) => (
                <Card
                  key={id}
                  title={element.title}
                  description={element.description}
                  image={element.image}
                  link={element.link}
                />
              ))}
          </StyledCards>
        </StyledInnerMediaAndList>
      </StyledContainerMediaAndList>
    </StyledWrapperMediaAndList>
  );
};
