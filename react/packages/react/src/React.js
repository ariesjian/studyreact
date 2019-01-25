/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ReactVersion from 'shared/ReactVersion';
import {
  REACT_CONCURRENT_MODE_TYPE,
  REACT_FRAGMENT_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
} from 'shared/ReactSymbols';

import {Component, PureComponent} from './ReactBaseClasses';
import {createRef} from './ReactCreateRef';
import {forEach, map, count, toArray, only} from './ReactChildren';
import {
  createElement,
  createFactory,
  cloneElement,
  isValidElement,
} from './ReactElement';
import {createContext} from './ReactContext';
import {lazy} from './ReactLazy';
import forwardRef from './forwardRef';
import memo from './memo';
import {
  createElementWithValidation,
  createFactoryWithValidation,
  cloneElementWithValidation,
} from './ReactElementValidator';
import ReactSharedInternals from './ReactSharedInternals';
import {enableStableConcurrentModeAPIs} from 'shared/ReactFeatureFlags';
// 这里是所有react暴露出来的api 2019/1/22 现在真正了解的没有几个  参考电子书学习:https://react.jokcy.me/ todo
const React = {
  Children: { // 这个对象提供了一堆帮你处理props.children的方法，因为children是一个类似数组但是不是数组的数据结构，如果你要对其进行处理可以用React.Children外挂的方法
    map,
    forEach,
    count,
    toArray,
    only,
  },
  createRef,// 新的ref用法，React即将抛弃<div ref="myDiv" />这种string ref的用法，将来你只能使用两种方式来使用ref
  Component, // 检查组件是否需要更新
  PureComponent,// 检查组件是否需要更新

  createContext, // todo 写个例子试试
  forwardRef, // forwardRef是用来解决HOC组件传递ref的问题的 todo
  lazy, // todo
  memo, // todo

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  /*
  * ReactElement通过createElement创建，调用该方法需要传入三个参数：
  type 类型字符串或者变量
  config 组件或者标签的属性 class,id,data-id，等等
  children 内容 或者是子集 可以去babel上面子集试试就知道了
  * */
  createElement: __DEV__ ? createElementWithValidation : createElement, // 创建ReactElement
  cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement, // 克隆ReactElement
  createFactory: __DEV__ ? createFactoryWithValidation : createFactory, // 创建ReactElement工厂 todo
  isValidElement: isValidElement, // 是否是一个ReactElement

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals,
};

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
} else {
  React.unstable_ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.unstable_Profiler = REACT_PROFILER_TYPE;
}

export default React;
