function resizeRation() {
    var ratioY = $(window).height() / 1080;
    var rationX = $(window).width() / 1920;
    $('body').css({
        width: 1920,
        height: 1080,
        transform: "scale(" + rationX + "," + ratioY + ")",
        transformOrigin: "left top"
    });


    //  var ratio = $(window).height() / 1080;
    //  $('body').css({
    //     width: 1920,
    //     height: 1080,
    //     transform: "scale(" + rationX + "," + ratioY + ")",
    //      transformOrigin: "left top",
    //      backgroundSize: 100 * (window.screen.width / $(window).width() * ratioY) + "%" + ' 100%',
    //      backgroundPosition: ($(window).width() - $('body').width() * ratioY) / 2 + "px top",
    //     //  marginLeft: ($(window).width() - $('body').width() * ratioY) / 2

    //  });
}
resizeRation();
$(window).on('resize', function () {
    resizeRation();
})

//chart1  各区域垃圾汇总
function initChart1() {
    var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            show: false,
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: "#fff",
                fontSize: 10
            },
            data: ['垃圾重量/kg']
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                }
            }
        },
        yAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10,//坐标值得具体的颜色
                }
            },
            data: ['中原区', '经济开发区', '惠济区', '高新区', '金水区', '二七区', '管城回族区', '登封市', '新郑市', '新密市', '荥阳市', '巩义市', '中牟县', '上街区']
        },
        series: [
            {
                name: '垃圾重量/kg',
                type: 'bar',
                data: [33920, 31320, 24999, 14322, 12000, 10900, 9377, 8333, 7222, 6422, 6332, 5000, 4530, 3320],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,                                          //左、下、右、上
                            [
                                { offset: 0, color: '#f4c148' },                   //柱图渐变色
                                { offset: 1, color: '#ef2c6a' },                   //柱图渐变色
                            ]
                        ),
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#f4c048',
                                fontSize: 10
                            }
                        }
                    }
                }
            }
        ]
    };

    var chart1 = echarts.init(document.getElementById('chart1'));

    chart1.setOption(option);
}



//chart3  总品类回收量

function initChart3() {
    var option = {

        legend: {
            show: false
        },
        series: [{
            type: 'pie',
            radius: [30, '55%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            color: ['#32fd99', '#319ae4', '#ffc547', '#e6526b', '#ff7e4b'],
            data: [{
                value: 15,
                name: '金属'
            }, {
                value: 16,
                name: '纸张'
            }, {
                value: 20,
                name: '塑料'
            }, {
                value: 14,
                name: '玻璃'
            }, {
                value: 35,
                name: '其他'
            }],
            label: {
                normal: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    },
                    formatter: function (param) {
                        return param.name + ':\n' + Math.round(param.percent) + '%';
                    }
                }
            },
            labelLine: {
                normal: {
                    smooth: true,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };

    var chart3 = echarts.init(document.getElementById('chart3'));

    chart3.setOption(option);
}



//chart4 新增用户数

function initChart4() {
    var option = {
        tooltip: {},
        grid: {
            top: "3%",
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true,
        },
        legend: {
            show: false
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#000'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#fff',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',

                },
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: '新增注册数',
            type: 'line',
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "#28ffb3", // 线条颜色
                },
                borderColor: '#f0f'
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                normal: {
                    color: "#28ffb3",

                }
            },
            tooltip: {
                show: false
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,154,120,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0, 0)'
                    }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [393, 438, 485, 631, 689, 824, 987, 652, 378, 1025, 250, 351]
        }]
    };

    var chart4 = echarts.init(document.getElementById('chart4'));

    chart4.setOption(option);
}


//chart5 近7日回收总垃圾重量对比

function initChart5() {
    var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            show: false,
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false,
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10,//坐标值得具体的颜色
                }
            },
            data: ['07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                }
            }
        },

        series: [
            {
                name: '垃圾重量/kg',
                type: 'bar',
                data: [852, 1020, 763, 562, 1080, 320, 570],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,                                          //左、下、右、上
                            [
                                { offset: 0, color: '#f4c148' },                   //柱图渐变色
                                { offset: 1, color: '#ef2c6a' },                   //柱图渐变色
                            ]
                        ),
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#f4c048',
                                fontSize: 10
                            }
                        }
                    }
                }
            }
        ]
    };

    var chart5 = echarts.init(document.getElementById('chart5'));

    chart5.setOption(option);
}

