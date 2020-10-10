<template>
  <div>
    <div id="centreLeft2Chart" style="width:7.125rem; height: 4.412rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  data() {
    return {
      chart: null,
      datas: []
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.draw();
    this.charData();
  },
  methods: {
    charData() {
      this.datas =  [99,80,65,32,30,28,28]
      setInterval(() => {
        for(let i=0;i<this.datas.length;i++){
          this.datas[i] = this.RandomNum(1,500)
        }
        // console.log(this.datas)
        this.draw()
      }, 3000);
    },
    RandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      if(Math.round(Rand * Range)==0){      
        return Min + 1;
      }
      var num = Min + Math.round(Rand * Range);
      return num;
    },
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("centreLeft2Chart"));
      //  ----------------------------------------------------------------
    let  option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          show: false,
          autoPlay: false,
        },
        backgroundColor:'#091C3D',
        title: {

            'text': '',
            'subtext': '',
            textStyle:{
                color:'#fff'
                },
            left:'center'
        },
        tooltip: {
            'trigger': 'axis'
        },

        calculable: true,
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top:'4%',
            containLabel: true
        },
        // 区域缩放控制器

        label:{
            normal:{
                textStyle:{
                    color:'#fff'
                    }
                }
            },
        xAxis: [{
            splitNumber:0,
            'type': 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle:{
                color:'#fff'
                },
            axisLabel:{
                rotate:45, //角度
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                },
                interval: 0
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                   },
                },
           
                
        }],
        yAxis: [{
            'type': 'value',
            'name': '', 
            splitNumber:0,
            nameTextStyle:{
                color:'#56617b'
                },
            axisLine:{
                show:false,
                lineStyle:{
                    color:'#56617b'
                   }
                },
            axisLabel: {
                textStyle:{
                    fontSize:18,
                    color:'#fff',
                },
                formatter: '{value} '
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#56617b'
                }
             },
        }],
        series: [{
            'name': '',
            'type': 'bar',
            markLine : {
                label:{
                    normal:{
                        show:false
                        }
                    },
                lineStyle:{
                    normal:{
                        color:'red',
                        width:3
                        }
                    }, 
            },
            barWidth:'40%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#eb4848','#eb6449','#eb7f49','#eb9a49','#ebb549',
                           '#ebd049','#ebeb49','#d0eb49','#b5eb49','#9aeb49'
                        ];
                        return colorList[params.dataIndex]
                    },
                    
                }
            },
        }]
    },
    options: [ {
        title: {
            'text': ''
        },
        series: [{
            'data': this.datas
        }]
    }, ]
};
      this.chart.setOption(option);
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>