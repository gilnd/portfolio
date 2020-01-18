<template>
    <div > 
        <event
            v-for="(item, index) in events"
			:key="index"
			:index="index"
			:parentData="item"/>
    </div>
</template>

<script>
import event from "./event.vue";
import { mapGetters } from "vuex";
export default {
    name: "timeline",
    components: { event },
    computed: { ...mapGetters(["events"]) },
    created: function(){},
	methods: {}
};
</script>
<style></style>