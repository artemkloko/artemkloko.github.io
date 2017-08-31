# curriculum-vitae

```
npm -i
bower install
npm run build
```

// to update gh-pages

```
git checkout gh-pages
git reset --hard 1f87f8c
git checkout master
npm run build
git checkout gh-pages
git add public
git commit
git push -f origin gh-pages
```