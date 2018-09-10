JavaScript Async Nested "await" Demo
====================================

如果代码比较复杂，比如在`if`或者`for`中使用`await`，它是否还能正常运作，有没有什么限制？

答案是没有，写法跟同步代码一样，很好。

```
npm install
npm run demo
```

It will print:

```
will calculate: 1 + 1
will calculate: 1 + 10
1+10 = 11
will calculate: 1 + 100
1+100 = 101
will calculate: 1 + 1000
1+1000 = 1001
will calculate: 1 + 10000
1+10000 = 10001
will calculate: 2 + 2
2+2 = 4
```
