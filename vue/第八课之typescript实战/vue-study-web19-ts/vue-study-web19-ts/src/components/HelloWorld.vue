<template>
  <div class="hello">
    <p>
      <input type="text" @keyup.enter="addFeature" />
    </p>
    <ul v-if="features.length">
      <li
        v-for="feature in features"
        :key="feature.id"
        :class="{selected: feature.selected}"
      >{{feature.name}}</li>
      <li>特性总数：{{count}}</li>
      {{newCount}}
    </ul>
    
  </div>
</template>

<script lang="ts">
// class-style组件
import { Prop, Vue, Component} from "vue-property-decorator";

// you can you up
function Emit (target: any, name: string, descriptor: any) {
  // target为类的实例， name为修饰的函数名， descriptor是一个对象，value为函数
  console.log(target, name, descriptor)
  const callback = descriptor.value
  descriptor.value = function (...args:any)  {
    let param = Array.from(arguments)
    let renturnVal = callback.call(this, ...param)
    this.$emit(name, renturnVal)
  }
}

type Feature = {
  id: number;
  name: string;
};

interface Select {
  selected: boolean
}
// type Select = {
//   selected: boolean;
// };

export type FeatureSelect = Feature & Select;
@Component
export default class HelloWorld extends Vue {
  // 声明一个属性
  @Prop({type: String, required: true})
  msg!: string
  
  // 类的属性将直接转换为data
  features: FeatureSelect[] = [];
  newCount: number = 0

  // 生命周期同名方法作为同名钩子使用
  created() {
    console.log('shengmingzhoqi')
    this.features = [
      { id: 1, name: "类型注解", selected: false },
      { id: 2, name: "静态类型检测", selected: true }
    ];
   /*  const resp = await this.$axios.get<FeatureSelect[]>('/api/list')
    this.features = resp.data */
  }

  mounted () {
    console.log('shengmingzhoqi')
  }

  // 方法直接作为methods选项
  // 以方法名做事件名，返回值做参数
  @Emit
  addFeature(e: KeyboardEvent) {
    // 获取input的value属性
    // 如果用户特别确定类型，可以做类型断言
    const inp = e.target as HTMLInputElement;
    const val = inp.value;
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: val,
      selected: false
    };
    this.features.push(feature);
    this.count = feature.id
    inp.value = "";
    return feature
  }

  // 存取器作为计算属性存在
  get count() {
    return this.features.length ? this.features.length : 0
  }

  set count (val) {
    this.newCount = val
  }
}

// options-style
// export default Vue.extend({
//   props: ['msg'],
//   mounted () {
//     this.msg;
//   },
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

.selected {
  background-color: rgb(186, 222, 245);
}
</style>
