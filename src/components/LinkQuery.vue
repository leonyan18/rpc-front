<template>
    <div>
        <div>
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
                <el-form-item label="请求id">
                    <el-input v-model="requestId" placeholder="请输入查询的类" resize="horizontal"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="getRequestData">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <div id="main" style="height:400px;"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "LinkQuery",
        data() {
            return {
                requestId:'',
                nodes:[{
                    name: '节点1',
                    x: 300,
                    y: 300
                }, {
                    name: '节点2',
                    x: 800,
                    y: 300
                }, {
                    name: '节点3',
                    x: 550,
                    y: 100
                }, {
                    name: '节点4',
                    x: 550,
                    y: 500
                }],
                links:[{
                    source: 0,
                    target: 1,
                }, {
                    source: '节点2',
                    target: '节点1'
                }, {
                    source: '节点1',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点4'
                }, {
                    source: '节点1',
                    target: '节点4'
                }],
                activeIndex: 'dashboard',
                activeIndex2: '1'
            };
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            fontSize: 20
                        },
                        data: this.nodes,
                        // links: [],
                        links: this.links
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>
