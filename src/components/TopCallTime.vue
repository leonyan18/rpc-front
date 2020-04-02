<template>
    <ve-histogram :title="最近一小时调用次数ip地址" :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
    export default {
        name: "TopCallTime",
        props:['xcolumn'],
        data() {
            this.chartSettings = {
                metrics: ['调用次数'],
                dimension: [this.xcolumn]
            };
            return {
                chartData: {
                    columns: ['ip', '调用次数'],
                    rows: [
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 1393},
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 3530},
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 2923},
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 1723},
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 3792},
                        {'ip': '127.0.0.1','clazz': 'test', '调用次数': 4593}
                    ]
                }
            }
        }
    }
</script>


<style scoped>

</style>
