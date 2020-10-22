# Git 基本命令

## 文档查询

- **`git help`** 展示 git 基础命令列表
- **`git help -a`** 展示 git 全部命令列表
- **`git help <command>`** 展示具体命令说明

## 基本概念

- **.git**  --- 版本库

- **工作区**  --- 项目在本地存放的位置
- **暂存区** --- `git add` 之后暂时存放文件的地方
- **本地仓库** --- `git commit` 将暂存区的文件添加到本地仓库
- **远程仓库 ** --- 例如 `github`  、`gitee` 等托管项目的地方

## 配置命令

- `git config --list` 列出当前配置
- `git config --local --list` 列出 **Repository** 配置

## 分支管理规范

## 分支操作

- `git checkout -b <branch-name>`  新建分支并切换
- `git branch -f master HEAD~3` 强制修改分支位置

## 更改状态

## 撤销变更

- **`git reset`** 
- **`git revert`** 
- **`git checkout -- <file>`** 

## 差异比较

## fetch 命令

## 文件暂存

## 

git rabse -i 

git commit --amend

git describe