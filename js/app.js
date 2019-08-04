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


//chart1  各区域垃圾汇总
function initChart2() {
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].seriesName + '<br/>' + params[0].name + ': ' + params[0].value;
            }
        },
        grid: {
            left: '3%',
            right: '10%',
            top: "25%",
            bottom: '6%',
            containLabel: true
        },
        legend: {
            data: ["垃圾重量", "百分比"],
            top: "5%",
            show: true,
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: ['厨余', '纸类', '织物', '金属', '塑料', '可回收', '灯管灯泡', '电池', '其他', '药品'],
            name: '',//垃圾种类
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: false,
                lineStyle: {
                    color: '#fff'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#fff',
                    margin: 15,
                    fontSize: 10
                },
                rotate: 70
            },
            axisTick: {
                show: false,
            }
        },
        yAxis: [{
            name: '重量/kg',
            nameTextStyle: {
                color: "#fff",
                fontSize: 10
            },
            type: 'value',
            // max: 140,
            // splitNumber: 7,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                // margin: 20,
                textStyle: {
                    color: '#fff',
                    margin: 15,
                    fontSize: 10

                }
            },
            axisTick: {
                show: false,
            }
        }, {
            type: 'value',
            name: '百分比%',
            nameTextStyle: {
                color: "#fff",
                fontSize: 10
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256',
                    type: "dashed"
                }
            },
            min: 0,
            max: 100,

            // nameLocation: "c",
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10

                },
                formatter: '{value} %'
            }
        }],
        series: [{
            name: '垃圾重量',
            type: 'pictorialBar',
            barCategoryGap: '-80%',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            //symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,                                          //左、下、右、上
                        [
                            { offset: 0, color: '#f900ff' },                   //柱图渐变色
                            { offset: 1, color: '#01b1ff' },                   //柱图渐变色
                        ]
                    ),
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [150, 160, 115, 170, 187, 188, 90, 66, 98, 102],
            z: 10
        }, {
            name: '百分比',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            smooth: true,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,                                          //左、下、右、上
                    [
                        { offset: 0, color: '#ff6d00' },                   //柱图渐变色
                        { offset: 1, color: '#ffff00' },                   //柱图渐变色
                    ]
                ),
            },
            data: [150, 160, 115, 170, 187, 188, 90, 66, 98, 102]
        }]
    };

    var chart2 = echarts.init(document.getElementById('chart2'));

    chart2.setOption(option);
}


//chart3  总品类回收量

