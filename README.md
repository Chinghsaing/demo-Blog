﻿# 个人博客(开发日志)
所运用到的**技术栈**为
**Vite + Vue3 + ts + Vue-router + ~~Vuex~~  Pinia +axios+ Element-Plus + express + mongoDB**

 - [**##个人博客链接**](https://github.com/Chinghsaing/demo-Blog)
 - [**##个人博客后端链接**](https://github.com/Chinghsaing/demo-Blog-Server)

## 个人说明
本项目是处于一个**边学习边开发**的状态，作为自己**第一个的Vue项目**，开发进度会相当的慢，也是边**开发边解决问题边查询相关文档**。
原本采取的是Vuex，后来发现在ts下的Vuex的类型限制与模块化使用出现了各种各样的问题，花了好长时间翻阅文档以及都没有达到我想要的效果，不是$store的路径用不了，就是能用的时候类型却又出现了问题，还有就是模块化的类型问题。所以还是采取了**Pinia**作为vue的状态管理。
~~后端因个人精力有限，没有后端的打算，可能在将来会补上或者用**nodejs**简单的写两个接口。以及未来可能会补上一个**后台管理系统**。~~

## 目录说明
 ```
- src
	-- Readme.md //开发说明
	-- api //接口文件夹
	   --- api.ts //接口
	   --- axios.ts //请求响应拦截
	   --- status.ts //状态码
	-- assets 
	   --- images //图片资源
	      ---- news //资讯图片库
	-- components //组件
	   --- Article //article页面组件
	       ---- ArtDetail.vue //文章详情组件
	       ---- AuthorInfoCard.vue //文章作者信息卡组件
	       ---- CommentCard.vue //评论卡片
	       ---- Comments.vue //评论组件
	       ---- ReplyCard.vue //回复组件
	       ---- CataLog.vue //目录组件
	   --- Home //home页面组件
	       ---- ArtCard.vue //文章卡片组件
	       ---- TextAmt.vue //文字效果组件
	       ---- NewsCard.vue //资讯小卡片组件
	       ---- UserInfoCard.vue //用户信息卡组件
	   --- Platform // platform页面组件
	       ---- MyAccount.vue //个人信息组件
	       ---- MyArticle.vue //我的文章组件
	       ---- MyMessage.vue //我的消息组件
	   --- SignUp.vue //登录注册组件
	   --- NavBar.vue //导航组件
	   --- Editor.vue //富文本编辑组件
	   --- Copyright.vue //版权组件
	-- directive //自定义指令
	   --- directive.ts //自定义指令
	-- hooks
	   --- hooks.ts //公共方法
    -- router //路由
	   --- index.ts //路由文件
    -- store //仓库
       --- HomeState.ts //Home.vue数据
       --- NewsState.ts //资讯卡片数据
       --- ArtState.ts //文章卡片数据
       --- SignState.ts //登录注册数据
       --- UserInfoState.ts //用户信息数据
       --- CommentState.ts //评论数据
       --- PlatformState.ts //平台页面数据
    -- style //样式
	   --- GobalStyle.less //全局样式
    -- views //页面
	   --- Home.vue //首页
	   --- Article.vue //文章详情页
	   --- EditArticle.vue //文章发布页面
	   --- Admin.vue //后台管理页面
	   --- Platform.vue //平台页面
```

## 基本功能
完成博客的**基本功能**，在实现基本的功能的基础上，添加个人的想法，例如网盘、个人备忘录、内置toDoList等等。
## Day30 - 31
23/2/16 - 23/2/17
后端：

 1. **完成文章上传图片接口，并且修改相关命名规则**。

前端：

 1. **修改部分组件样式**。
 
 2. **完成公告栏组件样式**。
 
 3. **完成文章上传相关图片功能**。

## Day 27 - 30

23/2/12 - 23/2/15
后端：

 1. **完成回复评论接口**。
 
 2. **修改获取评论接口，通过聚合查询的方式，将子评论和父评论一并获取**。
 PS：原本写评论接口时遇到的聚合查询的问题，现在解决了。就是通过循环获取得到id，再用id循环查询数据库在赋值。就可以完成我想要的效果！

前端：

 1. **添加路由过渡效果**。
 
 2. **部分页面采用毛玻璃效果**。

 3. **富文本编辑添加字体，标题，字体大小选项**。
	  PS：一开始我弄了好久，发现添加这几个选项都不起作用，网上的教程都不管用。后来直接去找英文的网站，原来是tinymce6升级之后它改动了部分选项的名字，所以导致不生效，后来我直接去看变动文档，起作用了。
 
 4. **修改文章详情页样式和布局**。
 
 5. **文章详情页添加分享链接和点赞组件**。
 
 6. **添加回复评论组件**。
	 PS：在添加表情的时候，原本像之前一样用自定义指令获取v-for循环出来的元素，然后添加到span的时候，不知道为什么点一下就会执行5次，6次，9次，以至于添加好几个表情的Bug。后来我发现可以直接用v-for里的index可以直接获取到相对应的单个元素，bug也消失了。完美解决。

7. **完成文章目录组件**。

8. **完成网站版权组件**。

PS：实际上写到这里，我的博客差不多已经可以上线了，以及该可以做到基本的动能，在做些许优化，上线之后也可以慢慢的更新和完善功能。

## Day 24 - 26
23/2/9 - 23/2/11
后端：

 1. **增加查询用户文章接口**。
 
 2. **增加删除文章接口**。

前端：

 1. **建立Platform页面，用子路由显示组件**。
 
 2. **完成我的文章组件样式**。
 
 3. **添加发布评论时的淡入效果**。
 
 4. **添加删除我的文章的淡出效果**。
 
 5. **添加删除文章时的确认框**。
 
 6. **优化Navbar组件的结构，采用弹出框作为选项栏**。 
 
 7. **封装get，post方法**

 8. **建立api文件存放接口，方便修改**。
 
 9. **继续优化代码**。 
 
## Day 21 - 23
23/2/6 - 23/2/8
后端：

 1. **更改了部分文件命名方式**。
 
 2. **新增发布评论接口和获取评论接口**。
	 
	 PS：一开始在做获取评论的接口时，折腾了一天，原本想着用聚合查询的方式，获取到该文章下的所有评论以及用户信息，后来发现这样是无法获取到用户信息只能查询到用户id。然后就一直寻找解决的办法，还是无果，没办法只好采用最原始方法来进行查询。希望有一天可以解决这个问题。

前端：

 1. **完成评论组件样式**。
	PS：同样这个组件也折腾了我不久，**一个是样式**，如何才能够让它自动增长同时不会有显示的问题，一开始使用element plus里面的input，后来发现有显示问题，于是我参考了知乎的评论模块，最后采用了span的形式，一个span用来做placeholder，一个用来做输入。另**一个就是发送emoji表情**，我找遍了所有的插件都不好使，同时关于插件的内容也少得可怜，后来给表情放在一个数组，再调用的方法。可行。
	
 2. **完成评论卡片样式**。
 
 3. **新增api下的status.ts后端状态码管理**。（将所有的状态码放在这里统一管理）
 
 4. **将所有后端的返回提示统一放在axios拦截器，组件内的axios只负责相关业务处理**。

PS：虽然看起来的新增内容不多，但实际上的过程却花费了不少时间，而且这几天也忙着复习，开发的时间也相应减少，进度放缓。

## Day 18 - 20
23/2/2 - 23/2/4
后端：

 1. **完成文章上传接口逻辑的部分修改**。

 2. **添加token验证，并且修改部分接口的接收数据**。
 
 3. **建立的/api的公开接口，/user的权限接口**。
 
 前端：
 
 1. **采用ticymce的包作为富文本编辑器**。
 
 2. **完成Editor.vue富文本编辑器组件**。
 
 3. **完成了发布文章页面的编辑**(现在你可以发布文章，并且在首页可以看到！)。

 4. **进一步完善了网页的响应式结构**。

 5. **首页添加了“写文章”的入口**。

 6. **优化了部分代码的结构**。
 
 7. **建立hooks文件夹，存放公共函数**（getNowTime方法）。
 
 8. **在axios拦截器添加了部分token验证**。

 9. **还有部分样式的修改，让它看起来更合理**。

 10.  **现在你可以复制文章的链接访问到页面**。
 
PS:到现在，项目的代码越来越多，结构也越来越复杂，遇到的问题越来越多也越复杂。**第十点更新**，由于数据的异步加载导致页面加载成功，而数据还没获取，引起报错，但是页面可以正常显示。后来用了一个晚上的时间去解决这个问题，试来试去最后还是使用**v-if判断**数据是否获取成功再渲染页面，问题解决。
## Day 17 
23/1/31
后端：

 1. **完成了用户头像上传的接口。(现在你可以上传图片到服务器，服务器会返回一个地址到数据库！)**
 
 2. **创建公开的静态资源文件public**。
 
 PS：实际上**30号**那天都在编**写以及测试**这个服务器的上传功能，由于在测试，我也没算入为一个开发日。我在**租一个OSS**和上传的图片**转为base64编码**存入数据库，又或者是上传图片到服务器，服务器返回一个地址。我在这里思索了许久也测试了一下，最后还是选择最后一种，同时采用了**multer**作为我的上传中间件，可以节省不少功夫。

前端：

 1. **完善了一些用户体验，信息框的样式做了更改同时加上了错误代码。**
 
 2. **完成了在用户信息卡上更改头像的功能。（现在你可以点击头像修改头像啦！）**


## Day 16
23/1/29
后端：
1. **完成了文章提交的测试post接口以及获取文章列表的get接口。**
 
 2. **完成了文章数据模型和用户数据模型的关联。（现在你可以通过文章查询到作者信息！）**
 
 3. **尚未做出文章的数据验证。**

前端：

 1. **通过新增的后端接口，进一步完善了页面的数据的获取方式，逐渐从仓库转移到后端数据库，涉及的组件有用户信息卡，文章卡片，以及文章作者信息卡**。
 
 2. **现在首页的文章卡片可以根据数据库的数据自动生成相应的文章以及作者**。
 
 3. **临时添加了一个临时的admin后台管理页面，进行各种功能的测试**。 

PS：做到现在我才意识到这个**项目的工程量的巨大**，最近也一直在研究也打算租一台服务器**测试一下项目上线的功能**。不过想到这个项目的进度还不足以达到上线的程度，也是有点犹豫。

**Mongoose里面的模型关联**：

```
author: {type:mongoose.SchemaTypes.ObjectId, ref: 'user'}
```
在ref后面的user是不**可以存在大写字母的**，不然会提示这个集合没有注册的错误。

在文章的接口里，我意识到业务逻辑的**数据库的查询与结果的嵌套和调用**很容易造成混乱，同时也影响到代码执行的效率。实际上这个post接口我写了两遍，**第一遍**就是各种数据库的嵌套，后来发现代码的可读性实在是太差了，**第二遍**我就采用了异步编程的方式也就是**async/await语法糖**，这样代码的**可读性大大提高**，同时**执行效率也会提高**，后续我也会将之前的代码进行**优化**。
同时我发现一个问题，在mongoose进行**联合查询**的时候也就是popular方法不采取异步编程的话，输出结果是会报错的，我也搞不清楚为什么。
## Day 14 - 15
23/1/27 -23/1/28
大更新：

 1. **采用nodejs + mongoDB作为后端，并且完成登录注册的接口**。

 2. **完成前端登陆注册的业务逻辑**。
 
 3. **修改了用户信息卡组件以及导航栏的登录前后的样式**。
 
 4. **修改了部分仓库的数据，将数据放在后端数据库内，由前端请求获得**。
	 
PS：这两天是更新内容最多的一次，也是从现在开始正式转入**前后端一起开发**的阶段，方便到时候项目打包上线。虽然写到现在感觉项目的部分结构有点乱。实际上大部分时间都在后端的mongoDB的使用上，到时候后端就新建一个仓库放进去，原本是想着放在一起的，后来想想算了。
## Day 12 - 13
23/1/23 - 23/1/24

 1. **在Article页面，导入NavBar组件，并且制定相关页面布局与样式。**。
 
 2. **创建作者信息卡，并完成相关样式**。
 
 3. **建立api文件夹下的axios配置文件，在其中添加了请求响应的拦截方法，其中就是调用登录注册接口时的loading界面**。

 4. **建立了用户信息仓库，完成文章仓库和用户信息仓库之间的互相调用**。. 

PS：过年期间，开发进度放缓，而且一些开发的思路出现了问题，就是不知道下一步该做什么，有时候想先把后端部分接口写好，然后前端就好调用。有时候又想着先把数据先放在仓库，到时候再写接口，然后再去统一修改需要调用的地方。
想了想，想要完成这个项目并且能够上线这个工程量还是蛮大的。不知道什么时候才可以达到自己想要的。

## Day 9 - 11
23/1/18 - 23/1/21

 1. **更换了网页的主题风格，让它看起来没有之前那么违和。**
	
	PS：其中一大半的时间都花在网页的设计上面去了，特别是找背景素材，配色。还有解决了body的高度永远是固定值的问题，这个问题原来是我给**body设置了高度**导致的问题。业务还没写，网页设计这块我估计我就先倒下了。
	
 2. **采用模态框的形式创建登录注册组件，并且完成了样式。**
 
	PS：总的来说这次的风格改动还是让我比较满意的，这样改来改去也大大的放慢了自己的开发效率。总之我觉得简直慢到不能再慢了，两天时间就做了这么点东西。
	**总之，加油吧！**
	
3. **完成了表单本地的基本验证，并修改了相关提示的样式。**
	PS: 关于表单验证的api我看了一个下午，才勉强搞懂怎么用，实在是太难了。
	
4. **建立了article页面，并且通过路由，由文章的id自动渲染出相应的页面。（文章详情页样式尚未开始）**

5. **新增了axios的包。**
	PS：本来应该早就安装了，一开始在写的时候发现用不到请求，于是就没管。现在已经开发到这个阶段了，数据都存放在仓库显然不是很合理，而且在某些情况下调用数据与实际开发不符，所以估计**下一步先把接口写好**，才会进行下一步的业务逻辑。
	
**主要变动：**

**——SignUp.vue** 
**——article.vue**
**——新增axios的包**
## Day 8 - 9
23/1/16- 23/1/17
大更新：

1. **完美实现元素浮现效果。**

	 PS：实现这个效果可谓是一波三折。因为先前写的一个方法仅适用于在单个组件或者是单个元素。而面对vfor循坏生产的元素就没那么好使了。一开始是想按照原来UseEmerge的方法，先获取循环生成的dom元素在分别为更改样式。但是第一步便出现了很多问题。
	 **方案一（失败）**：**第一**，我原本是想通过循环中的id值创建出相应的ref变量以此来获取对应的dom元素，在获取dom的时候发现获取出来的value是一个proxy对象，而真正的dom存在于traget中，又无法访问到。经过一番查询，**原来ref添加在组件上时，获取到的是一个proxy对象，而添加在原生的元素里面，获取到的就是真正的dom元素**。于是我在外围用div包裹了起来，这下就获取到了dom。**第二**，通过id循环产生出来的ref自动创建变量名，我思来想去也找不到方法，无奈只好放弃。**第三**，之后我将ref放在循环体上采用数组的形式获取dom元素，这样就可以省去变量的过程。我原本的想法是通过获取到dom元素数组。然后通过循环去绑定滚动事件，然后只要滚动的时候改变该元素的样式即可。理论上是可行的，不过挠破头了也想不出来该怎么写，静态的只能通过一个一个元素绑定添加事件实现，动态就不行了，还有待学习。
	 **方案二**：翻阅vue的官方文档，有一个**transition**的标签可以给元素进入和退出的过渡动画，于是我又想着给循环出来的元素加个vshow，然后给仓库的数据定义一个state的Boolean，通过修改仓库的state的ture、false来确定元素的显示。事实证明，大致效果是可以实现的，不过有些许瑕疵，由于vshow不保留元素的位置，导致加载效果不一致，滚动条也会慢慢增长，不过也算是实现了大致的效果。
	 **方案三（最终方案）**：还是不甘心。在我翻阅vue获取dom元素的方法时，发现了还有一个自定义指令。**自定义指令**可以获取到当前的dom元素，而且可以修改**当前dom**的相关的属性，这不是我一直在找的吗。然后我自定义了一个指令，获取到dom然后添加样式修改样式，完成。效果完美！

2. **利用媒体查询实现了页面的响应式布局，页面支持在任何设备上浏览。**
	PS：还有些许瑕疵，有待日后完善。
	
3. **导航栏也拥有了吸顶效果，同时通过添加自定义指令，改变相应滚动位置的元素样式**
	PS：翻阅eleplus的文档无意中发现了还有一个固钉的组件，这个可以实现吸顶效果，完全可以抛弃之前写的吸顶方法，包括个人信息卡也采取了固钉。不过吸顶也还是有点瑕疵，比如页面向下滑动时，导航栏会抖动一下，排查了好久的，不知道是什么影响的。

4. **将文章卡片数据迁移至仓库**。

小改动：
1. 移除了hook文件夹及其所有文件。

2. 建立了direactives文件夹及direactives.ts文件来存放所有自定义指令。
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
