#!/usr/bin/env sh

npm run build:preview

# 进入生成的文件夹
cd preview

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tu6ge/formulate-el-ui.git master:gh-pages