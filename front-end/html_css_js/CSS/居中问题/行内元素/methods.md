# 水平居中
```css
text-align: center;
```

# 垂直居中

####单行垂直居中

设置父元素行号与高度一致

```css
height: 100px;
line-height: 100px;
```

#### 多行垂直居中
父元素<code>display</code>设为<code>table</code>,子元素<code>display</code>设为<code>table-cell</code>且<code>vertical-align:middle;</code>

```css
.container{
  display: table;
}
.content{
  dispaly: table-cell;
  vertical-align: middle;
}
```