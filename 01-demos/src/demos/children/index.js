import React from 'react'
// react.children的例子2222
function ChildrenDemo(props) {
  console.log(props.children)
  console.log(React.Children.map(props.children, c => [c, [c, c]]));// React.Children.map返回成一层数组，得到是[children1,children1,children1,children2]
  return props.children
}

export default () => (
  <ChildrenDemo>
    <span>1</span>
    <span>2</span>
  </ChildrenDemo>
)