function initChart3() {
    var option = {
        title: {
            text: '19523',
            subtext: '总投放量',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: 20,
                fontWeight: 'normal',
                color: ['#fff']
            },
            subtextStyle: {
                color: '#fff',
                fontSize: 11
            },
        },
        legend: {
            show: false
        },
        series: [{
            type: 'pie',
            radius: [40, '70%'],
            center: ['50%', '55%'],
            roseType: 'radius',
            data: [{
                value: 15,
                name: '金属',
                itemStyle: {
                    color: "#ffc547",
                    shadowColor: '#ffc547',
                    shadowBlur: 30
                }
            }, {
                value: 16,
                name: '纸张',
                itemStyle: {
                    color: "#e6526b",
                    shadowBlur: 10
                }
            }, {
                value: 20,
                name: '塑料',
                itemStyle: {
                    color: "#ff7e4b",
                    shadowBlur: 10
                }
            }, {
                value: 14,
                name: '玻璃',
                itemStyle: {
                    color: "#319ae4",
                    shadowBlur: 10
                }
            }, {
                value: 35,
                name: '其他',
                itemStyle: {
                    color: "#32fd99",
                    shadowBlur: 10
                }
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
            top: "20%",
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
            splitNumber: 7,
            splitLine: {
                show: false,
                color: "#3051a5"//3051a5
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                show: true,
                textStyle: {
                    color: '#fff',
                    margin: 15,
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#3051a5'
                }

            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 7,
            splitLine: {
                show: false//3051a5
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000'
                },
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
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,                                          //左、下、右、上
                    [
                        { offset: 0, color: '#25f4fc' },                   //柱图渐变色
                        { offset: 1, color: '#00e320' },                   //柱图渐变色
                    ]
                ),
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
                        color: 'rgba(0,226,32, 1)'

                    },
                    {
                        offset: 1,
                        color: 'rgba(37,224,251,0)'
                    }
                    ], false)
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
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(243,87,96,0.3)'
                },
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
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(243,87,96,0.3)'
                },
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
                barWidth: 10,
                data: [852, 1020, 763, 562, 1080, 320, 570],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,                                          //左、下、右、上
                            [
                                { offset: 0, color: '#f4c148' },                   //柱图渐变色
                                { offset: 1, color: '#ef2c6a' },                   //柱图渐变色
                            ]
                        ),
                        barBorderRadius: [6, 6, 0, 0],
                        label: {
                            show: false, //开启显示
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
    axios.get(config.ip + config.api.getCommunityWeight).then(function (response) {
        var community = response.data.community;
        var mdata = response.data.weight;
        var com = [community["1"], community["2"], community["3"], community["4"], community["5"]];
        var data = [mdata["1"] / 10000, mdata["2"] / 10000, mdata["3"] / 10000, mdata["4"] / 10000, mdata["5"] / 10000]
        var option = {
            tooltip: {
                trigger: 'axis',
                show: true,
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: false,
            },
            grid: {
                top: "20%",
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
                data: com
            },
            yAxis: {
                name: "公斤",
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                    },
                    formatter: '{value} 万'
                }
            },

            series: [
                {
                    name: '回收数量排行',
                    type: 'bar',
                    data: data,
                    markPoint: {
                        data: [{
                            name: "top1",
                            coord: [0, mdata["1"] / 10000],
                            symbol: 'image://img/top1.png',
                            symbolSize: [20, 16],
                            symbolOffset: [0, "-100%"]

                        }, {
                            name: "top2",
                            coord: [1, mdata["2"] / 10000],
                            symbol: 'image://img/top2.png',
                            symbolSize: [20, 16],
                            symbolOffset: [0, "-100%"]

                        }, {
                            name: "top3",
                            coord: [2, mdata["3"] / 10000],
                            symbol: 'image://img/top3.png',
                            symbolSize: [20, 16],
                            symbolOffset: [0, "-100%"]

                        }]
                    },
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

    })
        .catch(function (error) {

        });

}

//


function initChart7() {
    var dataLine = [5, 8.45, 12.34, 18.34, 55.87];
    var xMax = 100;
    var option = {
        tooltip: {
            show: true,
            formatter: "{b} <br> {c}%"

        },
        grid: {
            top: "10%",
            left: '3%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: [{
            axisTick: {
                show: false,
                // color:'#fff',
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
                //color:'#fff',
            },
            splitLine: {
                show: false,
                // color:'#fff',
            }
        }],
        yAxis: [{
            type: 'category',
            data: ["≤5次", "5～10次", "10～20次", "20～50次", "≥50次"],

            axisTick: {
                // color:'#fff',
                show: false,
            },
            axisLine: {
                //  color:'#fff',
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 11
                }
            }

        }],
        series: [{
            name: ' ',
            type: 'bar',
            barWidth: 10,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#26517e',
                    barBorderRadius: 4,

                }

            },
            barGap: '-100%',
            barCategoryGap: '50%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (data) {
                        return dataLine[data.dataIndex] + "%";
                    },
                    textStyle: {
                        color: "#fff",
                        fontSize: 10
                    }
                }
            },
            data: dataLine.map(function (d) {
                return xMax
            }),
        }, {
            name: ' ',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#25f4fc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#62ffb4' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    formatter: '{c}%',
                }
            },
            data: dataLine
        }]
    };

    var chart7 = echarts.init(document.getElementById('chart7'));

    chart7.setOption(option);
}



//chart8  垃圾数据月分布情况图

