<template>
    <div class="my-4 rounded-lg bg-background">
        <canvas ref="canvas" class="h-48 w-full"></canvas>
  </div>
</template>
<script>
export default {
    data: function() {return{ 
        ctx: null,
        canvasHeight: 0,
        canvasWidth: 0,
        step: 0,
        animation: undefined
     }},
    mounted: function(){
        this.ctx = this.$refs.canvas.getContext("2d");
        this.canvasWidth = this.$refs.canvas.width;
        this.canvasHeight = this.$refs.canvas.height;
    },
    created(){
        this.animation = requestAnimationFrame(this.draw);
    },
    destroyed() {
        cancelAnimationFrame(this.animation);
        this.animation = undefined;
    },
    methods: {
        draw() {
            this.ctx = this.$refs.canvas.getContext("2d");
            console.log(this.step);
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            //showAxes(context);
            this.ctx.save();            
            this.plotSine(this.ctx, this.step, 0);
            this.plotSine(this.ctx, this.step, 8);
            this.plotSine(this.ctx, this.step, -8);
            this.plotSine(this.ctx, this.step, 16);
            this.plotSine(this.ctx, this.step, -16);

            this.ctx.restore();
            this.step += 1;
            requestAnimationFrame(this.draw);
        },

        plotSine(ctx, xoffset, yoffset) {
            console.log("plotSine");
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            //var scale = 20;

            this.ctx.beginPath();
            this.ctx.lineWidth = 0.33;
            this.ctx.strokeStyle = "#ffffff";
            
            var x = 0;
            var y = yoffset;
            var amplitude = 16;
            //var frequency = 32;
            var frequency = 32
            //ctx.moveTo(x, y);
            while (x < width) {
                y = height/2 + (amplitude * Math.sin((x + xoffset) /frequency)) + yoffset ;
                this.ctx.lineTo(x, y);
                x = x + 1;
            }
            this.ctx.stroke();
        }
    },
}
</script>
<style scoped>
</style>
