import React, { Suspense, lazy } from 'react'
//  lazy的使用
const LazyComp = lazy(() => import('./lazy.js'))

let data = ''
let promise = ''
function requestData() {
  if (data) return data
  if (promise) throw promise ;// 注意使用的是throw
  promise = new Promise(resolve => {
    setTimeout(() => {
      data = 'Data resolved'
      resolve()
    }, 2000)
  })
  throw promise  // 注意使用的是throw
}

function SuspenseComp() {
  const data = requestData();

  return <p>{data}</p>
}

export default () => (
    // fallback 开始显示 loading data，后来显示子组件内容 requestData做到的，Suspense异步组件,截止到2019年中旬才可以使用 现在还不完善，Suspense组件会等所有的子组件都加载完了之后才会显示组件的内容，否则会一直显示fallback里面的内容
  <Suspense fallback="loading data">
    <SuspenseComp />
    <LazyComp />
  </Suspense>
)
