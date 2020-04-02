<template>
    <div>
        <ve-histogram :title="最近一小时耗时最长ip地址" :data="chartData"  :settings="chartSettings"></ve-histogram>
    </div>
</template>

<script>
    export default {
        name: "TopSpendTime",
        props:['xcolumn'],
        data () {
            this.chartSettings = {
                metrics: ['网络耗时', '处理耗时'],
                dimension: [this.xcolumn]
            };
            return {
                chartData: {
                    columns: ['ip', '网络耗时', '处理耗时', '下单率'],
                    rows: [
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 1393, '处理耗时': 1093, '下单率': 0.32 },
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 3530, '处理耗时': 3230, '下单率': 0.26 },
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 2923, '处理耗时': 2623, '下单率': 0.76 },
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 1723, '处理耗时': 1423, '下单率': 0.49 },
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 3792, '处理耗时': 3492, '下单率': 0.323 },
                        { 'ip': '127.0.0.1','clazz': 'test', '网络耗时': 4593, '处理耗时': 4293, '下单率': 0.78 }
                    ]
                }
            }
        },
        mounted() {
            // console.log(this)
        }
    }
</script>


<style scoped>

</style>
