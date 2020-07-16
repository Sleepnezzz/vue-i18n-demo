<template>
  <div class="hello">
    <h1 class="rainbow-text">{{ $t("msg.hello") }}</h1>
    <v-select
      :options="options"
      style="padding: 10px;"
      v-model="local"
      @input="switchLocale()"
    ></v-select>
    <div>
      <h1>{{ $t("msg.content") }}</h1>
      <img src="../assets/heart.jpg" width="100%" />
    </div>
    <p>
      <span
        >Photo by
        <a
          href="https://unsplash.com/@mayurgala?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >Mayur Gala</a
        >
        on
        <a
          href="https://unsplash.com/s/photos/heart-png?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >Unsplash</a
        ></span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      local: "en",
      options: ["en", "th", "อู้คำเมือง"],
    };
  },
  methods: {
    switchLocale() {
      if (this.local == "อู้คำเมือง") {
        this.$i18n.locale = "north";
      } else {
        this.$i18n.locale = this.local;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  width: 50%;
  margin: auto;
  border: 5px dashed #bcbcbc;
  border-radius: 10px;
}
.content {
  background-image: url("../assets/heart.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.rainbow-text {
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