//chart6 小区回收数量排行

function initChart6() {
    var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            show: false,
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false,
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 11,//坐标值得具体的颜色
                }
            },
            data: ['正商蓝砖', '和谐家园', '美玲美景', '和世界区', '招商公园']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                }
            }
        },

        series: [
            {
                name: '回收数量排行',
                type: 'bar',
                data: [852, 1020, 763, 562, 1080],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,                                          //左、下、右、上
                            [
                                { offset: 0, color: '#622ebe' },                   //柱图渐变色
                                { offset: 1, color: '#933d8e' },                   //柱图渐变色
                            ]
                        )
                    }
                }
            }
        ]
    };

    var chart6 = echarts.init(document.getElementById('chart6'));

    chart6.setOption(option);
}


function initChart7() {
    var myColor = ['#81E7ED']
    var dataLine = [50, 66, 33, 25]
    let positionLeft = 0.4,
        max = 100 + 2 * positionLeft
    var option = {
        backgroundColor: '#101E44',
        grid: [
            {
                left: '8%',
                top: '12%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            {
                left: '10%',
                top: '12%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            }
        ],
        xAxis: [{
            max: max,
            show: false
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#81E7ED',
                    fontSize: '16'
                }
            },
            data: ['智能科技', '人工科技', '智能装备制造', '核能科技']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            show: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16'
                }
            },
            data: [1, 1, 1, 1]
        }, {

            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: []
        }],
        series: [

            { //间距
                type: 'bar',
                barWidth: 15,
                stack: 'b',
                legendHoverLink: false,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },

                data: [positionLeft, positionLeft, positionLeft, positionLeft]
            }, {
                name: '条',
                type: 'bar',
                stack: 'b',
                yAxisIndex: 0,
                data: dataLine,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        distance: 10,
                        formatter: function (param) {
                            return param.value + '%'
                        },
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16'
                        }
                    }
                },
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length
                            return myColor[params.dataIndex % num]
                        }
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.8, 99.9, 99.9, 99.9],
                barWidth: 21,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 2
                    }
                },
                z: 1
            },
            {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100],
                barWidth: 23,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        distance: 10,
                        formatter: function (data) {
                            return dataLine[data.dataIndex] + "%";
                        },
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 0
                    }
                },
                z: 0
            },
            /*     {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    barGap: '-100%',
                    data: [0, 0, 0, 0],
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            color: '#0e2147',
                            barBorderRadius: 0
                        }
                    },
                    z: 1
                },
                {
                    name: '外框',
                    type: 'bar',
                    yAxisIndex: 2,
                    barGap: '-100%',
                    data: [2, 3, 4, 5],
                    barWidth: 22,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length
                                return myColor[params.dataIndex % num]
                            },
                            barBorderRadius: 0
                        }
                    },
                    z: 0
                }*/

        ]
    }

    var chart7 = echarts.init(document.getElementById('chart7'));

    chart7.setOption(option);
}



//chart8  垃圾数据月分布情况图

function initChart8() {
    var option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: { normal: {} },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    var chart8 = echarts.init(document.getElementById('chart8'));

    chart8.setOption(option);
}

//chart9 垃圾数据时间分布情况
function initChart9() {
    var option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    var chart9 = echarts.init(document.getElementById('chart9'));

    chart9.setOption(option);
}

