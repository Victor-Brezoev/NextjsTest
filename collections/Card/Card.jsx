// The Card to be exported goes here
import Image from "next/image"
import Link from "next/link"

import {CardMain, CardLink, CardMedia, CardInner, CardTitle, CardText} from "./elements"

export const Card =({image, title, description, link}) => {
    return(
        <CardMain>
            {link && link.text && link.href &&(
                <CardLink>
                    {link.target && link.target==="_blank" ?(
                        <a href={link.href} rel="noreferrer noopener" target="_blank">{link.text}</a>
                    ):
                    <Link href={link.href}>{link.text}</Link>
                    }
                </CardLink>
            )}
            <CardMedia>
                <Image
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
                />
            </CardMedia>
            <CardInner>
                {title && <CardTitle>{title}</CardTitle>}
                {description && <CardText dangerouslySetInnerHTML={{__html:description}}/>}
            </CardInner>
        </CardMain>
       
    )
}