import Vue from 'vue'
import './styles/styles.scss'

var app = new Vue({
  el: '#app',
  data: {
    ready: [
      'webpack',
      'config',
      'optimization',
      'copy',
      'scripts',
      'vue',
      'react',
      'babel',
      'ts',
      'normalize',
      'sass',
      'autoprefiexer',
      'Roboto',
      'etc'
    ]
  },
  template:  `<div class="container">
                <div class="logo"></div>
                <h1>All set</h1>
                 <div v-for="item of ready" :key="item" class="ready">- {{item}}</div>
                 <a href="https://github.com/iFrosta">@ifrosta</a>
              </div>`
});