//chart10 垃圾数据周分布情况
function initChart10() {
    var option = {
        color: ['#e43446', '#ebc017', '#43c798', "#ac4ed3"],//数据蛛网线条的颜色，示例中为红黄绿
    
        legend: { //图例的设置
            show: false
        
        },
        radar: [{//每个网格的指数名称，类似于X轴或Y轴上的数据的值大小
            indicator: [{
                text: '阅读能力',
                max: 100
            },
            {
                text: '听力能力',
                max: 100
            },
            {
                text: '朗读能力',
                max: 100
            },
            {
                text: '对话能力',
                max: 100
            },
            {
                text: '写作能力',
                max: 100
            },
            {
                text: '对我的',
                max: 100
            }
            ],
            center: ['50%', '50%'],//统计图位置，示例是居中
            radius: '70%',//统计图大小
            startAngle: 90,//统计图起始的角度
            splitNumber: 3,//统计图蛛网的网格分段，示例分为三段
            // shape: 'circle',//蛛网是圆角还是尖角
            name: {
                formatter: '{value}',//蛛网轴尖的数据名称
                textStyle: {//蛛网轴尖的文字样式
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 蛛网在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(76, 140, 200, 0.05)', 'rgba(76, 140, 200, 0.1)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //蛛网轴线上的颜色，由内向外发散的那条
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {//蛛网环形的线条颜色
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        },],
        series: [{
            name: '',
            type: 'radar',//统计图专业名称为雷达图，这里叫做蛛网图
            itemStyle: {//数据样式设置
                emphasis: {//鼠标悬浮效果
                    lineStyle: {
                        width: 4//线条粗细变成4
                    }
                }
            },
            data: [{
                name: '张䉈',//数据名称
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(228,52,70,0.5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(228,52,70,0.5)'
                            }],
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: { // 单个拐点文本的样式设置                            
                    normal: { // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top', // 标签的位置。[ default: top ]
                        distance: 4, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#ccc', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14, // 文字的字体大小
                    },
                    emphasis: {
                        show: true,
                        formatter: '{c}'//显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
                    }
                },
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#ccc',//单个数据标记描边的颜色
                        borderWidth: 2.5//单个数据标记描边的大小
                    }
                },
            }, {
                name: '李鸶',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#ccc',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(235,192,23,0.5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(235,192,23,0.5)'
                            }],
                        },
                        opacity: 1
                    }
                },
                label: {
                    normal: {
                        position: 'top',
                        distance: 4,
                        color: '#ccc',
                        fontSize: 14,
                    },
                    emphasis: {
                        show: true,
                        formatter: '{c}'
                    }
                },
            }, {
                name: '王鋈',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#ccc',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(67,199,152,0.5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(67,199,152,0.5)'
                            }],
                            globalCoord: false
                        },
                        opacity: 1
                    }
                },
                label: {
                    normal: {
                        position: 'top',
                        distance: 4,
                        color: '#ccc',
                        fontSize: 14,
                    },
                    emphasis: {
                        show: true,
                        formatter: '{c}'
                    }
                },
            }, {
                name: '张1䉈',//数据名称
                value: [35, 61, 95, 40, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(172,78,211,0.5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(172,78,211,0.5)'
                            }],
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: { // 单个拐点文本的样式设置                            
                    normal: { // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top', // 标签的位置。[ default: top ]
                        distance: 4, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#ccc', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14, // 文字的字体大小
                    },
                    emphasis: {
                        show: true,
                        formatter: '{c}'//显示分析的数字值，a为统计图名称，b为学生姓名,c为学生这项能力的值
                    }
                },
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#ccc',//单个数据标记描边的颜色
                        borderWidth: 2.5//单个数据标记描边的大小
                    }
                },
            },]
        },]
    };


    var chart10 = echarts.init(document.getElementById('chart10'));

    chart10.setOption(option);
}

