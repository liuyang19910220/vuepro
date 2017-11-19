<template>
  <div class="reg">
    <header data-am-widget="header" class="am-header am-header-default joan-head2 ">
      <div class="am-header-left am-header-nav">
        <a href="javascript:history.back()" class="">
          <i class="am-icon-chevron-left"></i>
        </a>
      </div>

      <h1 class="am-header-title">
        <a href="#title-link" class="">注册</a>
      </h1>

      <div class="am-header-right am-header-nav">

        <router-link to="/home" class="">
          <i class="am-header-icon am-icon-home"></i>
        </router-link>
      </div>
    </header>

    <div class="login">
      <form method="post" action=" ">
        <ul class="login-ul reg-ul">
          <li class="login-li">
            <span>手机号码</span>
            <input name="username" placeholder="手机" class=" " type="tel">
            <i class="am-icon-mobile"></i>

          </li>
          <li class="login-li">
            <span>登录密码</span>
            <input name="password" placeholder="密码" class=" " type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>
          <li class="login-li">
            <span>再次输入密码</span>
            <input name="password" placeholder="密码" class=" " type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>

          <li class="login-li">
            <span>手机验证码</span>
            <input name="yzm" placeholder="验证码" class="yzm-input" type="text">
            <button class="am-btn am-btn-warning">获取验证码</button>
          </li>
        </ul>
      </form>

      <div class="login-btn">
        <router-link to="/reg" active-class="am-btn am-btn-warning am-round mt20">注册</router-link>
      </div>
    </div>
  </div>
</template>
