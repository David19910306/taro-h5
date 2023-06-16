import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 鏄皢瑕佷細娓叉煋鐨勯〉闈�
  return children
}

export default App
