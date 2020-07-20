<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p @click="add">{{counter}}</p>
    <HelloWorld @addFeature="addFeature" msg="1234"/>
    <TsxComp msg="tsx comp"></TsxComp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld, {FeatureSelect} from './components/HelloWorld.vue';
import TsxComp from './components/TsxComp'
import cm from '@/store/counter'

@Component({
  components: {
    HelloWorld,
    TsxComp
  },
})

export default class App extends Vue {
  addFeature(feature: FeatureSelect) {
    console.log(22222222);
    
  }
  created () {
    console.log(this.$axios, this.$create)
    
  }

  get counter() {
    return cm.count
  }

  add() {
    cm.add()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
