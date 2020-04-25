/**
 * 创建枚举定义函数
 * 枚举的className,最好全大写或者全小写
 * {enumName: [值，含义，样式]}，如需增加需要更改枚举定义函数
 * value枚举值、key枚举名称、style枚举样式
 * params参数
 * @param {*} definition
 */
const createEnum = (definition) => {
  const keyToValueMap = {}; //根据key设置value
  const valueToLabelMap = {}; //根据value设置Key
  const keyToParamsMap = {}; //根据key获取所有的信息
  const allList = []; //所有key的值变成列表

  const valueToParamsMap = {}; //根据value设置Params

  for (const enumName of Object.keys(definition)) {
    const [value, label, style, params = {}] = definition[enumName];
    console.log(typeof params)
    if (!params || typeof params !== "object") {
      // params = {};
    }
    if (value) {
      valueToLabelMap[value] = label;
      valueToParamsMap[value] = {label, style, ...params}
    }
    delete params.label;
    delete params.value;
    delete params.style;
    if (enumName) {
      keyToValueMap[enumName] = value;
      keyToParamsMap[enumName] = {value, label, style, ...params}
      allList.push(keyToParamsMap[enumName]); //列表
    }
  }

  console.log("keyToValueMap", keyToValueMap, valueToLabelMap, keyToParamsMap, allList);
  return {
    ...keyToParamsMap,
    // 获取值相关列表
    getAllList() {
      return allList;
    },
    // 根据状态Key获取名称
    getLabel(enumName) {
      return enumName && definition[enumName] && definition[enumName][1] || ""
    },
    // 根据状态的值获取名称
    getLabelFromValue(value) {
      return value && valueToLabelMap[value] || "";
    },
    // 根据状态的Key获取样式
    getStyleFromKey(enumName) {
      return enumName && keyToParamsMap[enumName] || {value: null, label: null, style: null}
    },
    // 根据value去获取所有参数状态
    getParamsFromValue(value) {
      return value && valueToParamsMap[value] || "";
    },
    // 根据value去获取所有参数状态
    getHtmlFromValue(value) {
      return value && `<span style="${valueToParamsMap[value] && valueToParamsMap[value].style || ''}">${valueToLabelMap[value] || ""}</span>` || "";
    }
  }
};

// // 使用案例如下
// const status = createEnum({
//     AUDITING: [10, '审核中', 'color:red', {type: 1}],
//     PASS: [20, '审核通过', 'color:blue'],
//     init: [30]
// });
// console.log(status, "status");
// console.log(status.getLabel("PASS"));
// console.log(status.getLabelFromValue(10));
// console.log(status.getStyleFromKey("PASS"));
// console.log(status.getParamsFromValue(10));
// console.log(status.getHtmlFromValue(30));

export {
  createEnum
}
