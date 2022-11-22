---
pageClass: api-page-class
---

# UI 测试指令

<g-drawer/>

## 窗口（自动录制）

### open <g-button command='open' />

打开一个 URL 并等待页面加载。支持相对和绝对 URL。

<h4>参数</h4>

- url：要打开的 URL（可以是相对的或绝对的）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### set window size <g-button command='set window size'/>

设置浏览器的窗口大小。

<h4>参数</h4>

- 分辨率：使用 WidthxHeight 指定窗口分辨率。（例如：1280x800）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### select frame <g-button command='select frame'/>

在当前窗口中选择一个框架。您可以通过从 0 开始的索引号来选择帧（例如：选择“index=0”的第一个帧，或“index=2”的第三个帧）。对于嵌套帧，您将需要多次调用此命令（树中的每个帧一次，直到您到达所需的帧）。您可以使用“relative=parent”选择父框架。要返回页面顶部，请使用“relative=top”。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制无需手动添加。

### select window <g-button command='select window'/>

在当前界面弹出新窗口。一旦选择了弹出窗口，所有命令都将转到该窗口。窗口定位器使用抓手来选择窗口。

<h4>参数</h4>

- 窗口抓手：表示特定页面（选项卡或窗口）的抓手。

<h4>使用方式</h4>

- 自动录制无需手动添加。

### close <g-button command='close'/>

关闭当前窗口。

<h4>使用方式</h4>

- 自动录制无需手动添加。

## 动作（自动录制）

### type <g-button command='type'/>

设置输入字段的值，就像手动操作一样。也可用于设置组合框、复选框等的值，在这些情况下，值应该是所选选项的值，而不是可见文本。对于 type=file，如果给出了文件路径，它将被上传。

<h4>参数</h4>

- 定位器：元素定位器。

- value：要输入的值。

<h4>使用方式</h4>

- 自动录制、手动添加。

### click <g-button command='click'/>

点击目标元素（例如：链接、按钮、复选框或单选按钮）。

> 请尽量点击在有文字的地方，自然语言识别会更精准。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、手动添加。

### click at <g-button command='click at'/>

点击目标元素（例如：链接、按钮、复选框或单选按钮）。坐标是相对于目标元素的（例如：0,0 是元素的左上角）。

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：相对于从定位器中找到的元素的 x,y 位置（例如 - 10,20）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### double click <g-button command='double click'/>

双击元素（例如：链接、按钮、复选框或单选按钮）。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、手动添加。

### double click at <g-button command='double click at'/>

双击目标元素（例如：链接、按钮、复选框或单选按钮）。坐标是相对于目标元素的（例如：0,0 是元素的左上角）。

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：相对于从定位器中找到的元素的 x,y 位置（例如 - 10,20）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### drag and drop to object <g-button command='drag and drop to object'/>

拖动一个元素并将其放在另一个元素上。

<h4>参数</h4>

- 要拖动的对象的定位器：要拖动的元素的定位器。

- 放入目标对象的定位器：元素定位器，其位置（例如：其中最中心的像素）是拖动的对象被放置的点。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse down <g-button command='mouse down'/>

模拟用户按下鼠标左键（尚未释放它）。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse down at <g-button command='mouse down at'/>

模拟用户在指定位置按下鼠标左键（尚未释放它）。

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：相对于从定位器中找到的元素的 x,y 位置（例如 - 10,20）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse move at <g-button command='mouse move at'/>

模拟用户在指定元素上按下鼠标按钮（尚未释放它）。

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：相对于从定位器中找到的元素的 x,y 位置（例如 - 10,20）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse out <g-button command='mouse out'/>

模拟用户将鼠标指针移离指定元素。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse over <g-button command='mouse over'/>

模拟用户将鼠标悬停在指定元素上。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、右键菜单添加、手动添加。
  > 部分场景可能无法自动录制到。可通过点击操作来替代鼠标悬停，也可通过右键菜单来添加。

### mouse up <g-button command='mouse up'/>

模拟用户释放鼠标按钮时发生的事件（例如：停止按住按钮）。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse up at <g-button command='mouse up at'/>

模拟用户在指定位置释放鼠标左键（例如：停止按住按钮）时发生的事件。

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：相对于从定位器中找到的元素的 x,y 位置（例如 - 10,20）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### mouse wheel <g-button command='mouse wheel'/>

鼠标在元素上进行滚动。

<h4>参数</h4>

- 定位器：元素定位器。

- value：滚动单位。表示元素向下滚动的大小，单位为 px。

### mouse wheel at <g-button command='mouse wheel at'/>

鼠标在元素指定位置上进行滚动，多用于地图放大缩小。

