// src/vue-shim.d.ts or src/types/vue-shim.d.ts
declare module "*.vue" {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // TODO: Remove this file if ts is fixed