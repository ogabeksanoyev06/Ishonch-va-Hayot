<template>
  <div class="tab_content">
    <div class="tab_content-block">
      <div class="module_title">
        {{ $t("Text8-21") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-22") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-23") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-24") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-25") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-26") }}
      </div>
    </div>
    <div class="tab_content-title">{{ $t("Text8-27") }}</div>
    <div class="tabImg" style="max-width: 670px">
      <img v-if="lang" src="/images/tabImg/138.jpg" alt="" />
      <img v-else src="/images/tabImg/138uz.png" alt="" />
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-28") }}</div>
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("Text8-28") }}</strong> -
        {{ $t("Text8-29") }}
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
            <img data-v-459d7600="" src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="tabImg" style="max-width: 660px">
      <img class="w-100" src="/images/tabImg/139.jpg" alt="" />
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-30") }}</div>
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("Text8-30") }}</strong> –
        {{ $t("Text8-31") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-32") }}</div>
      <div class="tab_content-text">
        {{ $t("Text8-33") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("Text8-34") }}</strong>
        {{ $t("Text8-35") }}
        <br />
        {{ $t("Text8-36") }}
      </div>
    </div>
    <div class="tabImg" style="max-width: 760px">
      <img v-if="lang" src="/images/tabImg/154.jpg" alt="" />
      <img v-else src="/images/tabImg/154uz.png" alt="" />
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">{{ $t("Text8-37") }}</strong>
      {{ $t("Text8-38") }}
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-39") }}</div>
      <div class="tab_content-text">
        {{ $t("Text8-40") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-41") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-42") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-43") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-44") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("Text8-45") }}</strong>
        {{ $t("Text8-46") }}
      </div>
    </div>
    <div class="tab_content-text">
      {{ $t("Text8-47") }}
    </div>
    <ul class="tab-content_ul">
      <div>
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img src="/svg/virusIcon.svg" alt="" />
          <span>{{ item.name }}</span>
        </li>
      </div>
    </ul>
    <div class="tabImg" style="max-width: 820px">
      <img v-if="lang" src="/images/tabImg/153.jpg" alt="" />
      <img v-else src="/images/tabImg/153uz.png" alt="" />
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-48") }}</div>
      <div class="tab_content-text">
        {{ $t("Text8-49") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-50") }}
      </div>
    </div>
    <div class="tabImg my-4" style="max-width: 800px">
      <img v-if="lang" src="/images/tabImg/154.jpg" alt="" />
      <img v-else src="/images/tabImg/154uz.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "tab-5",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: " Не откладывайте «на потом».",
        },
        {
          id: 1,
          name: " Используйте местоимение «я» («мне», «меня»).",
        },
        {
          id: 2,
          name: " Назовите чувство «по имени» как можно точнее — не преувеличивая и не преуменьшая.",
        },
        {
          id: 3,
          name: " Скажите, каким конкретно поступком вызваны ваши чувства.",
        },
        {
          id: 4,
          name: " Постарайтесь подкрепить слова мимикой, позой, интонациями. Позитивное отношение к собственным чувствам ",
        },
        {
          id: 5,
          name: "	Я имею право на любые чувства — как позитивные, так и негативные. Я принимаю чувства такими, какие они есть не гоню их от себя.",
        },
        {
          id: 6,
          name: "	Никто лучше меня не знает моих чувств.",
        },
        {
          id: 7,
          name: "	Чувства, возникшие по отношению к другим, лучше выразить в диалоге с их непосредственным участием.",
        },
        {
          id: 8,
          name: "	Мой авторитет не страдает, если я говорю о своих чувствах.",
        },
        {
          id: 9,
          name: "  Выражение позитивных чувств ни к чему не обязывает.",
        },
        {
          id: 10,
          name: "  Не следует смешивать позитивные и негативные чувства. Их необходимо разделять во времени. Похвала со злобным выражением лица только дезориентирует партнера.",
        },
        {
          id: 11,
          name: "  Принимайте и цените похвалу партнера! Он сделал это для вас",
        },
      ],
      items1: [
        {
          id: 0,
          name: "сохранять визуальный контакт",
        },
        {
          id: 1,
          name: "находиться в открытой позе (руки и ноги не скрещены,   корпус 	тела развернут к собеседнику)",
        },
        {
          id: 2,
          name: "жестами и мимикой поощрять речь другого человека – кивать 	в ответ на какие-либо утверждения и т.д.",
        },
      ],
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
</style>
