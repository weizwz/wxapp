# wxapp
微信小程序常用组件实例

## 项目初始化
默认使用微信小程序提供的模板，步骤：  
打开 **微信开发者工具** --> **新建项目** --> **小程序** --> 选择 **不使用云开发** --> 选择 **JavaScript基础模板** --> **确定**

## Wechat MiniProgram
TDesign 微信小程序组件库。
1. `npm init`
2. `npm i tdesign-miniprogram -S --production`
3. 在 `project.config.json` 文件内增加以下配置
```json
"packNpmRelationList": [
  {
    "packageJsonPath": "./package.json",
    "miniprogramNpmDistDir": "./miniprogram/"
  }
]
```
4. 点击 **工具** --> **构建npm** 生成 --> **miniprogram_npm** 文件夹