<h4>参数</h4>

- 定位器：元素定位器。

- value：x,y,滚动像素 1,滚动像素 2,滚动像素 3...。其中 x,y 表示滚轮滚动的中心点。

<h4>使用方式</h4>

- 自动录制、手动添加。

### select <g-button command='select'/>

使用选项定位器从下拉菜单中选择一个元素。选项定位器提供了指定选择元素的不同方式（例如：label=、value=、id=、index=）。如果未提供选项定位器前缀，则将尝试在标签上进行匹配。

<h4>参数</h4>

- 选择定位器：标识下拉菜单的元素定位器。

- option：一个选项定位器，通常只是一个选项标签（例如“John Smith”）。

<h4>使用方式</h4>

- 自动录制、 手动添加。

### send keys <g-button command='send keys'/>

模拟指定元素上的击键事件，就像您逐键键入值一样。这模拟了真实用户在指定字符串中键入每个字符；它还受到真实用户的限制，例如无法输入不可见或只读元素。这对于需要显式键事件的动态 UI 小部件（如自动完成组合框）很有用。与直接将指定值强制进入页面的简单“type”命令不同，此命令不会替换现有内容。

<h4>参数</h4>

- 定位器：元素定位器。

- 键序列：要键入的键序列，可用于发送击键（例如 ${KEY_ENTER}）。

<h4>使用方式</h4>

- 自动录制、手动添加。

### context menu <g-button command='context menu'/>

模拟鼠标右键点击操作，调取自定义的右键菜单。（适用于 kMap 地图右键中的功能操作）

<h4>参数</h4>

- 定位器：元素定位器。

- 坐标字符串：地图坐标。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

## 流程

### echo <g-button command='echo'/>

将指定的内容打印到日志中。对调试很有用。

<h4>参数</h4>

- message：要打印的消息。（例如：${value} , 1）。

<h4>使用方式</h4>

- 手动添加。

### pause <g-button command='pause'/>

等待指定的时间。支持变量。（例如：5000）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### debugger <g-button command='debugger'/>

中断执行并进入调试器

<h4>使用方式</h4>

- 手动添加。

### if <g-button command='if'/>

在您的测试中创建一个条件分支。不接 else 时使用 end 命令终止分支。

<h4>参数</h4>

- 条件表达式：返回布尔结果以用于控制流命令的 JavaScript 表达式。（例如：false）。

<h4>使用方式</h4>

- 手动添加。

### if element present <g-button command='if element present'/>

在您的测试中创建一个判断目标元素是否存在的条件分支。不接 else 时使用 end 命令终止分支。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。（例如： 5000）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### else <g-button command='else'/>

if / element present 块的一部分。当 if 和/或 else if 条件不满足时，执行此分支中的命令。使用 end 命令终止分支。

<h4>使用方式</h4>

- 手动添加。

### else if <g-button command='else if'/>

if / element present 块的一部分。不满足 if 条件时执行此分支中的命令。不承接 else 时使用 end 命令终止分支。

<h4>参数</h4>

- 条件表达式：返回布尔结果以用于控制流命令的 JavaScript 表达式。（例如：false）。

<h4>使用方式</h4>

- 手动添加。

### end <g-button command='end'/>

终止 if、while 和 times 的控制流块。

<h4>使用方式</h4>

- 手动添加。

### do <g-button command='do'/>

创建一个至少执行一次后续命令的循环。使用 repeat if 命令终止分支。

<h4>使用方式</h4>

- 手动添加。

### repeat if <g-button command='repeat if'/>

如果提供的条件表达式的结果为真，则开始 do 循环。否则结束循环。

<h4>参数</h4>

- 条件表达式：返回布尔结果以用于控制流命令的 JavaScript 表达式。 （例如：${value} < 5）。

<h4>使用方式</h4>

- 手动添加。

### for each <g-button command='for each'/>

创建一个循环，为给定集合中的每个项目执行后续命令。

<h4>参数</h4>

- 数组变量名：包含 JavaScript 数组的变量的名称。

- 迭代器变量名：在循环控制流命令中迭代集合时使用的变量名（例如：for each）。

<h4>使用方式</h4>

- 手动添加。

### times <g-button command='times'/>

创建一个循环，执行 n 次继续执行的命令。

<h4>参数</h4>

- times：控制流循环在其块内执行命令的尝试次数。（例如： 5）。

- loop limit：可选参数。指定循环控制流命令可以执行的最大次数，默认值设置为 1000。（例如：1000）。

<h4>使用方式</h4>

- 手动添加。

### while <g-button command='while'/>

