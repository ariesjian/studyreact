/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
*  异步加载的衣服方法组件  可以看例子 SuspenseDemo，区别suspense和lazy
*
* */
import type ,{LazyComponent, Thenable} from 'shared/ReactLazyComponent';

import {REACT_LAZY_TYPE} from 'shared/ReactSymbols';

export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,// 传递的参数方法
    // React uses these fields to store the result.
    _status: -1,//  用来记录当前Thenable的对象处于的状态，一般情况是promise，此时的promise处于pendding状态，是-1；后期进行渲染的时候 会进行不一样的处理
    _result: null,// 用来记录Thenable对象result之后返回的属性，todo 不懂
  };
}
