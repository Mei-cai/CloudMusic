<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
  body,ul,li,a,input,p,div,span,i{
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  //五个导航路由的基本样式
  .discover,.cloud,.mine,.sing,.podcast{
    width: 100vw;
    height: calc(100vh - 50px);
    .top{
      width: 100vw;
      height: 60px;
      margin: 0 auto;
    }
  }
</style>
