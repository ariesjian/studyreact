import React from 'react'

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef()

    // { current: null }
  }

  componentDidMount() {
    // console.log(`span1: ${this.refs.ref1.textContent}`)
    // console.log(`span2: ${this.ref2.textContent}`)
    // console.log(`span3: ${this.ref3.current.textContent}`)
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    }, 1000)
  }
/*
*   ref的三种使用方法  已经废弃的方法
*   一：stringRef :下面的第一行的例子 <p ref="stringRef">span1</p>
*   二：function : 第二行例子
*   三：createRef:第三行例子 constructor（）{}
* */
  render() {
    return (
      <>
        <p ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}

// export default () => {
//   return <div>Ref</div>
// }
