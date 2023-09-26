import { styled } from '../../styles'


export const ConteinerTooltip = styled('div',{
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    width:'$40',
    height:'$3',
    paddingTop:'$4',
    
    bottom:'50%',
    marginBottom:'$2',
    left:'calc(50% - 10%)',
    border:' solid',
    borderColor:' transparent transparent transparent black',
    

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
   
})


export const ContentText = styled('div',{
 margin:'0',
 


})

export const Arrow = styled('div', {
 width:'0',
 height:'0',
 borderLeft:'10px solid transparent',
 borderRight:'10px solid transparent',
 borderTop:'10px solid $black',
 position:'relative',
 top:'$4',
 margin:'0'
 
})


export const TextTooltip = styled('p', {
    color:'$gray100',
    fontFamily:'$default',
    fontWeight:'$regular',
    fontSize:'$xs',
    paddingTop:'$1',
    margin:'0'
})
