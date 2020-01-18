<template>
    <div class="my-4 rounded-lg bg-background">
        <canvas ref="canvas" class="h-40 w-full"></canvas>
  </div>
</template>
<script>
export default {
    data: function() {return{ 
        ctx: null,
        canvasHeight: 0,
        canvasWidth: 0,
        step: 0,
        lines: [],
        animation: undefined
     }},
    mounted: function(){
        this.ctx = this.$refs.canvas.getContext("2d");
        this.ctx.translate(0.5, 0.5);
        this.canvasWidth = this.$refs.canvas.width;
        this.canvasHeight = this.$refs.canvas.height;
    },
    created(){
        this.animation = requestAnimationFrame(this.draw);
        // lines
        //this.lines.push({xoffset:0 , yoffset: 0, freq:48 , value: 0, dir: 1});
        this.lines.push({xoffset:0 , yoffset: 16, freq:48 , value: 2, dir: -1});
        this.lines.push({xoffset:0 , yoffset: -16, freq:48 , value: 4, dir: 1});
        this.lines.push({xoffset:0 , yoffset: 32, freq:48 , value: 2, dir: -1});
        this.lines.push({xoffset:0 , yoffset: -32, freq:48 , value: 4, dir: 1});
    },
    destroyed() {
        cancelAnimationFrame(this.animation);
        this.animation = undefined;
    },
    methods: {
        draw() {
            this.ctx = this.$refs.canvas.getContext("2d");
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            //showAxes(context);
            this.ctx.save();            
            
            for(let i = 0; i < this.lines.length; i++){
                this.slideCount(this.lines[i].value, -2, 2, this.lines[i].dir, 1)
                this.plotSine(this.ctx, this.step, this.lines[i].yoffset, this.lines[i].freq + this.lines[i].value);
            }
            this.ctx.restore();
            
            this.step += 1;
            requestAnimationFrame(this.draw);
        },

        plotSine(ctx, xoffset, yoffset, freq) {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            //var scale = 20;
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "rgba(255, 249, 34, 0.6)";//"rgba(63,80,181,0.4)";
            var x = 0;
            var y = yoffset;
            var amplitude = 16;
            //var frequency = 32;
            var frequency = freq;
            //ctx.moveTo(x, y);
            while (x < width) {
                y = height/2 + (amplitude * Math.sin((x + xoffset) /frequency)) + yoffset ;
                this.ctx.lineTo(x, y);
                x = x + 1;
            }
            this.ctx.stroke();
        },

        slideCount(value, min, max, dir, offset) {
            value += dir;
            if (value < min) dir = offset;
            if (value > max) dir = -offset;
        }
    },
}
</script>
<style scoped>
</style>
