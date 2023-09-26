import React, { ComponentProps } from "react";
import { Arrow, ConteinerTooltip, ContentText, TextTooltip } from "./styles";

export interface TooltipProps
  extends ComponentProps <typeof ConteinerTooltip > {}

export function Tooltip() {

return(
    <ConteinerTooltip>
      <ContentText>
      <TextTooltip>
        26 de Outubro - Disponível
        </TextTooltip>
      </ContentText>
      <Arrow></Arrow>
    </ConteinerTooltip>
)
}