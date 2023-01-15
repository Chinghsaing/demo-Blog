﻿# 个人博客(开发日志)
所运用到的**技术栈**为
**Vite + Vue3 + ts + Vue-router + ~~Vuex~~  Pinia + Element-Plus**
## 个人说明
本项目是处于一个**边学习边开发**的状态，作为自己**第一个的Vue项目**，开发进度会相当的慢，也是边**开发边解决问题边查询相关文档**。
原本采取的是Vuex，后来发现在ts下的Vuex的类型限制与模块化使用出现了各种各样的问题，花了好长时间翻阅文档以及都没有达到我想要的效果，不是$store的路径用不了，就是能用的时候类型却又出现了问题，还有就是模块化的类型问题。所以还是采取了**Pinia**作为vue的状态管理。
后端因个人精力有限，没有后端的打算，可能在将来会补上或者用**nodejs**简单的写两个接口。以及未来可能会补上一个**后台管理系统**。
## 目录说明

 ```
- src
	-- Readme.md //开发说明
	-- assets 
	   --- images //图片资源
		   ---- news //资讯图片库
	-- components //组件
	   --- ArtCard.vue //文章卡片组件
	   --- NavBar.vue //导航组件
	   --- TextAmt.vue //文字效果组件
	   --- NewsCard //资讯小卡片组件
	   --- UserInfoCard //用户信息卡组件
	-- hooks //函数
	   --- UseScroll.ts //用户信息卡滚动定位函数
	   --- UseEmerge.ts //滚动元素浮现函数
    -- router //路由
	   --- index.ts //路由文件
    -- store //仓库
       --- HomeState.ts //Home.vue数据
       --- NewsState.ts //资讯卡片数据
       --- ArtState.ts //文章卡片数据
    -- style //样式
	   --- GobalStyle.less //全局样式
    -- views //页面
	   --- home.vue //首页
```

## 基本功能
完成博客的**基本功能**，在实现基本的功能的基础上，添加个人的想法，例如网盘、个人备忘录、内置toDoList等等。
## Day 6 - 7
23/1/14-23/1/15

 1. 写了一个滚动元素浮现的方法。
	 PS：在14号那天的时间都在测试这个效果了，先是在资讯组件测试了这个效果，然后将方法尽可能地封装起来。封装的过程也遇到了不少问题，第一就是获取dom元素样式undefined的情况，后来发现要**写在onMounted内**。第二，在元素在什么时候出现的计算方法也出现了问题。最后一个也是花费时间最久的，就是对象数据的响应式的问题，一开始我给对象套上**reactive**，但是给对象赋值后发现响应式不起作用，查阅资料发现，原来不能直接给**对象采取赋予对象的形式来修改对象的值**，而是要把对象中的每一项数据**单独修改**，响应式生效，这是值得好好记录一下。总之这些各种各样的小问题，决定了我的开发效率不算高，甚至一整天都可以在写样式和某一个效果。总之，加油吧！

2. 将资讯小卡片的四个一组改为了三个一组并相应的改变卡片的大小。（原因是四个时的卡片实在是太小了）

3. 15号创建了文章卡片的组件以及完成了文章卡片的样式，并且**利用余数**控制每次遍历的卡片样式有所不同。

4.增添了一行以及多行时的文字省略号效果方法。 

**主要变动：**

**——ArtCard.vue
——UseEmerge.ts**

