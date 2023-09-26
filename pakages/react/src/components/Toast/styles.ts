import { styled } from '../../styles'


export const ConteinerToast = styled('div',{
    padding: '$4',
    borderRadius: '$xs',
    backgroundColor: '$gray800',
    border: '1px solid $gray400',
    width:'$80',
    height: '$16',
    display:'flex',
    flexDirection:'row',
    gap:'$20',
})

export const TextCntainer = styled('div', {
    display:'flex',
    flexDirection:'column'
})

export const TextWarning = styled('p',{
  fontFamily:'$default',
  fontSize:'$xl',
  fontWeight:'$bold',
  color:'$white',
  margin:'0'

})

export const TextInform = styled('p', {
  fontFamily:'$default',
  color:'$gray200',
  fontWeight:'$regular',
  fontSize:'$xs',
  
})


