# 用户手册
## 地图操作

常见的地图操作：放大缩小，拖拽，绘制多边形等操作均能自动记录。

## 视频处理

可使用 assert video，verify video，assert video attributes，assert video attributes 等指令对视频进行检测。其中 assert video|verify video 可检测视频是否已正常加载，assert video attributes|assert video attributes 可检测 video 标签的属性。

> 若目标元素不是 video，则会以当前元素为节点，找出里面包含的第一个 video 进行校验。