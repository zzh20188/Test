# Git的学习

`git add .` ：提交文件到缓存区, `.` ：全部（文件）

`git commit -m ''` ：提交缓存区文件到仓库，`-m`: 描述

`clear` ：清屏

`git init` ：初始化一个本地仓库

`git clone url` ：克隆一个远程仓库

`git status -s` ：状态，显示未追踪，已追踪，可提交，修改过的文件，`-s`: 简述

`git log` ：进入vim查看日志信息（提交的条目）

`git commit -a` ：添加到暂缓区并提交到仓库

`git reflog` ：查看提交——带七位校验和

`git reset --hard HEAD^ ` ：回滚Head指针提交。`Head`是提交列表最顶部的条目，也就是上次提交。`HEAD^` :上上次提交。`HEAD^9` ：第九次提交。`--hard 校验和` ——某次提交。

`git fetch` ：从远程获得仓库

`git merge`：合并到当前分支

`git pull` ：从远程获得仓库后合并分支

`remoto add [alias] [url]` ：远程版本库添加

*****

**忽略文件**：把不需要跟踪的文件名加入 `.gitignore` ，以行分隔。可以去github开源的gitignore仓库找到对应的模板，这样就能配置适合自己忽略文件。

**密钥生成**：生成公钥和私钥一对，公钥配置在远程，私钥与远程的公钥配对完成连接	

```bash
ssh-keygen - t rsa -C email
```

**分支详解：**分支合并时，需要**指定远程仓库的具体分支**，与本地的当前分支合并。

- 先fetch版本库，然后git branch --set-upstream-to=[alias]/[branch] 设置**上游分支**，由此实现分支跟踪。
- git2.9后不能合并没有**公共结构的分支**，需要merge命令带参数 `--allow-unrelated-histories`

**克隆：**git clone与git fetch不同，clone直接进行追踪，由于不初始化仓库所以**本地即远程**，不存在两边的分支。


