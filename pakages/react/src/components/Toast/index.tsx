import React, { ComponentProps, ElementType } from "react";
import { ConteinerToast, TextCntainer, TextInform, TextWarning } from "./styles";
import {Cross1Icon} from '@radix-ui/react-icons'



export interface ToastProps
  extends ComponentProps<typeof ConteinerToast> {}

export function Toast() {
 
 
    return(
        <ConteinerToast>
          <TextCntainer>
            <TextWarning>Agendamento Realizado</TextWarning>
            <TextInform>Quarta-feira, 23 de Outubro às 16h</TextInform>
          </TextCntainer>
            <Cross1Icon style={{color:'gray'}}/>
        </ConteinerToast>
 )
}

