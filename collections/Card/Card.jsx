// The Card to be exported goes here
import Image from "next/image";
import Link from "next/link";

import {
  StyledCardMain,
  StyledCardLink,
  StyledCardMedia,
  StyledCardInner,
  StyledCardTitle,
  StyledCardText,
} from "./elements";

export const Card = ({ image, title, description, link }) => {
  return (
    <StyledCardMain>
      {link && link.text && link.href && (
        <StyledCardLink>
          {link.target && link.target === "_blank" ? (
            <a href={link.href} rel="noreferrer noopener" target="_blank">
              {link.text}
            </a>
          ) : (
            <Link href={link.href}>{link.text}</Link>
          )}
        </StyledCardLink>
      )}
      <StyledCardMedia>
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      </StyledCardMedia>
      <StyledCardInner>
        {title && <StyledCardTitle>{title}</StyledCardTitle>}
        {description && (
          <StyledCardText dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </StyledCardInner>
    </StyledCardMain>
  );
};
