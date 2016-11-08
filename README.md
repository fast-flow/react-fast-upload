# react-fast-upload

> React Upload

[🔗 Live demo](https://fast-flow.github.io/react-fast-upload/)  
[🕐 Releases](https://github.com/fast-flow/react-fast-upload/releases)

[![Build Status](https://api.travis-ci.org/fast-flow/react-fast-upload.svg)](https://travis-ci.org/fast-flow/react-fast-upload) [![NPM version](https://img.shields.io/npm/v/https://fast-flow.github.io/react-fast-upload/.svg?style=flat)](https://npmjs.org/package/https://fast-flow.github.io/react-fast-upload/) [![NPM downloads](http://img.shields.io/npm/dm/https://fast-flow.github.io/react-fast-upload/.svg?style=flat)](https://npmjs.org/package/https://fast-flow.github.io/react-fast-upload/)

🌀 [Example](./example/) 🌀 [Doc](./doc/) 🌀 [Test](./test/)  

## 📦 Install

```shell
npm i react-fast-upload --save
```

## 📄 Usage

<div id="demo"></div>

````js
var React = require('react')
var ReactDOM = require('react-dom')
var Some = require('react-fast-upload')
ReactDOM.render(<Some />, document.getElementById('demo'))
````

<!--MARKRUN-HTML
<style>.gc-comments {font:12px/1.5 Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}</style>
<script src="https://unpkg.com/github-comments@latest/gc.js"></script>
<div class="gc-comments" data-repos="fast-flow/react-fast-upload" data-issues="1" >
    <div class="gc-comments-title">
        Comments
    </div>
    <div class="gc-comments-info">
        Synchronous comments <a target="_blank" href="issues_link">issues_link</a>
    </div>
</div>
-->



## 🔨 development

```shell
npm i -g fis3 --registry=https://registry.npm.taobao.org
# Install dependencies | 安装依赖
npm run dep
    # > Suggested Use `yarn` replace `npm run dep` | 建议使用 `yarn` 替代 `npm run dep`
    # npm i -g yarn
    # npm run yi

# Server
npm run fs

# Build
npm run dev


# 构建 gh-pages 版本 到 output/
npm run gh
# 将 output/** 发布到 gh-pages 分支
npm run gh-push
# 构建 npm 要发布的代码到 output/
npm run npm
```

Build based on [fast-boot](https://github.com/fast-flow/boot)

> For npm owner: npm publish Need to be in ./output