只要提供的条件表达式为真，就创建一个循环重复执行后续命令。使用 end 命令限定范围。

<h4>参数</h4>

- 条件表达式：返回布尔结果以用于控制流命令的 JavaScript 表达式。（例如：${value} < 5）

- loop limit：可选参数，指定循环控制流命令可以执行的最大次数，默认值设置为 1000。（例如： 5）。

<h4>使用方式</h4>

- 手动添加。

### set speed <g-button command='set speed'/>

设置执行速度。指从设置此项后，下面每个步骤的间隔时间。默认情况下，延迟为 0 毫秒。（该设置前的步骤间隔时间不变，不可设置在最开始，重复设置只以第一次时间为准）

<h4>参数</h4>

- 等待时间：等待的时间（以毫秒为单位）。（例如： 5000）。

<h4>使用方式</h4>

- 手动添加。

## 存储

<h4>使用方式</h4>

- 手动添加。

### store <g-button command='store'/>

用于存储字符串为变量。

<h4>参数</h4>

- 文本：要使用的文本。（例如： 内容）

- 变量名：不带括号的变量名。（例如：value）

<h4>使用方式</h4>

- 手动添加。

### store attribute <g-button command='store attribute'/>

获取元素属性的值。属性的值可能因浏览器而异,支持自定义属性,获取到多个元素时，只获取第一个的值。（例如：class 、id 等属性）。

<h4>参数</h4>

- 属性定位器：元素定位器@属性名。（例如：xpath=//input[@id='kw']@class , id=kw@class,css=.hotsearch-item.odd@data-index）。

- 变量名：不带括号的变量名。 （例如：value）

<h4>使用方式</h4>

- 手动添加。
  > 只能手动添加。供研发人员使用。

### store json <g-button command='store json'/>

用于存储 json 对象，以字符串形式表示

<h4>参数</h4>

- json：JavaScript 对象的字符串形式表示。

- 变量名：不带括号的变量名。（例如：value）

<h4>使用方式</h4>

- 手动添加。

### store text <g-button command='store text'/>

获取元素的文本内容。获取到多个元素时，只获取第一个元素的文本。

<h4>参数</h4>

- 定位器：元素定位器。（例如：css=.title-content-title）。

- 变量名：不带括号的变量名。（例如：value）

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### store value <g-button command='store value'/>

获取元素的 value 属性。适用于任何输入类型元素。

<h4>参数</h4>

- 定位器：元素定位器。（例如：id=kw）。

- 变量名：不带括号的变量名。（例如：value）

<h4>使用方式</h4>

- 手动添加。

### store window handle <g-button command='store window handle'/>

获取当前页面的抓手。

<h4>参数</h4>

- 窗口抓手：表示特定页面（选项卡或窗口）的抓手。

<h4>使用方式</h4>

- 自动添加。
  > 只能自动添加。手动添加无意义。

### store xpath count <g-button command='store xpath count'/>

获取与指定 xpath 匹配的节点数量。

<h4>参数</h4>

- xpath：要评估的 xpath 表达式。（例如：//div , //input[@id='kw']）。

- 变量名：不带括号的变量名。（例如：value）

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

## 断言 & 校验

### assert <g-button command='assert'/>

检查变量是否为预期值。变量的值将被转换为字符串进行比较。如果断言失败，测试将停止。

<h4>参数</h4>

- 变量名：不带括号的变量名。

- 预期值：期望的变量结果（例如：true、false 或其他具体值）。

<h4>使用方式</h4>

- 手动添加。

### assert checked <g-button command='assert checked'/>

检查目标元素选择框是否选中（复选框/单选）。如果断言失败，测试将停止。（不适用于 kf-baseUI）

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert not checked <g-button command='assert not checked'/>

确认检查目标元素选择框是否不选中（复选框/单选）。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert editable <g-button command='assert editable'/>

确认目标元素是可编辑的。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert not editable <g-button command='assert not editable'/>

确认目标元素是不可编辑的。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert element present <g-button command='assert element present'/>

确认目标元素存在于页面上。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert element not present <g-button command='assert element not present'/>

确认目标元素不存在于页面上。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert text <g-button command='assert text'/>

确认元素的文本是否和提供的文本相同。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：字符串文本。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert not text <g-button command='assert not text'/>

确认元素的文本是否和提供的文本不同。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：字符串文本。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### assert value <g-button command='assert value'/>

确认元素的值和文本相同。对于原生复选框/单选元素，值将是“on”或“off”，具体取决于元素是否被选中。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：字符串文本。

<h4>使用方式</h4>

- 手动添加。

### assert video <g-button command='assert video'/>

