import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'


export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
      children: (
        <>
          <span>Testando o elemento Box</span>
        </>
      ),
    },
  } as Meta<ToastProps>
 


export const Primary: StoryObj<ToastProps> = {}
    