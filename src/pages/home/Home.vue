<template>
    <div class="wisdom-all">
        <div class="wis-left">
            <div class="wis-left-top w-bg">
                <div class="profile-top">
                    <a href="javascript:void(0)" class="profile-btn">人口概要</a>
                </div>
                <div class="archives padding-cont">
                    <div class="arch-header">
                        <span class="ar-card"><img src="../../assets/images/card.png"></span>
                        <div class="ar-right">
                            <p class="ar-text"><span>人员档案</span><span>2834568<i> 人</i></span></p>
                            <p class="ar-line">
                                <i class="blue-bg"></i>
                                <i class="green-bg"></i>
                                <i class="yellow-bg"></i>
                                <i class="red-bg"></i>
                            </p>
                        </div>
                    </div>
                    <div class="arch-body">
                        <div class="arch-real">
                            <p class="real-title">系统分析实有人口</p>
                            <ul class="real-all">
                                <li class="real-item">
                                    <div class="real-left">
                                        总数
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num">5756</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left-blue">
                                        已知身份实有人口
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num blue">4402</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left-green">
                                        未知身份实有人口
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num green">4402</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left">
                                        系统分析搬离人员
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num">136565</span>
                                        人
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="arch-real">
                            <p class="real-title">非实有人口</p>
                            <ul class="real-all">
                                <li class="real-item">
                                    <div class="real-left">
                                        总数
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num">5756</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left-yellow">
                                        过路人员
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num yellow">4402</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left-red">
                                        未知身份实有人口
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num red">4402</span>
                                        人
                                    </div>
                                </li>
                                <li class="real-item">
                                    <div class="real-left">
                                        系统分析搬离人员
                                    </div>
                                    <div class="real-right">
                                        <span class="real-num">136565</span>
                                        人
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wis-left-bottom w-bg">
                <div class="profile-top">
                    <a href="javascript:void(0)" class="profile-btn">建筑概况</a>
                </div>
                <div class="architecture padding-cont">
                    <ul class="at-all">
                        <li class="at-item">
                            <span class="ar-card"><img src="../../assets/images/bottom_1.png"></span>
                            <div class="at-right">
                                <p class="at-name">门牌</p>
                                <p class="at-num">5197</p>
                            </div>
                        </li>
                        <li class="at-item">
                            <span class="ar-card"><img src="../../assets/images/bottom_2.png"></span>
                            <div class="at-right">
                                <p class="at-name">房屋</p>
                                <p class="at-num">51970</p>
                            </div>
                        </li>
                        <li class="at-item">
                            <span class="ar-card"><img src="../../assets/images/bottom_3.png"></span>
                            <div class="at-right">
                                <p class="at-name">建筑</p>
                                <p class="at-num">51970</p>
                            </div>
                        </li>
                        <li class="at-item">
                            <span class="ar-card"><img src="../../assets/images/bottom_4.png"></span>
                            <div class="at-right">
                                <p class="at-name">单位</p>
                                <p class="at-num">51970</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wis-center"></div>
        <div class="wis-right">
            <div class="wis-left-top w-bg">
                <div class="profile-top">
                    <a href="javascript:void(0)" class="profile-btn">基础设施建设</a>
                </div>
            </div>
            <div class="wis-left-bottom w-bg">
                <div class="profile-top">
                    <a href="javascript:void(0)" class="profile-btn">治安防控</a>
                </div>
            </div>
            <div class="wis-left-bottom w-bg">
                <div class="profile-top">
                    <a href="javascript:void(0)" class="profile-btn">预警概要</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../../assets/style/global.css';
</style>
