import { Tooltip, TooltipProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title:'Form/Tooltip',
    component:Tooltip,
    args: {
        children: (
            <>
              <span>Testando o elemento Box</span>
            </>
          ),
    } 
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}