import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

let vueApp;

/**
 * MEMO
 *  - Vue가 마운트/언마운트 될 때 불안정, ReactContainer가 생성한 DOM을 변경해 버린다.
 *  - 일단 div를 하나 더 만들어 vue 마운트.
 */
window.mountMicroVue = id => {
  const target = document.getElementById(id);
  const targetInnerId = `${id}-inner`;
  const targetInner = document.createElement('div');

  targetInner.id = targetInnerId;
  target.appendChild(targetInner);

  vueApp = new Vue({
    render: h => h(App)
  }).$mount(`#${targetInnerId}`);
};

window.unmountMicroVue = id => {
  if (vueApp) vueApp.$destroy();
};

if (document.getElementById('micro-server') !== null) {
  new Vue({
    render: h => h('p', 'micro-vue is serving')
  }).$mount('#micro-server');
}
