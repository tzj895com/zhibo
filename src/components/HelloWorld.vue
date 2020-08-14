<template>
  <div class="hello">
    <!-- <video id="videoId" controls="true" height="300" width="auto"></video> -->
    <ul class="bas">
      <li @click="add1" :class="yanse==1?'yanse':''">惠州</li>
      <li @click="add2" :class="yanse==2?'yanse':''">深圳</li>

      <el-button type="warning" icon="el-icon-star-off" circle @click="but"></el-button>
    </ul>

    <div class="czc"  v-if="dialogVisible"></div>
    <div v-show="dialogVisible" class="anchuk">
      <p>
        直播
        <i class="el-icon-circle-close" @click="cancelVideo"></i>
      </p>
      <video
        id="videoElement"
        height="300"
        width="400"
        autoplay="autoplay"
        v-on:dblclick="addbut"
        poster="@/assets/timg.gif"
      >Your browser does not support the video tag.</video>
    </div>

    <div :class="classfalse?'input_video-box':'input_video-box1'" id="videoplayer1" v-if="yanse==1">
      <!-- 1 -->
      <div
        class="input_video"
        v-on:dblclick="toggleFullscreen1(item.id)"
        v-for="(item,index) in video"
        :key="index"
      >
        <div :class="classfalse?'input_video_div':'none'" @click="dialogVisible11(index,1)">
          <i class="el-icon-thumb"></i> 观看直播
        </div>
        <p :class="classfalse?'input_video-bt_span':'none'">{{item.name}}</p>
        <video-player
          :id="item.id"
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="item"
        ></video-player>
        <div class="input_video-bt">
          <span class="input_video-bt_span"></span>
          <div>
            <!-- <el-button type="success" round @click="dialogVisible = true">进入直播间</el-button> -->
          </div>
        </div>
      </div>
      <!-- /1 -->
    </div>

    <div :class="classfalse?'input_video-box':'input_video-box1'" id="videoplayer1" v-if="yanse==2">
      <!-- 1 -->
      <div
        class="input_video"
        v-on:dblclick="toggleFullscreen1(item.id)"
        v-for="(item,index) in video1"
        :key="index"
      >
        <div :class="classfalse?'input_video_div':'none'" @click="dialogVisible11(index,2)">
          <i class="el-icon-thumb"></i> 观看直播
        </div>
        <p :class="classfalse?'input_video-bt_span':'none'">{{item.name}}</p>
        <video-player
          :id="item.id"
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="item"
        ></video-player>
        <div class="input_video-bt">
          <span class="input_video-bt_span"></span>
          <div>
            <!-- <el-button type="success" round @click="dialogVisible = true">进入直播间</el-button> -->
          </div>
        </div>
      </div>
      <!-- /1 -->
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import flvjs from "flv.js";
export default {
  data() {
    return {
      video: [
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000104-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "主卧",
          id: "zhuwo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000108-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "工地直播",
          id: "gongdi",
        },

        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000106-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "工地直播",
          id: "zhibo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000107-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "售楼处入口",
          id: "shoulou",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000103-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "客厅",
          id: "keting",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000105-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "次卧",
          id: "ciwo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000102-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "园区",
          id: "yuanqu",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000101-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "花童荟",
          id: "hua",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000004-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "样板房厨房",
          id: "chufang",
        },
      ],
      video1: [
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000009-0701.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "客厅全景",
          id: "quanjing",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000002-0701.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "样板房次卧",
          id: "yangbanciwo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000004-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "样板房厨房",
          id: "yangbanchufang",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000104-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "主卧",
          id: "zhuwo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000108-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "工地直播",
          id: "gongdi",
        },

        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000106-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "工地直播",
          id: "zhibo",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000107-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "售楼处入口",
          id: "shoulou",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/mp4/34020000001320000103-20200802.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "客厅",
          id: "keting",
        },
        {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          muted: true, // 默认情况下将会消除任何音频。
          loop: true, // 视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src:
                "https://djseller.obs.cn-south-1.myhuaweicloud.com/huayangnian/cameraVideo/34020000001320000105-20200813.mp4", //url地址
            },
          ],
          controlBar: {
            timeDivider: false, //当前时间和持续时间的分隔符
            durationDisplay: false, //显示持续时间
            remainingTimeDisplay: false, //是否显示剩余时间功能
            fullscreenToggle: false, //全屏按钮
          },
          name: "次卧",
          id: "ciwo",
        },
      ],

      url: [
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000104_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000108_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000106_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000107_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000103_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000105_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000102_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000101_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000004_34020000001310000001.flv",
      ],
      url2: [
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000009_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000002_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000004_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000104_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000108_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000106_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000107_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000103_34020000001310000001.flv",
        "http://139.9.102.33:10000/sms/34020000002020000001/flv/hls/34020000001320000105_34020000001310000001.flv",
      ],
      dialogVisible: false,
      dialogVisible2: false,
      classfalse: true,
      showVideoDialog: false,
      flvPlayer: "",
      yanse: 1,
    };
  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    //监听视频点击开始
    onPlayerPlay(player) {
      console.log("player play!", player, "监听播放");
    },
    //监听视频点击暂停
    onPlayerPause(player) {
      console.log("player pause!", player, "监听暂停");
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      //   console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      //   console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },

    toggleFullscreen(this1) {
      // screenfull.toggle(document.getElementById("videoplayer1"));
    },
    toggleFullscreen1(name) {
      screenfull.toggle(document.getElementById(name));
    },
    addbut() {
      screenfull.toggle(document.getElementById("videoElement"));
    },
    dialogVisible11(index, num) {
      console.log(num);
      this.dialogVisible = true;
      if (num == 1) {
        let api = [
          "/stream/start?serial=34020000001320000104",
          "/stream/start?serial=34020000001320000108",
          "/stream/start?serial=34020000001320000106",
          "/stream/start?serial=34020000001320000107",
          "/stream/start?serial=34020000001320000103",
          "/stream/start?serial=34020000001320000105",
          "/stream/start?serial=34020000001320000102",
          "/stream/start?serial=34020000001320000101",
          "/stream/start?serial=34020000001320000004",
        ];
        this.$axios
          .get({
            // url: api[index],
            url: this.HOST + api[index],
          })
          .then((res) => {
            console.log(res, "获取视频");
            this.show(index);
          })
          .catch((err) => {
            // this.$message.error("端口关闭,请稍后再试~");
          });
      } else if (num == 2) {
        let api = [
          "/stream/start?serial=34020000001320000009",
          "/stream/start?serial=34020000001320000002",
          "/stream/start?serial=34020000001320000004",
          "/stream/start?serial=34020000001320000104",
          "/stream/start?serial=34020000001320000108",
          "/stream/start?serial=34020000001320000106",
          "/stream/start?serial=34020000001320000107",
          "/stream/start?serial=34020000001320000103",
          "/stream/start?serial=34020000001320000105",
        ];
        this.$axios
          .get({
            // url: api[index],
            url: this.HOST + api[index],
          })
          .then((res) => {
            console.log(res, "获取视频");
            this.show2(index);
          })
          .catch((err) => {
            // this.$message.error("端口关闭,请稍后再试~");
          });
      }
    },
    cancelVideo2() {},

    //全屏
    but() {
      if (screenfull.isEnabled) {
        screenfull.toggle(document.getElementById("videoplayer1"));
        screenfull.on("change", () => {
          if (screenfull.isFullscreen) {
            this.classfalse = false;
            console.log("全屏时，要执行的操作");
          } else {
            this.classfalse = true;
            console.log("取消全屏时，要执行的操作");
          }
        });
      }
    },
    show(index) {
      if (flvjs.isSupported()) {
        let player = document.getElementById("videoElement");
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: this.url[index],
          isLive: true,
          cors: true,
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
          autoCleanupSourceBuffer: true,
        });

        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load(); //加载
        this.flvPlayer.play();
      }
    },
    show2(index) {
      if (flvjs.isSupported()) {
        let player = document.getElementById("videoElement");
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: this.url2[index],
          isLive: true,
          cors: true,
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
          autoCleanupSourceBuffer: true,
        });

        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load(); //加载
        this.flvPlayer.play();
      }
    },

    cancelVideo() {
      this.dialogVisible = false;
      var _this = this;
      _this.flvPlayer.pause();
      _this.flvPlayer.unload();
      _this.flvPlayer.detachMediaElement();
      _this.flvPlayer.destroy();
      _this.flvPlayer = null;
    },
    add1() {
      this.yanse = 1;
    },
    add2() {
      this.yanse = 2;
    },
  },
  mounted() {
    // this.show();
    this.$axios
      .get({
        url:
          this.HOST +
          "/login?username=admin&password=72011505cdeca94798060a9c9077519b",
      })
      .then((res) => {
        console.log(res, "登录");
      });
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.video-js.vjs-ended .vjs-big-play-button,
.video-js.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: none !important;
}
.input_video-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 300px 0 300px;
}
.input_video-box1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.input_video {
  position: relative;
  flex-wrap: wrap;
  width: 33%;
  margin: 1px;
}

