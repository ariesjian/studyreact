import React from 'react'

const TargetComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))
/*
*
*  ref 是获取的组件的实例  如果有点组件没有实例 就是说组件是pureComponent的时候
  *  就会报错  所以forwardRef就可以避免这样的情况  将实例的内容作为一个参数传递进去
  *  就如下面的例子这样 开始的时候input是没有内容的，后来在componentDidMount将其赋予了值
* */


export default class Comp extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.ref.current.value = 'ref get input'
  }

  render() {
    return <TargetComponent ref={this.ref} />
  }
}
