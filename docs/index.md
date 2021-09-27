# 简介

## 统一图标框架

### 图标资源丰富

这是一个超 10w 矢量图标的图标库，一个框架，包含众多图标。它是 iconfont 字体图标的替代品，快速且易于使用。  
Iconify 将 svg 的像素保真呈现与 iconfont 的易用性相结合，同时又比任何字体图标或 SVG 框架有更多的选择。  
您可以在同一页面或应用上，用一种语法来使用 Font Awesome, Material Design Icons, Unicons, Dashicons 和许多其他图标集，极为方便。  
![图标资源丰富](/iconify-book/dist/images/0-3.gif#w50)

### 加载迅速

图标从 Iconnify API 批量加载，减少了请求次数。  
Iconnify 的 lib 包小而快。  
iconify api 托管在遍布全球的服务器网络上。访问者总是连接到最近的服务器，将加载时间减少到几分之一秒。

![服务器分布](/iconify-book/dist/images/0-1.png#w50)

### 按需加载

字体和其它 SVG 框架即使您只使用几个图标，也会被迫加载所有图标资源。  
Iconify 的工作方式不同。它仅加载页面上使用的图标。图标作为浏览器缓存的外部资源加载，而不是嵌入到每个页面中。没有其它 SVG 框架可以做到这一点。  
这么做的好处是您不再局限于一个 font or svg 集合。您可以在同一页面上使用多个集合，而无需加载上兆的数据！  
![按需加载](/iconify-book/dist/images/0-2.gif#w50)  
有关可用图标的列表，请参见[图标集合](https://iconify.design/icon-sets/)页面。

## 如何使用

Iconify 非常易于使用：  
您可以使用 CSS 更改图标尺寸和颜色，就像图标字体一样。   
拿原生的写法举例，只需要在页面引入该 lib 即可

```html
<script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></script>
```

图标代码如下：

```html
<span class="iconify" data-icon="fa:home"></span>
<span class="iconify" data-icon="noto:bird"></span>
```

如果你不用原生的写法，不想直接引入脚本。Iconify 也支持像 React、 Vue、 Svelte、 Ember 的框架。除此之外 Iconify 有很多周边工具，如用来渲染 svg 和转换图标，这个可以后边了解。


## 最新动态

2021 年 8 月 9 日：新的图标组件现在稳定了  
2021 年 8 月 7 日：图标集的新网站  
2021 年 7 月 20 日：Ember 组件可用  
2021 年 7 月 1 日：更新了 SVG 框架和图标组件  
2021 年 6 月 16 日：SVG 框架版本 2.0.2

## 工作原理

### 第一步：查找占位符
脚本会查找占位符
```html
<p>This is a sample icon <span class="iconify" data-icon="fa:home"></span></p>
<div class="icon-on-left">
  <span class="iconify" data-icon="mdi:alert"></span>
</div>
```

如上，iconify.min.js 脚本会根据某些标识，如`class="iconify" data-icon="mdi:alert"`来查找 icon 的占位符元素。

### 第二步：提取icon标识

还是如上代码，脚本会根据占位符属性`data-icon`提取出所需要加载的图标`mdi:alert`

### 第三步：下载图标
根据第二步拿到的icon标识，请求icon。   
脚本连接到 Iconify API 资源服务器， 并检索页面上找到的所有图标的 SVG 数据。  
Iconify API 托管在遍布全球的服务器网络上，因此数据可以在毫秒内从任何位置加载。
![下载图标](/iconify-book/dist/images/0-4.gif#w50)

### 第四步：替换占位符
脚本会将下载到的 svg 替换占位符、

```html
<p>
  This is a sample icon <svg class="iconify" data-icon="fa:home" ...>...</svg>
</p>
<div class="icon-on-left">
  <svg data-icon="mdi:alert" ...>...</svg>
</div>
```
