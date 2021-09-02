
//viewport配置文件

const path = require('path');

module.exports = ({ file }) => {
    // 使用path.join('node_modules','vant')适应不同的操作系统，在mac下为node_modules/vant，在windows下结果为node_modules\vant
    //   const designWidth = file.dirname.includes(path.join('node_modules','vant')) ? 375 : 750;
    return {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                unitToConvert: "px",
                // viewportWidth: designWidth,
                viewportWidth: 375,
                unitPrecision: 6,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: [],
                landscape: false
            }
        }
    }

}