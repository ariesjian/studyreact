/**
 * 必须要react和react-dom 16.7以上,到2019年的第一季度才会正式发布
 */
//  用hooks来模拟生命周期的例子
import React, { useState, useEffect } from 'react'
// 这不是class 和 React.Component 所以没有setState
export default () => {
  //  因为这里没有this，所以这里没有使用this.setState,而是使用useState来获取state里面的值
  const [name, setName] = useState('jokcy')
// useEffect 相当于componentDidMont和componeUpdataMont
  useEffect(() => {
    console.log('component update')

    return () => {
      console.log('unbind')
    }
  }, []);// []表示执行一次就好了，自动退出了

  return (
    <>
      <p>My Name is: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}
