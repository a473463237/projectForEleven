<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item,index) in hot" :key="index">{{item.name}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:['title','hot']
}
</script>


