<style lang="sass" scope>
	.container {
		.top {
			width: 100%;
			height: 150px;
			background:#f2f2f2;
		}
		.bottom {
			width:100%;
			height:1000px;
			background:#f0f0f0;
		}
	}
</style>
<style>
    #myVideo.video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
        display: inline;
    }
    #myVideo.video-js .vjs-duration, .vjs-no-flex .vjs-duration {
        display: inline;
    }
    /* js配置将速率隐藏了，所以这里需要用css将速率显示出来 */
    .vjs-control-bar .vjs-playback-rate{
        display: block !important;
    }
    
    #myVideo .vjs-button > .vjs-icon-placeholder:before{
        line-height: 2
    }
    /* #myVideo .vjs-control-bar .vjs-playback-rate > .vjs-menu-button,.vjs-playback-rate .vjs-playback-rate-value {
        top:3px;
    } */
</style>
<template>
 	<div class='container'>
		<div class='top'></div>
		<video-player :options="videoOptions"></video-player>
		<div class='bottom'></div>
	</div>
</template>

<script>
import VideoPlayer from "./videojs/myVideoPlayer.vue";

export default {
	name: "video",
	components: {
		VideoPlayer
	},
	data() {
		return {
			videoOptions: {
				 //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: false,
                    //视频缩略图
                    // poster: "./bgimg2.png" ,
                    // 自动循环
                    loop: false,
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    // width: "594px",
                    // //设置视频播放器的显示高度（以像素为单位）
                    // height: "387px",
                    //移除静音按钮
                    controlBar: {
                        muteToggle: false,
                        // currentTimeDisplay: true, // 当前时间
                        // timeDivider: true, // 时间分割线
                        // durationDisplay: true, // 总时间
                        // remainingTimeDisplay:false,
                        // pictureInPictureToggle:true,// 画中画
                        children: [
                            {name: 'playToggle'}, // 播放按钮
                            {
                                name: 'volumePanel', // 音量控制
                                inline: false, // 不使用水平方式
                            },
                            {name: 'currentTimeDisplay'}, // 当前已播放时间
                            {name: 'progressControl'}, // 播放进度条
                            {name: 'durationDisplay'}, // 总时间
                            // { // 倍数播放
                            //     name: 'playbackRateMenuButton',
                            //     'playbackRates': [0.5, 1, 1.5, 2, 2.5]
                            // },
                            {name: 'FullscreenToggle'}, // 全屏
                            {name: 'Picture-in-Picture'}
                        ],
                        playbackRateMenuButton:false,//这个必须，不然你得网页会出现两个调整播放速率的显示
                        nativeControlsForTouch:true,// 强制触摸设备的本机控件
                    },
                    // plugins: {
                    //     videoJsResolutionSwitcher: {
                    //         default: 'low', // Default resolution [{Number}, 'low', 'high'],
                    //         dynamicLabel: true
                    //     }
                    // },
                    
                    sources: [
                        // {
                        //     src:'https://vjs.zencdn.net/v/oceans.mp4?HD',
                        //     type: "video/mp4"
                        // },
                        // {
                        //     src:'assets/sing.mp4',
                        //     type: "video/mp4"
                        // },
                        // {
                        //     src:'http://test.video.learn.oa.com:8080/video/2019/9179/480P/34893ee557dccbfe_playlist.m3u8',
                        //     type: "application/x-mpegURL"
                        // },
                        {
                            src:'http://test.video.learn.oa.com:8080/video/2019/9179/34893ee557dccbfe_m_file_url.m3u8',
                            type: "application/x-mpegURL"
                        }
                    ],
                    hls: {
                        withCredentials: true
                    },
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    
			}
		};
    }
};