import { defineConfig } from '@vue/cli-service';
export default defineConfig({
  transpileDependencies: true
})

export const configureWebpack = {
  resolve: {
    // Opción para excluir el elemento "marquee" del proceso de resolución de componentes
    isCustomElement: tag => tag === 'marquee'
  }
};