<template>
    <div class="wis-er">
        <div class="wisdom-all">
            <div class="wis-left">
                <div class="wis-left-top w-bg">
                    <div class="profile-top">
                        <a href="javascript:void(0)" class="profile-btn">出勤勤务</a>
                    </div>
                    <div class="architecture padding-cont">
                        <ul class="at-all">
                            <li class="at-item">
                                <span class="ar-card"><img src="../assets/images/list_1.png"></span>
                                <div class="at-right">
                                    <p class="at-name">门牌</p>
                                    <p class="at-num">5197</p>
                                </div>
                            </li>
                            <li class="at-item">
                                <span class="ar-card"><img src="../assets/images/list_2.png"></span>
                                <div class="at-right">
                                    <p class="at-name">房屋</p>
                                    <p class="at-num">51970</p>
                                </div>
                            </li>
                            <li class="at-item">
                                <span class="ar-card"><img src="../assets/images/list_3.png"></span>
                                <div class="at-right">
                                    <p class="at-name">建筑</p>
                                    <p class="at-num">51970</p>
                                </div>
                            </li>
                            <li class="at-item">
                                <span class="ar-card"><img src="../assets/images/list_4.png"></span>
                                <div class="at-right">
                                    <p class="at-name">单位</p>
                                    <p class="at-num">51970</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="wis-left-bottom w-bg">
                    <div class="profile-top">
                        <a href="javascript:void(0)" class="profile-btn">视频监控</a>
                    </div>
                    <div class="architecture padding-cont">
                        <ul class="video-all">
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                            <li class="video-item">
                                <img src="../assets/images/pic.png">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="wis-center"></div>
            <div class="wis-right">
                <div class="wis-left-top w-bg">
                    <div class="profile-top">
                        <a href="javascript:void(0)" class="profile-btn">值班表</a>
                    </div>
                    <div class="architecture padding-cont table">
                        <table>
                            <thead>
                            <tr>
                                <th>派出所</th>
                                <th>警情类型</th>
                                <th>发生时间</th>
                                <th>地址</th>
                                <th>链接</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>云埔所</td>
                                <td>治安</td>
                                <td>
                                    <div class="wn-time">
                                        <p>18:32</p>
                                        <p>2020/04/13</p>
                                    </div>
                                </td>
                                <td>
                                    黄埔大道
                                </td>
                                <td>
                                    <a href="javascript:void(0)" class="solid-btn">查看详情</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        <!-- 弹窗 -->
        <div class="modal w-bg">
            <div class="modal-header">
                <div class="mh-a">
                <span class="mh-left">
                <i class="mh-text">视频监控</i>
                <i class="icon-img"><img src="../assets/images/setting.png"></i>
            </span>
                </div>
                <a href="javascript:void(0)" class="close"><img src="../assets/images/close.png"></a>
            </div>
            <div class="modal-body">
                <div class="video-content">
                    <video id="video-play"  width="100%" height="100%" controls="controls" poster="../assets/images/pic2.png">您的浏览器不支持 video 标签。</video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/style/global.css';
</style>
