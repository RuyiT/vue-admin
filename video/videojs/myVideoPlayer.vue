<template>
    <div>
        <video ref="videoPlayer" id="myVideo" muted controls
                webkit-playsinline="true"
                playsinline="true"
                style="object-fit:fill"
                class="video-js vjs-default-skin vjs-big-play-centered">
                <!-- <track src="assets/sing.vtt" default> -->
                </video>
    </div>
    <!-- Android / web 的视频在微信里的视频全屏，如果是在手机上预览，会让视频的封面同视频一样大小
        webkit-playsinline="true"  这个属性是ios 10中设置可以让视频在小窗内播放，也就是不是全屏播放
        x-webkit-airplay="true"  这个属性还不知道作用
        playsinline="true"  IOS微信浏览器支持小窗内播放
        x5-video-player-type="h5" 启用H5播放器,是wechat安卓版特性
        x5-video-orientation="h5" 播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
        x5-video-player-fullscreen="true" 全屏设置，设置为 true 是防止横屏 -->
</template>

<script>
export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            myPlayer: null
        }
    },
    methods: {
        initVideo() {
            console.log('http://test.video.learn.oa.com:8080/video/2019/9172/caption/a8ceada096724afc-en.srt')
            this.myPlayer = this.$video('#myVideo', this.options, function onPlayerReady() {

                // console.log('onPlayerReady', this);
            })
            this.creatButton()

        },
        creatButton() {
            //扩展自以前的速率button,这样很多内置的方法都不用写
            var definePlaybackRateMenuButton = this.$video.extend(this.$video.getComponent('PlaybackRateMenuButton'), {
                //改写点击事件，videojs的点击事件是将倍速变为倍速数组的最后一个值，hover效果来显示倍速选项item，这里在手机端，所以需要将点击事件变为toggle倍数数组的显示和隐藏
                handleClick: function() {
                    if(this.menu.el_.style.display === '' || this.menu.el_.style.display === 'none'){
                        this.menu.el_.style.display = 'block';
                    }else{
                        this.menu.el_.style.display = 'none';
                    }
                },
                //这个方法必须，因为新组件需要自己的rates数组。player的option里面定义的只是PlaybackRateMenuButton原始组件的rates数组
                playbackRates: function() {
                    return [2.0, 1.5, 1.2, 1.0, 0.5]
                }
            });
            //注册定义的新rate组件
            this.$video.registerComponent('definePlaybackRateMenuButton', definePlaybackRateMenuButton);
            //将组件添加到控制栏的按钮组中，5是添加的位置
            this.myPlayer.getChild('controlBar').addChild('definePlaybackRateMenuButton', {}, 5);
        }
    },
    ready(){
        this.initVideo()

    },
    beforeDestroy() {
        if (this.myPlayer) {
            this.myPlayer.dispose()
        }
    }
}
</script>