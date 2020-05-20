<template>
  <div id="app">
      <div class="content-wisdom">
          <header class="wis-header"></header>
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    @media screen and (min-width: 2721px) and (max-width: 3840px) {
        html {
            font-size: 625%;
        }

    }
    @media screen and (min-width: 1200px) and (max-width: 1980px) {
        html {
            font-size: 246.528%;
        }

    }
    .content-wisdom {
        height: 100%;
        padding: 0 .50rem;
        font-size: .39rem;
        font-family: 'HYd9';
    }
    .flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .l_flex {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    body {
        font-size: 14px;
        color: #fff;
    }
    html,
    body,
    div,
    table,
    ul,
    li,
    ol,
    dl,
    dd,
    dt,
    a,
    img,
    label,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    input {
        margin: 0;
        padding: 0;
    }
    ul,
    ol {
        list-style: none;
    }
    em,
    i {
        font-style: normal;
    }
    strong {
        font-weight: normal;
    }
    img {
        max-width: 100%;
        display: block;
    }
    textarea {
        resize: none;
    }
    form {
        margin: 0;
    }
    button {
        outline: none!important;
    }
    button:focus {
        outline: none!important;
    }
    a,
    a:hover,
    a:focus {
        text-decoration: none;
        outline: none;
    }
    a{
        color: #fff;
    }
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    @font-face {
        font-family: 'HYd9';
        src: url('./assets/font/汉仪仿宋简.ttf');
    }
    .w-bg{
        padding: .50rem;
        background: rgba(14,20,32,0.8);
    }
    .wis-header{
        height: 2rem;
    }
</style>
