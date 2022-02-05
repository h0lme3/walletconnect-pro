import React from "react";
import Image from "next/image";

import {
  AnythingCardContent,
  AnythingCardImg,
  AnythingCardWrapper,
} from "./styles";

interface AnythingCardProps {
  src?: StaticImageData | string;
  alt?: string;
  title?: string;
}

const AnythingCard = ({ src = "", alt, title }: AnythingCardProps) => {
  return (
    <AnythingCardWrapper>
      <AnythingCardImg>
        <Image src={src} alt={alt} width={100} height={100} />
      </AnythingCardImg>
      <AnythingCardContent>{title}</AnythingCardContent>
    </AnythingCardWrapper>
  );
};

export default AnythingCard;
