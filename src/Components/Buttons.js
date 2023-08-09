import React from 'react'
import { Button } from 'native-base'
export default function Buttons({mt,bg,color,children,onPress}) {
  return (
   <Button w='sm' h={55} mt={mt} rounded='full' bg={bg} _text={{
    color:color,fontWeight:'bold',textAlign:'center'
   }}
   _pressed={{bg:bg}}
   onPress={onPress}>
    {children}
   </Button>
  )
  
}

