(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(a,e,s){"use strict";s.r(e);var n=s(7),t=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker安装"}},[a._v("#")]),a._v(" 1.docker安装")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -sSL https://get.daocloud.io/docker | sh\n")])])]),e("h2",{attrs:{id:"_2-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker"}},[a._v("#")]),a._v(" 2.docker")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("启动 停止 重启\nservice start docker\nservice stop docker     \nservice restart docker      \n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("查看docker状态\nservice docker status\nps -ef | grep docker\n")])])]),e("h2",{attrs:{id:"_3-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像"}},[a._v("#")]),a._v(" 3.镜像")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("搜索镜像\ndocker search redis\n拉取镜像\ndocker pull redis:5.0\n查看镜像仓库\ndocker images\n运行镜像\ndocker run -id --name=c_redis -p 6379:6379 redis:5.0\n")])])]),e("h2",{attrs:{id:"_4-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器"}},[a._v("#")]),a._v(" 4.容器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("进入容器\ndocker exec -it id/name bash\n查看容器\ndocker ps\ndocker ps -a\n启动已经停止的容器\ndocker start  id/容器名\nocker restart  id/容器名\n停止容器\ndocker stop id/name\n删除容器\ndocker rm id/name\n停止并删除容器\ndocker stop id/name  &  docker rm id/name\n")])])]),e("p",[a._v("保存容器为镜像")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker commit 容器id 镜像名\n")])])]),e("h2",{attrs:{id:"_5-dockerfile构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-dockerfile构建镜像"}},[a._v("#")]),a._v(" 5.Dockerfile构建镜像")]),a._v(" "),e("p",[a._v("Dockerfile目录结构")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("基础镜像信息\n维护者信息\n镜像操作指令\n容器启动时执行指令\n")])])]),e("p",[a._v("指令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM- 镜像从那里来\n\tFROM java:8\nMAINTAINER- 镜像维护者信息\n\tMAINTAINER hankuou2\t\nRUN- 构建镜像执行的命令，每一次RUN都会构建一层\nCMD- 容器启动的命令，如果有多个则以最后一个为准，也可以为ENTRYPOINT提供参数\n\tCMD ["java", "-jar", "eureka-server-1.0.jar"]\nVOLUME- 定义数据卷，如果没有定义则使用默认\nUSER- 指定后续执行的用户组和用户\nWORKDIR- 切换当前执行的工作目录\n\tWORKDIR ${workdir}\nHEALTHCHECH- 健康检测指令\nARG- 变量属性值，但不在容器内部起作用\nEXPOSE- 暴露端口\n\tEXPOSE 8761 8762\nENV- 变量属性值，容器内部也会起作用\n\tENV workdir=/zch/weifuwu/eureka-server  #工作目录\nADD- 添加文件，如果是压缩文件也解压\n\nCOPY- 添加文件，以复制的形式\n\tCOPY . ${workdir}\nENTRYPOINT- 容器进入时执行的命令\n')])])]),e("p",[a._v("构建镜像")]),a._v(" "),e("p",[a._v("cd到/root/zch/test目录下，创建Dockerfile文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('#基础镜像使用jdk1.8\nFROM java:8\n#作者\nMAINTAINER hankuou2\n# VOLUME /var/lib/docker/tmp并链接到容器的/tmp\nVOLUME /tmp\n# 将jar包添加到容器中并更名\nADD sangeng-blog.jar sangeng_blog.jar\n# 运行jar包\nRUN bash -c \'touch /sangeng_blog.jar\'\nENTRYPOINT ["java","-jar","/sangeng_blog.jar"]\n#暴露7777端口作为微服务\nEXPOSE 7777\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM openjdk:8\n#工作目录\nENV workdir=/zch/weifuwu/eureka-server\nCOPY . ${workdir}\nWORKDIR ${workdir}\nEXPOSE 8761\nCMD ["java", "-jar", "eureka-server-1.0.jar"]\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker build -t name .\n")])])]),e("h2",{attrs:{id:"_6-镜像构建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-镜像构建容器"}},[a._v("#")]),a._v(" 6.镜像构建容器")]),a._v(" "),e("h3",{attrs:{id:"_1-docker-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-run"}},[a._v("#")]),a._v(" 1.docker run")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -id  \\\n-p 9999:3306 -p 9998:3307  \\\n--name=c_mysql  \\\n-v\t/root/zch/conf:/etc/mysql/conf.d\t\\\n-e MYSQL_ROOT_PASSWORD=123456 \\\nmysql:5.6 \n\n\n-p\t映射端口 9999是本机的端口  3306是容器的端口\n可以映射多个端口\n--name\t容器的名字\n-v\t链接 本机的/root/zch/conf链接到容器里面的/etc/mysql/conf.d\n可以链接多个目录\nmysql:5.6\t使用的镜像\n")])])]),e("h3",{attrs:{id:"_2-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-compose"}},[a._v("#")]),a._v(" 2.Docker-compose")]),a._v(" "),e("p",[a._v("安装")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -L https://get.daocloud.io/docker/compose/releases/download/v2.4.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("将可执行权限应用于二进制文件：\nsudo chmod +x /usr/local/bin/docker-compose\n创建软链：\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n测试是否安装成功：\ndocker-compose versio\n")])])]),e("p",[a._v("配置docker-compose.yml")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('#compose版本\nversion: "3" \n\nservices:\n  nginx:\n    image: nginx:1.18.0\n    ports:\n      - "9999:8093"\n    volumes:\n      - /zch/nginx/html:/usr/share/nginx/html\n      - /zch/nginx/logs:/var/log/nginx\n      - /zch/nginx/conf:/etc/nginx\n')])])]),e("p",[a._v("检查当前目录下compose.yml文件是否有语法错误")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker-compose config -q\n")])])]),e("p",[a._v("启动所有docker-compose服务并后台运行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker-compose up -d\n")])])]),e("h2",{attrs:{id:"_7-配置常见容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置常见容器"}},[a._v("#")]),a._v(" 7.配置常见容器")]),a._v(" "),e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" nginx")]),a._v(" "),e("p",[a._v("1.复制出nginx容器配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir /zch\ncd /zch\n# 1.运行容器\ndocker run -p 100:80 --name nginxxxx -d nginx:1.18.0\n# 2.将容器内的配置文件拷贝到当前目录/app中:\ndocker container cp nginxxxx:/etc/nginx .\n# 3.将文件nginx修改为conf \nmv nginx conf\n# 4.创建文件夹nginx  这个文件夹会链接容器nginx\nmkdir nginx\n# 5.将conf目录拷贝到nginx目录\n cp -r conf nginx/\n# 6.停止并删除容器\ndocker stop nginxxxx && docker rm nginxxxx\n\n此时 nginx容器配置在/zch/nginx\n")])])]),e("p",[a._v("2.配置docker-compose")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('配置docker-compose.yml\n\n#compose版本\nversion: "3" \n\nservices:\n  nginx:\n    image: nginx:1.18.0\n    ports:\n      - "9999:8093"\n    volumes:\n      - /zch/nginx/html:/usr/share/nginx/html\n      - /zch/nginx/logs:/var/log/nginx\n      - /zch/nginx/conf:/etc/nginx\n检查当前目录下compose.yml文件是否有语法错误\ndocker-compose config -q\n启动所有docker-compose服务并后台运行\ndocker-compose up -d\n')])])]),e("p",[e("strong",[a._v("注意云服务器开放端口")])]),a._v(" "),e("p",[a._v("3.修改nginx配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nginx.conf\n\n添加\n\t  server {\n        listen       8093;\n        server_name  localhost;\n\n        #charset koi8-r;\n        #\n        #       #access_log  logs/host.access.log  main;\n\n              location / {\n                     root   /usr/share/nginx/html/blogdist;\n                     index  index.html index.htm;\n                     try_files $uri $uri/ /index.html;\n                   }\n\n        }\n")])])]),e("p",[a._v("4.在映射的目录下放静态资源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("上传到映射的/zch/nginx/html中\n")])])]),e("p",[a._v("5.重启容器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker stop ad77e55cbf34\ndocker start ad77e55cbf34\n")])])]),e("p",[a._v("6.nginx实现反向代理")]),a._v(" "),e("p",[a._v("默认端口调到指定端口")]),a._v(" "),e("p",[a._v("实现www.zch1337.xyz直接跳转到www.zch1337.xyz:8093")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("我在修改时发现没实现反向代理\n最后 百度知道了问题所在\n在容器中 /etc/nginx/nginx.conf中有一方代码\ninclude /etc/nginx/conf.d/*.conf 引入了默认的代码\n去对应文件进行修改\nvim /etc/nginx/conf.d/default.conf\nserver {\n    listen 80;\n    server_name localhost;\n    location / {\n        proxy_pass http://localhost:8093;\n    }\n}\n成功!!!\n")])])]),e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" mysql")]),a._v(" "),e("h4",{attrs:{id:"安装并配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置"}},[a._v("#")]),a._v(" 安装并配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull mysql:5.6\nmkdir ~/mysql\ncd ~/mysql/\n  \n  我用数组机到22135端口 哼 sb黑客\n  \ndocker run -id \\\n>  -p 3306:3306 \\\n>  --name=c_mysql \\\n>  -v $PWD/conf:/etc/mysql/conf.d \\\n>  -v $PWD/logs:/logs \\\n>  -v $PWD/data:/var/lib/mysql \\\n>  -e MYSQL_ROOT_PASSWORD=123456 \\\n>  mysql:5.6\n\ndocker exec -it c_mysql /bin/bash\nmysql -uroot -p123456\n")])])]),e("h4",{attrs:{id:"解决1251错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决1251错误"}},[a._v("#")]),a._v(" 解决1251错误")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1、进入容器\ndocker exec -it mysql-test /bin/bash\n2、进入mysql\nmysql -u root -p\n3、 对远程授权\nGRANT ALL ON *.* TO 'root'@'%';\n4、更改密码的加密规则\nALTER USER 'root'@'%' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;\n5、更改root的密码\nALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';\n6、刷新数据库\nflush privileges;\n")])])]),e("h4",{attrs:{id:"解决1045错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决1045错误"}},[a._v("#")]),a._v(" 解决1045错误")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it mysql-test /bin/bash\nmysql -u root -p\nuse mysql;\nselect host, user from user;\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'zhuchenghao123456' WITH GRANT OPTION;\nflush privileges;\n")])])]),e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" redis")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull redis:5.0\ndocker run -id --name=c_redis -p 6379:6379 redis:5.0\n")])])]),e("h2",{attrs:{id:"_8-部署jar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-部署jar"}},[a._v("#")]),a._v(" 8.部署jar")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('FROM openjdk:8\n#工作目录\nENV workdir=/zch/weifuwu/eureka-server\nCOPY . ${workdir}\nWORKDIR ${workdir}\nEXPOSE 8761\nCMD ["java", "-jar", "eureka-server-1.0.jar"]\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker build -t name .\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://www.bilibili.com/video/BV1f94y1U7AB?p=14&vd_source=a55257dc4e553e9dc121804f0b680049\n")])])]),e("h2",{attrs:{id:"_9-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-示例"}},[a._v("#")]),a._v(" 9.示例")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://blog.csdn.net/qq_52030824/article/details/127982206?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22127982206%22%2C%22source%22%3A%22qq_52030824%22%7D\n")])])]),e("h2",{attrs:{id:"_10-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-其他"}},[a._v("#")]),a._v(" 10.其他")]),a._v(" "),e("h3",{attrs:{id:"容器中安装vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器中安装vim"}},[a._v("#")]),a._v(" 容器中安装vim")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -id --name nginx -p 80:80 -p 8093:8093 -p 8094:8094 -v /root/nginx/html:/usr/share/nginx/html -d c2c45d506085\n\ndocker exec -it nginx /bin/bash\n\nmv /etc/apt/sources.list /etc/apt/sources.list.bak\n\ncat /etc/issue\n\nhttps://developer.aliyun.com/mirror/debian?spm=a2c6h.12873639.article-detail.7.18a86eb4dbr226\n\ncat >> /etc/apt/sources.list << EOF\n\ndeb https://mirrors.aliyun.com/debian/ buster main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ buster main non-free contrib\ndeb https://mirrors.aliyun.com/debian-security buster/updates main\ndeb-src https://mirrors.aliyun.com/debian-security buster/updates main\ndeb https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\ndeb https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\n\nEOF\n\napt-get update\n\napt-get install vim\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);