function initChart8() {
    var colors = ["#34d160", "#ff753f", "#69d2fa", "#6cefb1", "#8a00e1", "#f481fd", "#edb23d", "#ff3d3d", "#a6fa91", "#0278e7"];
    var option = {
        color: colors,
        title: {
            text: '',
            show: false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: { color: "#fff", fontSize: 10 },
            width: "54%",
            top: "5%",
            itemGap: 8,
            data: ['厨余', '纸类', '织物', '金属', '塑料', '电池', '药品', '其他', '可回收', '灯泡灯管']
        },
        grid: {
            left: '7%',
            right: '4%',
            bottom: '10%',
            top: "20%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                axisLine: {
                    lineStyle: {
                        color: "#00f0ff"
                    }
                },
                axisLabel: {
                    show: true,
                    color: "#fff"
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: "重量/kg",
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        color: '#024184',
                        opacity: 1
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#00f0ff",
                        fontSize: 10
                    },
                },
                axisLabel: {
                    show: true,
                    color: "#fff"
                },
                axisTick: {
                    show: false
                },
                nameTextStyle: {
                    color: "#fff",
                    fontSize: 10
                },
                splitArea: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '厨余',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,

                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210, 17, 29, 89, 20, 48, 29, 24, 109, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            },
            {
                name: '纸类',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [320, 232, 1, 334, 190, 40, 310, 117, 294, 189, 120, 148, 129, 124, 209, 320, 721, 223, 66, 134, 490, 282, 823, 730, 881, 178, 576, 143, 834, 178, 200],
                smooth: true
            },
            {
                name: '织物',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [520, 532, 201, 34, 9, 130, 10, 107, 209, 809, 200, 480, 290, 240, 1009, 82, 31, 12, 87, 23, 80, 92, 13, 30, 98, 28, 97, 43, 34, 78, 31],
                smooth: true
            }, {
                name: '金属',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [220, 532, 201, 34, 900, 130, 10, 107, 209, 809, 200, 480, 290, 240, 1009, 82, 31, 12, 87, 23, 80, 92, 13, 30, 98, 28, 97, 43, 34, 78, 31],
                smooth: true
            },
            {
                name: '塑料',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [12, 302, 11, 34, 97, 20, 20, 77, 9, 89, 200, 408, 209, 204, 1009, 20, 21, 13, 105, 523, 412, 321, 500, 50, 108, 420, 107, 200, 17, 520, 470],
                smooth: true
            },
            {
                name: '电池',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210, 17, 29, 89, 20, 48, 29, 24, 109, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            },
            {
                name: '药品',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [20, 332, 101, 14, 90, 230, 210, 17, 29, 89, 20, 48, 29, 34, 19, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            },
            {
                name: '其他',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [200, 332, 101, 14, 90, 230, 210, 17, 29, 89, 20, 48, 29, 34, 19, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            },
            {
                name: '可回收',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                areaStyle: { normal: {} },
                data: [100, 32, 101, 14, 90, 230, 210, 17, 29, 89, 20, 48, 29, 34, 19, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            },
            {
                name: '灯泡灯管',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                // normal: {
                //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //         offset: 0,
                //         color: 'rgba(205,52,42, 0.5)'
                //     }, {
                //         offset: 0.8,
                //         color: 'rgba(235,235,21, 0)'
                //     }], false),
                //     shadowColor: 'rgba(0, 0, 0, 0.1)',
                //     shadowBlur: 10
                // },
                data: [100, 32, 101, 14, 90, 230, 210, 17, 29, 89, 20, 48, 29, 34, 19, 820, 321, 123, 876, 234, 890, 982, 123, 130, 981, 278, 976, 543, 234, 278, 300],
                smooth: true
            }
        ]
    };

    var chart8 = echarts.init(document.getElementById('chart8'));

    chart8.setOption(option);
}

