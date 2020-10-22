# BT-Utils 函数

## 判断类型

```js
const toString = Object.prototype.toString;
```

**1. isPlainObject: 是否为简单对象**

```typescript
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]';
}
```

**2. isString: 是否为字符串**

```typescript
export function isString(val: any): val is String {
  return toString.call(val) === '[object String]';
}
```

**3. isArray: 是否为数组**

```typescript
export function isArray(val: any): val is Array {
  return toString.call(val) === '[object Array]';
}
```

## 对象合并

### **1. deepMerge**

```typescript
export function deepMerge(...objects: any[]): Object {
  const result = Object.create(null);
  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      if (isPlainObject(val)) {
        if (isPlainObject(result[key])) {
          result[key] = deepMerge(result[key], val);
        } else {
          result[key] = deepMerge(val);
        }
      } else {
        result[key] = val;
      }
    });
  });
  return result;
}
```

## 防抖节流

1. 防抖(Debounce)
   > 当持续触发事件时,一定时间段内没有再触发事件,事件处理函数才会执行一次,如果设定的时间到来之前,又一次触发事件,就重新开始延时。 
- search 搜索联想
- window 触发 resize
- 防止重复提交


2. 节流(Throttle)
   > 当持续触发事件时,保证一定时间段内只调用一次事件处理函数。
- 鼠标不断点击触发
- 监听滚动事件