function initChart11() {
    var myColor = ['#81E7ED']
   var dataLine = [50, 66, 33, 25]
   let positionLeft = 0.4,
      max = 100 + 2*positionLeft
   var option = {
       backgroundColor: '#101E44',
       grid: [
           {
           left: '8%',
           top: '12%',
           right: '5%',
           bottom: '8%',
           containLabel: true
       },
       {
           left: '10%',
           top: '12%',
           right: '5%',
           bottom: '8%',
           containLabel: true
       }
           ],
       xAxis: [{
           max:max,
           show: false
       }],
       yAxis: [{
           axisTick: 'none',
           axisLine: 'none',
           offset: '27',
           axisLabel: {
               textStyle: {
                   color: '#81E7ED',
                   fontSize: '16'
               }
           },
           data: ['智能科技', '人工科技', '智能装备制造', '核能科技']
       }, {
           axisTick: 'none',
           axisLine: 'none',
           show: false,
           axisLabel: {
               textStyle: {
                   color: '#ffffff',
                   fontSize: '16'
               }
           },
           data: [1, 1, 1, 1]
       }, {
  
           axisLine: {
               lineStyle: {
                   color: 'rgba(0,0,0,0)'
               }
           },
           data: []
       }],
       series: [
           
          { //间距
              type: 'bar',
              barWidth: 15,
              stack: 'b',
              legendHoverLink: false,
              itemStyle: {
                  normal: {
                      color: 'rgba(0,0,0,0)'
                  }
              },
  
              data: [positionLeft,positionLeft,positionLeft,positionLeft]
          },{
           name: '条',
           type: 'bar',
           stack: 'b',
           yAxisIndex: 0,
           data: dataLine,
           label: {
               normal: {
                   show: false,
                   position: 'right',
                   distance: 10,
                   formatter: function(param) {
                       return param.value + '%'
                   },
                   textStyle: {
                       color: '#ffffff',
                       fontSize: '16'
                   }
               }
           },
           barWidth: 10,
           itemStyle: {
               normal: {
                   color: function(params) {
                       var num = myColor.length
                       return myColor[params.dataIndex % num]
                   }
               }
           },
           z: 2
       }, {
           name: '白框',
           type: 'bar',
           yAxisIndex: 1,
           barGap: '-100%',
           data: [99.8, 99.9, 99.9, 99.9],
           barWidth: 21,
           itemStyle: {
               normal: {
                   color: '#0e2147',
                   barBorderRadius: 2
               }
           },
           z: 1
       },
       {
           name: '外框',
           type: 'bar',
           yAxisIndex: 2,
           barGap: '-100%',
           data: [100, 100, 100, 100],
           barWidth: 23,
           label: {
               normal: {
                   show: true,
                   position: 'right',
                   distance: 10,
                  formatter: function(data) {
                      return dataLine[data.dataIndex] +"%";
                  },
                   textStyle: {
                       color: '#ffffff',
                       fontSize: '16'
                   }
               }
           },
           itemStyle: {
               normal: {
                   color: function(params) {
                       var num = myColor.length
                       return myColor[params.dataIndex % num]
                   },
                   barBorderRadius: 0
               }
           },
           z: 0
       },
   /*     {
           name: '白框',
           type: 'bar',
           yAxisIndex: 1,
           barGap: '-100%',
           data: [0, 0, 0, 0],
           barWidth: 20,
           itemStyle: {
               normal: {
                   color: '#0e2147',
                   barBorderRadius: 0
               }
           },
           z: 1
       },
       {
           name: '外框',
           type: 'bar',
           yAxisIndex: 2,
           barGap: '-100%',
           data: [2, 3, 4, 5],
           barWidth: 22,
           itemStyle: {
               normal: {
                   color: function(params) {
                       var num = myColor.length
                       return myColor[params.dataIndex % num]
                   },
                   barBorderRadius: 0
               }
           },
           z: 0
       }*/
       
       ]
   }


    var chart11 = echarts.init(document.getElementById('chart11'));

    chart11.setOption(option);
}


//中间地图

function initMapChart(){
    //地图
    var mapChart = echarts.init(document.getElementById('mapChart'));
    mapChart.setOption({
        bmap: {
            center: [118.096435,24.485408],
            zoom: 12,
            roam: true,
  
        },
        tooltip : {
            trigger: 'item',
            formatter:function(params, ticket, callback){
                return params.value[2]
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [118.096435, 24.485408, '厦门市'] ,
              [118.094564, 24.457358, '厦门第一医院'] ,
              [118.104103, 24.477761, '厦门中山医院'],
              [118.14748, 24.506295, '厦门中医院'],
              [118.254841, 24.665349, '厦门第五医院'],
             ]
        }]
    });
    // mapChart.on('click', function (params) {
    //     $("#el-dialog").removeClass('hide');
    //     $("#reportTitle").html(params.value[2]);
    // });
  
    var bmap = mapChart.getModel().getComponent('bmap').getBMap()
    // bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));
    bmap.setMapStyleV2({styleId:'16a621fe1cdc7679c05bb13a8763a857'})
  
  
  }

initChart1();

initChart3();

initChart4();

initChart5();

initChart6();

initChart7();

initChart8();

initChart9();

initChart10();

initChart11();

initMapChart();

