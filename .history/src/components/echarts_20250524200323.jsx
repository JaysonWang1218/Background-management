import React,{use, useEffect, useRef} from "react";
import * as echarts from "echarts";
//echarts的配置数据
const axisOption = {
    // 图例文字颜色
    textStyle: {
        color: "#333",
    },
    // 提示框
    tooltip: {
        trigger: "axis",
    },
    xAxis: {
        type: "category", // 类目轴
        data: [],
        axisLine: {
            lineStyle: {
                color: "#17b3a3",
            },
        },
        axisLabel: {
            interval: 0,
            color: "#333",
        },
    },
    yAxis: [
        {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#17b3a3",
                },
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
    series: [],
};

const normalOption = {
    tooltip: {
        trigger: "item",
    },
    color: ["#0f78f4", "#dd536b", "#9462e5", "#a6a6a6", "#e1bb22", "#39c362", "#3ed1cf"],
    series: [],
};
const Echarts=({style,charData,isAxisChart=true})=>{
    //获取到dom实例
    const echartRef = useRef();
    let echartObj=useRef(null);
    useEffect(()=>{
        let options;
        //echarts的初始化
        echartObj.current = echarts.init(chartRef.current);
        //设置option
        if(isAxisChart){
            axisOption.xAxis.data = charData.xData;
            axisOption.series = charData.series;
        }else{
            normalOption.series = charData.series;
        }
    },[])
    return{

    }

}
