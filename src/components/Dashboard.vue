<template>
    <div id="dashboard">
        <div class="defaultChart">
            <TopSpendTime xcolumn="ip"></TopSpendTime>
        </div>
        <div class="defaultChart">
            <TopSpendTime xcolumn="clazz"></TopSpendTime>
        </div>
        <div class="defaultChart">
            <TopCallTime xcolumn="ip"></TopCallTime>
        </div>
        <div class="defaultChart">
            <TopCallTime xcolumn="clazz"></TopCallTime>
        </div>
    </div>

</template>

<script>
    import TopSpendTime from "~/components/TopSpendTime";
    import TopCallTime from "~/components/TopCallTime";
    export default {
        name: "Dashboard",
        components: {TopSpendTime,TopCallTime},
    }
</script>

<style scoped>
    #dashboard{
        display: inline;
    }
    .defaultChart{
        width: 45%;
        display: inline-block;
    }
</style>
