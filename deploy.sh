#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd src/.vuepress/dist

# ����Ƿ������Զ�������
echo 'note.gaofee.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# ��������� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ��������� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:gaofee/gaofee.github.io.git master:gh-pages

cd -