<template>
  <div class="login">
    <header data-am-widget="header" class="am-header am-header-default joan-head2 ">
      <div class="am-header-left am-header-nav">
        <a href="javascript:history.back()" class="">
          <i class="am-icon-chevron-left"></i>
        </a>
      </div>

      <h1 class="am-header-title">
        <a href="#title-link" class="">登录</a>
      </h1>

      <div class="am-header-right am-header-nav">

        <router-link to="/home" class="">
          <i class="am-header-icon am-icon-home"></i>
        </router-link>
      </div>
    </header>

    <div class="login">
      <form method="post" action=" ">
        <ul class="login-ul">
          <li class="login-li">

            <input name="username" placeholder="手机" class="login-input-phone" type="tel">
            <i class="am-icon-user"></i>

          </li>
          <li class="login-li">

            <input name="password" placeholder="密码" class="login-input-password" type="password">
            <i class="am-icon-unlock-alt"></i>
          </li>
        </ul>
      </form>


      <div class="login-btn">
        <router-link to="/login" class="am-btn am-btn-warning am-round mb20">登陆</router-link>
        <router-link to="/reg" class="am-btn am-btn-default am-round login-other-btn">注册</router-link>
      </div>


    </div>


  </div>
</template>