.input_video_div {
  font-size: 12px;
  position: absolute;
  top: 20%;
  z-index: 100;
  color: white;
}
.el-button.is-circle {
  margin: 10px 0;
  margin-left: 50%;
  transform: translate(-50%);
}
.input_video-bt_span {
  color: rgb(230, 162, 60);
  text-align: center;
  margin: 5px 0;
}
.none {
  display: none;
  margin: 0;
}
.anchuk {
  height: 450px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 500;
  background-color: white;
}
.anchuk p {
  margin: 10px;
  text-align: center;
  position: relative;
}
.anchuk i {
  position: absolute;
  right: 0;
  margin: 5px;
  cursor: pointer;
}
.czc {
  height: 100%;
  width: 100%;
  background-color: rgba(163, 161, 161, 0.8);
  position: absolute;
  z-index: 101;
}
.anchuk video {
  margin: 50px 20px 0 20px;
}
.bas {
  position: absolute;
  top: 40%;
  left: 5%;
  transform: translate(0%, -50%);
}
.bas li {
  text-align: center;
  width: 60px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  list-style-type: none;
  cursor: pointer;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
  border-left: 1px solid rgb(235, 235, 235);
  border-right: 1px solid rgb(235, 235, 235);
}
.bas .yanse {
  background: rgb(230, 162, 60);
  width: 62px;
  height: 42px;
  color: white;
  border: none;
}
</style>