//chart9 垃圾数据时间分布情况
function initChart9() {
    var colors = ["#34d160", "#ff753f", "#69d2fa", "#6cefb1", "#8a00e1", "#f481fd", "#edb23d", "#ff3d3d", "#a6fa91", "#0278e7"];
    var option = {
        title: {

        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            show: false
        },
        grid: {
            top: "25%",
            left: '5%',
            right: '10%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#00f0ff'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35']
        }],
        yAxis: [{
            type: 'value',
            name: '重量/kg',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#00f0ff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 10,
                    color: "#fff"
                }
            },
            nameTextStyle: {
                color: "#9dbaed",
                fontSize: 11
            },
            splitLine: {
                lineStyle: {
                    color: '#024184',
                    type: "dashed"
                }
            }
        }],
        series: [{
            name: '厨余',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },

            itemStyle: {
                normal: {
                    color: colors[0]
                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125]
        }, {
            name: '纸类',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            },


            data: [120, 110, 125, 145, 122, 165, 122, 220]
        }, {
            name: '织物',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[2]
                }
            },


            data: [10, 170, 125, 15, 122, 16, 122, 220]
        }, {
            name: '金属',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[3]
                }
            },


            data: [10, 210, 125, 145, 122, 165, 122, 220]
        }, {
            name: '塑料',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[4]
                }
            },


            data: [5, 110, 125, 30, 122, 165, 122, 520]
        }, {
            name: '电池',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[5]
                }
            },


            data: [60, 110, 125, 145, 222, 165, 122, 220]
        }, {
            name: '药品',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[6]
                }
            },


            data: [90, 110, 125, 145, 12, 165, 322, 220]
        }, {
            name: '其他',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[7]
                }
            },


            data: [7, 110, 325, 145, 122, 65, 122, 220]
        }, {
            name: '可回收',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[8]
                }
            },


            data: [40, 110, 265, 145, 122, 5, 32, 220]
        }, {
            name: '灯管灯泡',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: colors[9]
                }
            },


            data: [30, 210, 125, 15, 122, 265, 122, 220]
        }]
    };


    var chart9 = echarts.init(document.getElementById('chart9'));

    chart9.setOption(option);
}

//chart10 垃圾数据周分布情况
function initChart10() {
    var data = [{
        name: '周日',
        value: 7311
    }, {
        name: '周六',
        value: 7589
    }, {
        name: '周五',
        value: 4900
    }, {
        name: '周四',
        value: 5132
    }, {
        name: '周三',
        value: 5267
    }, {
        name: '周二',
        value: 5689
    }, {
        name: '周一',
        value: 7100
    }];


    var option = {

        legend: { //图例的设置
            show: false

        },
        radar: [{//每个网格的指数名称，类似于X轴或Y轴上的数据的值大小
            indicator: [{
                text: '周一',
                max: 10000
            },
            {
                text: '周二',
                max: 10000
            },
            {
                text: '周三',
                max: 10000
            },
            {
                text: '周四',
                max: 10000
            },
            {
                text: '周五',
                max: 10000
            },
            {
                text: '周六',
                max: 10000
            }, {
                text: '周日',
                max: 10000
            }
            ],
            center: ['50%', '50%'],//统计图位置，示例是居中
            radius: '70%',//统计图大小
            startAngle: 90,//统计图起始的角度
            splitNumber: 5,//统计图蛛网的网格分段，示例分为三
            name: {
                formatter: '{value}',//蛛网轴尖的数据名称
                textStyle: {//蛛网轴尖的文字样式
                    fontSize: 10, //外圈标签字体大小
                    color: '#fff' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#21293d'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。


                }

            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#fff',
                    opacity: 0.2
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#fff',
                    opacity: 0.2
                }
            }
        },],
        series: [{
            name: '',
            type: 'radar',//统计图专业名称为雷达图，这里叫做蛛网图
            itemStyle: {//数据样式设置
                emphasis: {//鼠标悬浮效果
                    lineStyle: {
                        width: 1//线条粗细变成4
                    }
                }
            },
            symbol: 'none',
            symbolSize: 2,
            showSymbol: false,
            data: [{
                name: '',//数据名称
                value: [7100, 6500, 5500, 9000, 8200, 2000, 7800],
                areaStyle: {
                    normal: {
                        color: '#34d060',
                        opacity: 0.5
                    },
                },
            }, {
                name: '',
                value: [5000, 2000, 4500, 3000, 7500, 8900, 2100],
                areaStyle: {
                    normal: {
                        color: "#69d2fa",
                        opacity: 0.5
                    }
                },
            }, {
                name: '',
                value: [3700, 8000, 1200, 5000, 2500, 4500, 5600],
                areaStyle: {
                    normal: {
                        color: "#8a00e0",
                        opacity: 0.5
                    }
                },
            }, {
                name: '',//数据名称
                value: [3500, 6100, 9500, 4000, 8200, 4800, 3600],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: "#edb23d",
                        opacity: 0.5
                    }
                }
            }, {
                name: '',//数据名称
                value: [2500, 8100, 1500, 4700, 5200, 9800, 1600],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: "#ff3d3d",
                        opacity: 0.5
                    }
                }
            }, {
                name: '',//数据名称
                value: [2500, 8100, 1500, 4700, 5200, 9800, 1600],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: "#ff743e",
                        opacity: 0.5
                    }
                }
            }, {
                name: '',//数据名称
                value: [2500, 8100, 1500, 4700, 5200, 9800, 1600],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: "#a6fa91",
                        opacity: 0.5
                    }
                }
            }]
        }]
    };


    var chart10 = echarts.init(document.getElementById('chart10'));

    chart10.setOption(option);
}

