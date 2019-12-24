
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

    for (const enumName of Object.keys(definition)) {
        const [value, label, style, params = {}] = definition[enumName];
        console.log(typeof params)
        if (!params || typeof params !== "object") {
            params = {};
        }
        keyToValueMap[enumName] = value;
        valueToLabelMap[value] = label;
        delete params.label;
        delete params.value;
        delete params.style;
        keyToParamsMap[enumName] = {value, label, style, ...params}
    }
    return {
        ...keyToParamsMap,
        // 获取
        getLabel(enumName) {
            return definition[enumName] && definition[enumName][1] || ""
        },
        getLabelFromValue(value) {
            return valueToLabelMap[value] || ""
        },
        getStyleFromKey(enumName) {
            return keyToParamsMap[enumName] || {value: null, label: null, style: null}
        }
    }
};

// // 使用案例如下
// const status = createEnum({
//     AUDITING: [10, '审核中', 'color:red', {type: 1}],
//     PASS: [20, '审核通过', 'color:blue']
// });
// console.log(status, "status");
// console.log(status.getLabel("PASS"));
// console.log(status.getLabelFromValue(10));
// console.log(status.getStyleFromKey("PASS"));

export {
    createEnum
}