确认目标视频是否加载完成。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 手动添加。

### assert video property <g-button command='assert video property'/>

确认目标的属性属于是否符合条件内容。如果断言失败，测试将停止。

<h4>参数</h4>

- 定位器：元素定位器。

- 条件：字符串条件。（例如：tagName=VIDEO，baseURI=https://media.w3.org/2010/05/sintel/trailer.mp4,tagName=VIDEO）

<h4>使用方式</h4>

- 手动添加。

### verify <g-button command='verify'/>

校验变量是否为预期值。变量的值将被转换为字符串进行比较。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 变量名：不带括号的变量名。

- 预期值：您希望变量包含的结果（例如：true、false 或其他具体值）。

<h4>使用方式</h4>

- 手动添加。

### verify checked <g-button command='verify checked'/>

校验标元素选择框是否选中（复选框/单选）。即使验证失败，测试仍将继续。（不适用于 kf-baseUI）

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify not checked <g-button command='verify not checked'/>

校验目标元素选择框是否不选中（复选框/单选）。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify editable <g-button command='verify editable'/>

校验目标元素是可编辑的。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify not editable <g-button command='verify not editable'/>

校验目标元素是不可编辑的。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify element present <g-button command='verify element present'/>

校验目标元素存在于页面上。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify element not present <g-button command='verify element not present'/>

校验目标元素不存在于页面上。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify text <g-button command='verify text'/>

校验元素的文本是否和提供的文本相同。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：要使用的文本。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify not text <g-button command='verify not text'/>

校验元素的文本是否和提供的文本不同。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：要使用的文本。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### verify value <g-button command='verify value'/>

校验元素的值和文本相同。对于原生复选框/单选元素，值将是“on”或“off”，具体取决于元素是否被选中。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：字符串文本。

<h4>使用方式</h4>

- 手动添加。

### verify video <g-button command='verify video'/>

校验目标视频是否加载完成。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

<h4>使用方式</h4>

- 手动添加。

### verify video property<g-button command='verify video property'/>

校验目标的属性属于是否符合条件内容。即使验证失败，测试仍将继续。

<h4>参数</h4>

- 定位器：元素定位器。

- 条件：字符串条件。（例如：tagName=VIDEO，baseURI=https://media.w3.org/2010/05/sintel/trailer.mp4,tagName=VIDEO）

<h4>使用方式</h4>

- 手动添加。

## 等待

### wait for element editable <g-button command='wait for element editable'/>

等待元素可编辑。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for element not editable <g-button command='wait for element not editable'/>

等待元素不可编辑。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for element present <g-button command='wait for element present'/>

等待目标元素出现在页面上。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for element not present <g-button command='wait for element not present'/>

等待目标元素不在页面上。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for element visible <g-button command='wait for element visible'/>

等待目标元素在页面上可见。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for element not visible <g-button command='wait for element not visible'/>

等待目标元素在页面上不可见。

<h4>参数</h4>

- 定位器：元素定位器。

- 等待时间：等待的时间（以毫秒为单位）。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

### wait for text <g-button command='wait for text'/>

等待元素的文本值。(默认等待时间 3000ms)

<h4>参数</h4>

- 定位器：元素定位器。

- 文本：要使用的文本。

<h4>使用方式</h4>

- 右键菜单添加、手动添加。

## 其它

### execute script <g-button command='execute script'/>

在当前选定的框架或窗口的上下文中执行一段 JavaScript。脚本片段将作为匿名函数的主体执行。要存储返回值，请使用“return”关键字并在值输入字段中提供变量名称。

<h4>参数</h4>

- script：要运行的 JavaScript 片段。

- 变量名：不带括号的变量名。

<h4>使用方式</h4>

- 手动添加。

### execute async script <g-button command='execute async script'/>

在当前选定的框架或窗口的上下文中执行 JavaScript 的异步片段。脚本片段将作为匿名函数的主体执行，并且必须返回一个 Promise。如果您使用 'return' 关键字，Promise 结果将保存在变量中。

<h4>参数</h4>

- script：要运行的 JavaScript 片段。

- 变量名：不带括号的变量名。

<h4>使用方式</h4>

- 手动添加。

### run script <g-button command='run script'/>

在当前测试窗口的正文中创建一个新的 script 标签，并将指定的文本添加到命令正文中。请注意，这些脚本标记中抛出的 JS 异常不是由 Selenium 管理的，因此如果脚本有可能抛出异常，您可能应该将脚本包装在 try/catch 块中。

<h4>参数</h4>

- script：要运行的 JavaScript 片段。

<h4>使用方式</h4>

- 手动添加。