## Day 5
23/1/13
 1. 完善了用户信息卡的样式。
 
 2. 完成了资讯小卡片的轮播效果。

	PS：今天看上去完成内容有点少，总的来算一共用了一个下午的时间左右，小部分在写用户信息卡的样式，剩下的时间就是在实现资讯卡片组的样式（如何让卡片每次只显示一组，一组只有四个）以及**轮播图**了。重要的来了，一开始还在想在vue怎么实现这个轮播图效果，因为我之前只在jquery的帮助下写过，原生JS无非就是多点代码的事，于是我尝试**在vue用回原生的写法**，后来发现实在是太麻烦了，而且面对不同页面尺寸下会不会有问题，也查阅过相关资料，方法都是大同小异。后来我想起来还有一个eleplus可以看看，果然里面有个**走马灯**的效果，OK，问题解决。
	然后下一个问题就又来了。我该如何实现走马灯在遍历资讯卡组的时候资讯卡组也在遍历资讯卡呢。没错就是**双重v-for**，里外各一个。然后就是将外层v-for的key当作内层的key进行遍历。数据方面我也采取了**数组——对象——数组——对象的嵌套结构**，这样内层就可以获取到最里层对象的数据，这也是存放资讯数据的地方。
	这样一切都解决了。

**主要变动：**
**——NewsCard.vue
——UserInfoCard.vue
——NewsState.ts**
 

## Day 4
23/1/12

 1. 在页面载入时，做了标题有**滑动飞入**的效果。
	
	PS：本来想将顶部的导航栏也添加此效果的，后来发现logo的地方有些许Bug，只有按钮组有滑动效果，而且滑动也影响了布局。

  2. 写了资讯小卡片和用户信息卡组件，单纯的实现了布局，样式还没有写。小卡片实现了根据数据自动遍历生成相应数量的小卡片。
  
  3. 实现了用户信息卡的滚动固定，当页面滑到小卡片的位置时，卡片会产生吸顶的效果。

	 PS：有意思的是这个功能的实现效果，用到了**子元素和父元素的位置关系**。一开始的代码利用了**页面被卷去距离**来充当固定值，用此来判断，然后将fixed动**态添加到样式中**。但是这只是在自己的页面尺寸下可以实现，但是只要将浏览器切换成全屏，卷去的距离就不是一个固定值了。
	接着我又想了想，用**页面被卷去距离减去视窗的高度**用来充当固定值能否实现？答案是肯定的，而且在任何尺寸下都可以完美实现。
	 
  4. 将滚动固定的方法抽出来单独放到了hooks里面去。
## Day 3
23/1/11

 1. **移除了**ElePlus的布局组件，**el-container、el-header、el-main**，然后进一步优化了一下布局。
 
	 PS：我发现这玩意是真不好用，做出来的效果，不如自己写。当然了有一下小组件还是很方便的
	 
 2. 将**数据类型**进行了定义，由于我找不到在仓库里直接定义数据的类型，只能在每个组件中**写好一个接口**来检测仓库传输过来的数据的类型。

 3. 增加了首页**下箭头**小图标 ，并为此创建了一个帧动画(看起来有点活力)。

**主要变动：**
**——Home.vue**

## Day 2  

23/1/10
一个打字效果的组件用TS稍微实现了一下，我想了想这些功能慢慢写吧，有时候感觉自己**挺懒的**，想到什么就写什么，没有进入全力开发的状态。写这个组件的时候，还是遇到一点点问题的，首先就是ts类型定义时**Number**和**number**的区别，这两个还是不一样的。另外一个就是插入组件的时候样式处理还是不够熟练，浪费了挺多时间的。不过最终还是实现了自己想要的功能。

**主要变动：**
**——TextAmt.vue**

## Day 1
23/1/7
现在正式开始开发自己的项目。

沿用自己之前搭建好的模板，后来发现不够完善，第一天基本上的时间都花在完善模板上来，特别是vuex，还是得学会放弃，没办法“技不如人”，及时更换了另外一个状态管理组件。后来确定了项目基本的页面风格，基本框架和要实现的功能。
剩下的时间就只够我完成一个可复用的导航栏组件，也就是项目中的**navbar.vue**，其中让我最难受的就是**Element Plus**里面按钮组件样式的修改，出现多了比较多的问题。同时抽出了公共的样式，定义了相关的样式。

**主要变动：**
**——NavBar.vue**