function initChart11() {
    var data = [{
        name: '周日',
        value: 7311
    }, {
        name: '周六',
        value: 7589
    }, {
        name: '周五',
        value: 4900
    }, {
        name: '周四',
        value: 5132
    }, {
        name: '周三',
        value: 5267
    }, {
        name: '周二',
        value: 5689
    }, {
        name: '周一',
        value: 7100
    }];
    var backGroundData = [],
        nameData = [],
        valueData = [],
        maxValue = 0,
        len = data.length;
    for (var i = 0; i < len; i++) {
        if (data[i].value > maxValue) {
            maxValue = data[i].value;
        }
    }
    for (var i = 0; i < len; i++) {
        backGroundData.push(maxValue * 1.1);
        nameData.push(data[i].name);
        valueData.push(data[i].value);
    }

    var option = {
        grid: {
            left: '10%',
            top: '5%',
            bottom: '1%',
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}：{c}',
            textStyle: {
                fontSize: "20"
            }
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: nameData
        },
        series: [{
            barWidth: 6,
            z: 10,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,   //左、下、右、上
                    [{
                        offset: 0,
                        color: '#32fd99' /*#0085FA*/
                    }, {
                        offset: 1,
                        color: '#0738ff' /*#00BBFD*/
                    }])
            },
            label: {
                show: true,
                fontSize: 10,
                // distance: 10,
                position: "left",
                formatter: "{b}",
                // offset: [0, -10],
                color: '#FFFFFF'
            },
            type: 'bar',
            data: valueData
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: 6,
            animation: false,
            z: -1,
            itemStyle: {
                color: '#153963'
            },
            label: {
                show: true,
                position: 'right',
                fontSize: 10,
                color: "#00fcff",
                formatter: function (param) {
                    for (var i = 0; i < data.length; i++) {
                        if (param.name == data[i].name) {
                            return data[i].value + " kg";
                        }
                    }
                }
            },
            data: backGroundData
        }
        ]
    };


    var chart11 = echarts.init(document.getElementById('chart11'));

    chart11.setOption(option);
}


//中间地图

function initMapChart() {
    //地图
    var mapChart = echarts.init(document.getElementById('mapChart'));
    mapChart.setOption({
        bmap: {
            center: [118.096435, 24.485408],
            zoom: 12,
            roam: true,

        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                return params.value[2]
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
                [118.096435, 24.485408, '厦门市'],
                [118.094564, 24.457358, '厦门第一医院'],
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
    bmap.setMapStyleV2({ styleId: '16a621fe1cdc7679c05bb13a8763a857' })


}



function initTree(){
    
}
initChart1();

initChart2();

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








