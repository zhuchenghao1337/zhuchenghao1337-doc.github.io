(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{335:function(e,a,t){"use strict";t.r(a);var n=t(7),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"springmvc是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc是什么"}},[e._v("#")]),e._v(" SpringMVC是什么")]),e._v(" "),a("p",[e._v("基于MVC开发模式的框架，用来优化控制器，主要包括优化接收数据。")]),e._v(" "),a("h2",{attrs:{id:"springmvc的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的优点"}},[e._v("#")]),e._v(" SpringMVC的优点")]),e._v(" "),a("ol",[a("li",[e._v("轻量级，基于MVC的框架")]),e._v(" "),a("li",[e._v("易于上手，功能强大")]),e._v(" "),a("li",[e._v("具备IOC和AOP")]),e._v(" "),a("li",[e._v("完全基于注解开发")])]),e._v(" "),a("h2",{attrs:{id:"springmvc开发步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc开发步骤"}},[e._v("#")]),e._v(" SpringMVC开发步骤")]),e._v(" "),a("ol",[a("li",[e._v("新建项目，选择webapp模板")]),e._v(" "),a("li",[e._v("补全目录")]),e._v(" "),a("li",[e._v("修改pom.xml文件，添加资源指定，添加SpringMVC、Servlet等等依赖")]),e._v(" "),a("li",[e._v("添加springmvc.xml文件，指定包扫描，添加视图解析器")]),e._v(" "),a("li",[e._v("删除web.xml文件，新建web.xml")]),e._v(" "),a("li",[e._v("在web.xml文件中注册SpringMVC框架")]),e._v(" "),a("li",[e._v("新建index.jsp页面，发送请求给服务器")]),e._v(" "),a("li",[e._v("开发控制器(servlet)")]),e._v(" "),a("li",[e._v("添加tomcat，进行测试功能")])]),e._v(" "),a("h2",{attrs:{id:"分析web请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析web请求"}},[e._v("#")]),e._v(" 分析web请求")]),e._v(" "),a("p",[e._v("index.jsp<-----\x3eDispatcherServlet<----\x3eSpringMVC的处理器是一个普通方法")]),e._v(" "),a("h2",{attrs:{id:"requestmapping注解详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping注解详解"}},[e._v("#")]),e._v(" @RequestMapping注解详解")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("加在方法上，为该方法注册一个可以访问的路径")])]),e._v(" "),a("li",[a("p",[e._v("加载类上，相当于包名")])]),e._v(" "),a("li",[a("p",[e._v("此注解可区分get和post请求")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Controller\npublic class RequestAction {\n    @RequestMapping(value = "/request", method = RequestMethod.GET)\n    public String requestdemo1() {\n        System.out.println("我处理了get请求");\n        return "main";\n    }\n    @RequestMapping(value = "/request", method = RequestMethod.POST)\n    public String requestdemo2() {\n        System.out.println("我处理了post请求");\n        return "main";\n    }\n}\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"前端数据提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端数据提交"}},[e._v("#")]),e._v(" 前端数据提交")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("单个数据提交( 自动注入，类型自动转化)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<form action="${pageContext.request.contextPath}/one.action" method="post">\n        姓名:<input type="text" name="myname"><br>\n        年龄:<input type="text" name="myage"><br>\n        <input type="submit" value="提交">\n</form>\n\naction:\n@RequestMapping(value = "/one", method = RequestMethod.POST)\n    public String oneSubmit(String myname, int myage){   //重点 自动注入，类型自动转化\n        System.out.println("姓名:" + myname + " 年龄:" + (myage + 100));\n        return "main";\n    }\n')])])])]),e._v(" "),a("li",[a("p",[e._v("对象封装提交数据")]),e._v(" "),a("p",[e._v("​\t保证请求参数的名称和实体类中成员变量相对应，则自动注入")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@RequestMapping(value = "/two", method = RequestMethod.POST)\n    public String twoSubmit(Users users){\n        System.out.println(users);\n        System.out.println("姓名:" + users.getMyname() + " 年龄:" + (users.getMyname() + 100));\n        return "main";\n}\n\npublic class Users {\n    private String myname;\n    private Integer myage;\n}\n<h2>对象封装数据提交</h2>\n    <form action="${pageContext.request.contextPath}/two.action" method="post">\n        姓名:<input type="text" name="myname"><br>\n        年龄:<input type="text" name="myage"><br>\n        <input type="submit" value="提交">\n    </form>\n\n\n')])])])]),e._v(" "),a("li",[a("p",[e._v("动态占位符提交 从url中提取")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<h2>动态占位符提交</h2>\n<a href="${pageContext.request.contextPath}/three/zhansan/22.action">点我</a>\n\n@RequestMapping(value = "/three/{uname}/{uage}")\n    public String threeSubmit(\n    \t\t//使用注解\n            @PathVariable(value = "uname")\n            String name,\n            //使用注解\n            @PathVariable(value = "uage")\n            int age\n    ){\n        System.out.println("姓名:" + name + " 年龄:" + (age + 100));\n        return "main";\n    }\n\n')])])])]),e._v(" "),a("li",[a("p",[e._v("映射名称不一致 一般提取")]),e._v(" "),a("p",[e._v("​\t提交请求参数与action方法的形参不一致，使用注解@RequestParam")])]),e._v(" "),a("li",[a("p",[e._v("手动提取")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@RequestMapping("/five")\n    public String fivesubmit(HttpServletRequest request){\n        String name = request.getParameter("name");\n        System.out.println(name);\n        return "main";\n    }\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"tomcat9解决中文编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat9解决中文编码"}},[e._v("#")]),e._v(" tomcat9解决中文编码")]),e._v(" "),a("p",[e._v("原理是过滤器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("xml文件中配置\n\x3c!--中文编码过滤器--\x3e\n    <filter>\n        <filter-name>encode</filter-name>\n        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n        \x3c!--参数配置--\x3e\n        \x3c!--\n        private String encoding;\n        private boolean forceRequestEncoding;\n        private boolean forceResponseEncoding;\n        --\x3e\n        <init-param>\n            <param-name>encoding</param-name>\n            <param-value>UTF-8</param-value>\n        </init-param>\n        <init-param>\n            <param-name>forceRequestEncoding</param-name>\n            <param-value>true</param-value>\n        </init-param>\n        <init-param>\n            <param-name>forceResponseEncoding</param-name>\n            <param-value>true</param-value>\n        </init-param>\n    </filter>\n    <filter-mapping>\n        <filter-name>encode</filter-name>\n        <url-pattern>/*</url-pattern>\n    </filter-mapping>\n")])])]),a("h2",{attrs:{id:"action方法的返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action方法的返回值"}},[e._v("#")]),e._v(" action方法的返回值")]),e._v(" "),a("ol",[a("li",[e._v("String:客户端资源的地址，自动拼接前缀和后缀，可以指定返回的路径           ------页面跳转")]),e._v(" "),a("li",[e._v("Object:返回json格式的对象，自动将对象或集合转为json，必须添加Jackson依赖，一般用于ajax请求")]),e._v(" "),a("li",[e._v("void:无返回值，一般用于ajax请求请求")]),e._v(" "),a("li",[e._v("基本数据类型:用于ajax请求")]),e._v(" "),a("li",[e._v("ModeAndView:返回数据和视图对象")])]),e._v(" "),a("h2",{attrs:{id:"局部刷新-ajax请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部刷新-ajax请求"}},[e._v("#")]),e._v(" 局部刷新-ajax请求")]),e._v(" "),a("p",[e._v("实例:使用ajax请求访问服务器，返回学生集合")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("添加Jackson依赖")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<dependency>\n   <groupId>com.fasterxml.jackson.core</groupId>\n      <artifactId>jackson-databind</artifactId>\n      <version>2.9.8</version>\n</dependency>\n")])])])]),e._v(" "),a("li",[a("p",[e._v("在webapp目录下新建js目录，添加jQuery函数库")])]),e._v(" "),a("li",[a("p",[e._v("在index.jsp上添加注解@ResponseBody，用来处理ajax请求")])]),e._v(" "),a("li",[a("p",[e._v("在springmvc.xml文件中添加注解驱动  <"),a("a",{attrs:{href:"mvc:annotation-driven"}},[e._v("mvc:annotation-driven")]),e._v("</mvc:annotation-driven>>用来解析@ResponseBody注解")])])]),e._v(" "),a("h2",{attrs:{id:"页面跳转-请求转发和重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面跳转-请求转发和重定向"}},[e._v("#")]),e._v(" 页面跳转-请求转发和重定向")]),e._v(" "),a("p",[e._v("请求转发是基于服务器的跳转")]),e._v(" "),a("p",[e._v("重定向是基于客户端的跳转")]),e._v(" "),a("p",[e._v("转发和重定向的本质区别？")]),e._v(" "),a("ul",[a("li",[e._v("转发：是由WEB服务器来控制的。A资源跳转到B资源，这个跳转动作是Tomcat服务器内部完成的。")]),e._v(" "),a("li",[e._v("重定向：是浏览器完成的。具体跳转到哪个资源，是浏览器说了算。")])]),e._v(" "),a("p",[e._v("文件:D:\\zhuchenghao\\04-Code\\02-Java\\03Main\\07-SpringMVC\\springmvc_04_jump")]),e._v(" "),a("h2",{attrs:{id:"页面跳转传值-springmvc默认的参数类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面跳转传值-springmvc默认的参数类型"}},[e._v("#")]),e._v(" 页面跳转传值-SpringMVC默认的参数类型")]),e._v(" "),a("p",[e._v("默认参数类型不需要去创建，直接使用")]),e._v(" "),a("ul",[a("li",[e._v("HttpServletRequest")]),e._v(" "),a("li",[e._v("HttpServletResponse")]),e._v(" "),a("li",[e._v("HttpSession")]),e._v(" "),a("li",[e._v("Model")]),e._v(" "),a("li",[e._v("Map")]),e._v(" "),a("li",[e._v("ModelMap")])]),e._v(" "),a("p",[e._v("注意:Map,Model,ModelMap和request一样，使用请求作用域进行数据传递，所以服务器的跳转必须是请求转发，不能是重定向")]),e._v(" "),a("p",[e._v("文件:D:\\zhuchenghao\\04-Code\\02-Java\\03Main\\07-SpringMVC\\springmvc_04_jump")]),e._v(" "),a("h2",{attrs:{id:"日期处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期处理"}},[e._v("#")]),e._v(" 日期处理")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("日期的提交处理")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("单个日期处理")]),e._v(" "),a("p",[e._v("使用注解@DateTimeFormat和在springmvc中添加注解驱动<"),a("a",{attrs:{href:"mvc:annotation-driven"}},[e._v("mvc:annotation-driven")]),e._v("</mvc:annotation-driven>")])]),e._v(" "),a("li",[a("p",[e._v("多个日期")]),e._v(" "),a("p",[e._v("注册一个注解，用来解析所有的日期类型，自动转换，还需要SimpleDateFormat美化日期")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    @InitBinder\n    public void initBinder(WebDataBinder db) {\n        db.registerCustomEditor(Date.class, new CustomDateEditor(sf,true));\n    }\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("日期的显示")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("单个日期对象显示，使用SimpleDateFormat美化")])]),e._v(" "),a("li",[a("p",[e._v("list中的实体类对象的成员变量是日期类型，要使用JSTL进行显示")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('封装日期类型变量到对象里\nSimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");\n\nStudent student1 = new Student("zhansan1", sf.parse("2000-01-01")\n\n')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"springmvc拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc拦截器"}},[e._v("#")]),e._v(" SpringMVC拦截器")]),e._v(" "),a("ul",[a("li",[e._v("时机\n"),a("ul",[a("li",[e._v("preHandle() 之前")]),e._v(" "),a("li",[e._v("postHandle() 处理后，未被渲染")]),e._v(" "),a("li",[e._v("afterCompletion() 善后")])])]),e._v(" "),a("li",[e._v("实现\n"),a("ul",[a("li",[e._v("继承子类")]),e._v(" "),a("li",[e._v("实现接口")])])]),e._v(" "),a("li",[e._v("步骤\n"),a("ol",[a("li",[e._v("登录方法，在session中存储信息")]),e._v(" "),a("li",[e._v("开发拦截器的功能，实现接口，重写方法")]),e._v(" "),a("li",[e._v("springmvc.xml中注册拦截器")])])])]),e._v(" "),a("p",[e._v("​")])])}),[],!1,null,null,null);a.default=r.exports}}]);