import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const messages = {
  en: { msg: { content: "I LOVE  YOU", hello: "Hello" } },
  th: { msg: { content: "ฉัน รัก คุณ", hello: "สวัสดีครับ / สวัสดีค่ะ" } },
  north: {
    msg: {
      content: "เปิ้น ฮัก ตั๋ว",
      hello: "สะหวัดดีเจ้า / สะหวัดดีคับ",
    },
  },
};

const i18n = new VueI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
