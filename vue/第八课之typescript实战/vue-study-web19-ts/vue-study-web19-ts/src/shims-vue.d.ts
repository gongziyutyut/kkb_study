import Vue from 'vue'
import { AxiosInstance } from 'axios'

type createInstance = {
  create: () => void
}
declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance,
    $create: createInstance
  }
}
