import ElementPlus from 'element-plus'
// @ts-ignore
import koKR from 'element-plus/dist/locale/ko'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

export default defineNuxtPlugin((app) => {
  app.vueApp.use(ElementPlus, { size: 'small', locale: koKR })

  return {
    provide: {
      dayjs,
    },
  }
})
