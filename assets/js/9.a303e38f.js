(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(t,a,s){"use strict";s.r(a);var v=s(7),n=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"高内聚与低耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高内聚与低耦合"}},[t._v("#")]),t._v(" 高内聚与低耦合")]),t._v(" "),a("p",[t._v("不同模块之间的关系就是耦合；模块内不同功能的联系就是类聚。")]),t._v(" "),a("p",[a("strong",[t._v("模块")]),t._v("怎么定义？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/zhuchenghao1337/github-images/main/2023/20230402173928.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"软件架构模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件架构模式"}},[t._v("#")]),t._v(" 软件架构模式")]),t._v(" "),a("h3",{attrs:{id:"mvc架构模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc架构模式"}},[t._v("#")]),t._v(" MVC架构模式")]),t._v(" "),a("p",[t._v("把一个交互式应用程序划分为3个部分：")]),t._v(" "),a("ul",[a("li",[t._v("模型：包含业务逻辑和数据")]),t._v(" "),a("li",[t._v("视图：进行数据展示")]),t._v(" "),a("li",[t._v("控制器：接受输入，选择业务逻辑实现，选择试图响应")])]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("多个视图共享一个模型，提高代码可重用行。")]),t._v(" "),a("li",[t._v("三个模块相互独立，松耦合架构")]),t._v(" "),a("li",[t._v("控制器提高了应用程序的灵活性和可配置性")])]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("原理复杂")]),t._v(" "),a("li",[t._v("增加了系统结构和实现的复杂性")]),t._v(" "),a("li",[t._v("视图对模型数据的访问效率低")])]),t._v(" "),a("h3",{attrs:{id:"待更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待更新"}},[t._v("#")]),t._v(" 待更新....")]),t._v(" "),a("h2",{attrs:{id:"gof设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gof设计模式"}},[t._v("#")]),t._v(" GoF设计模式")]),t._v(" "),a("ul",[a("li",[t._v("设计模式：一种可以重复利用的解决方案。")]),t._v(" "),a("li",[t._v("除了GoF23种设计模式之外，还是来得及纳入的设计模式，比如MVC模式、DAO模式")]),t._v(" "),a("li",[t._v("分类：创建型、结构型和行为型")])]),t._v(" "),a("h3",{attrs:{id:"_1-工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-工厂模式"}},[t._v("#")]),t._v(" 1.工厂模式")]),t._v(" "),a("p",[t._v("工厂模式通常有三种模式：")]),t._v(" "),a("ul",[a("li",[t._v("简单工厂模式（Simple Factory) ：又叫静态 工厂模式，不属于23种设计模式之一")]),t._v(" "),a("li",[t._v("工厂方法模式（Factory Method）：23种设计模式之一")]),t._v(" "),a("li",[t._v("抽象工厂模式（Abstract Factory）：23种设计模式之一")])]),t._v(" "),a("p",[a("strong",[t._v("简单工厂模式")])]),t._v(" "),a("ul",[a("li",[t._v("又叫静态工厂模式，不属于23种设计模式")]),t._v(" "),a("li",[t._v("有三种角色：抽象产品、具体产品和静态工厂")]),t._v(" "),a("li",[t._v("优点：将创建对象（生产）和使用（消费）分离，消费者不需要关心怎么生产，直接用就ok了")]),t._v(" "),a("li",[t._v("缺点：不满足开闭原则，扩展需要修改工厂类；工厂的责任过于大。")])]),t._v(" "),a("p",[a("strong",[t._v("抽象产品类")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * 抽象产品类\n */\npublic abstract class Weapon {\n\n    /**\n     * 每一个武器都可以工具\n     */\n    public abstract void attack();\n\n}\n")])])])]),t._v(" "),a("p",[a("strong",[t._v("具体产品")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GUN\n\npublic class Gun extends Weapon{\n    public void attack() {\n        System.out.println("我是gun，我可以开枪进行攻击....");\n    }\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Fighter\n\npublic class Fighter extends Weapon{\n    public void attack() {\n        System.out.println("我是战斗机，我可以扔炸弹....");\n    }\n}\n')])])])]),t._v(" "),a("p",[a("strong",[t._v("工厂")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * 抽象产品类\n */\npublic abstract class Weapon {\n\n    /**\n     * 每一个武器都可以工具\n     */\n    public abstract void attack();\n\n}\n")])])])]),t._v(" "),a("p",[a("strong",[t._v("消费者进行消费")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('/**\n * 这个类模拟的是消费者\n */\npublic class Main {\n    public static void main(String[] args) {\n        // 获取gun\n        Weapon gun = WeaponFactory.getWeapon("GUN");\n        gun.attack();\n        // 获取fighter\n        Weapon fighter = WeaponFactory.getWeapon("FIGHTER");\n        fighter.attack();\n    }\n}\n')])])])]),t._v(" "),a("h2",{attrs:{id:"代码-框架的侵入式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码-框架的侵入式"}},[t._v("#")]),t._v(" 代码/框架的侵入式")]),t._v(" "),a("p",[a("strong",[t._v("侵入式")]),t._v("：")]),t._v(" "),a("p",[t._v("这个代码/模块嵌入了其他的代码，可能是引入的框架，或者是通过接口继承得到的。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("缺点")]),t._v(" "),a("p",[t._v("这些代码不引入框架就没法使用，没法单元测试。")])]),t._v(" "),a("p",[a("strong",[t._v("非侵入式")]),t._v("：")]),t._v(" "),a("p",[t._v("比如spring框架是非侵入式的，你引入spring的相关依赖，就可以使用。")]),t._v(" "),a("h2",{attrs:{id:"单例还是多例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例还是多例"}},[t._v("#")]),t._v(" 单例还是多例")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念：")]),t._v(" "),a("p",[t._v("单例和多例是设计模式中的两个概念。")]),t._v(" "),a("p",[a("strong",[t._v("单例模式")]),t._v("是指一个类只能创建一个对象实例，并且该对象实例在整个程序运行期间只会被创建一次。这种模式的使用可以有效地节省系统资源，避免了创建多个对象实例带来的性能开销。在实际开发中，单例模式常常被用来管理全局变量、日志输出、数据库连接等场景。")]),t._v(" "),a("p",[a("strong",[t._v("多例模式")]),t._v("是指一个类可以创建多个对象实例，并且这些实例之间相互独立。每个对象实例可以有不同的属性或状态，而且可以根据需求动态地创建或销毁。多例模式在实际开发中应用较少，但在某些场景下，例如线程池、数据库连接池等情况下，可以有效地管理资源和提高程序性能。")]),t._v(" "),a("h3",{attrs:{id:"spring的单例和多例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring的单例和多例"}},[t._v("#")]),t._v(" spring的单例和多例")]),t._v(" "),a("p",[t._v("spring在默认情况下，在根据配置文件new "),a("strong",[t._v("Spring上下文对象")]),t._v("时，同时创建被管理的bean对象，这些bean对象是单例的。")]),t._v(" "),a("p",[t._v("可以在配置文件中，配置scope属性为prototype（默认为singleton），此时new "),a("strong",[t._v("上下文对象")]),t._v("时不会创建该对象，只有当调用getBean方法获取对象时才会创建对象，而且这个bean对象时多例的（每调用一次getBean方法就会新new一个对象）。")])])}),[],!1,null,null,null);a.default=n.exports}}]);