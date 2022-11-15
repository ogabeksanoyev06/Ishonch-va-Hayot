<template>
  <div class="tab_content">
    <div class="module_title">{{$t("module3.11")}}</div>
    <div class="tab_content-text">
      <strong class="strongColor"> “{{$t("module3.11")}}”</strong> - {{$t("module3.12")}}
    </div>
    <div style="text-align: center">
      <div class="module_title">{{$t("module3.13")}}</div>
      <div class="tab_content-text" style="text-align: center">
        {{$t("module3.14")}}
      </div>
    </div>
    <div class="tabImg" style="max-width: 900px">
      <img src="/images/tabImg/121.png" alt="" />
    </div>
    <div class="module_title">
      {{$t("module3.15")}}
    </div>
    <div class="tab_content-text">
      <strong class="strongColor"> {{$t("module3.16")}} </strong> — {{$t("module3.17")}}
    </div>
    <div class="tab_content-text bgTab">
      {{$t("module3.18")}} <br />
      «{{$t("module3.19")}}»
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          frameborder="0"
          allow="autoplay"
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
          allowfullscreen="allowfullscreen"
        />
      </div>
    </div>
    <div class="tab_content-title">{{$t("module3.20")}}</div>
    <div class="tab_content-text">
      {{$t("module3.21")}}
    </div>
    <div class="module_title bgTab" style="text-align: center">
      {{$t("module3.22")}}
    </div>
    <div class="tabImg" style="max-width: 900px">
      <img class="w-100" src="/images/tabImg/148.png" alt="" />
    </div>
    <div class="module_title">
      {{$t("module3.23")}}
    </div>
    <div class="tab_content-text bgTab">
      {{$t("module3.24")}}
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          frameborder="0"
          allow="autoplay"
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
          allowfullscreen
        />
      </div>
    </div>
    <div class="tab_content-text">{{$t("module3.25")}}</div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          frameborder="0"
          allow="autoplay"
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58?showinfo=0"
          allowfullscreen
        />
      </div>
    </div>
    <div class="tab_content-text">{{$t("module3.26")}}</div>
    <div class="tab_content-text">
      <strong class="strongColor">{{$t("module3.27")}}</strong> – {{$t("module3.28")}}
      носителя маски.
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img src="/images/tabImg/149.png" alt="" />
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">
        {{$t("module3.29")}}
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span> {{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-4",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "• дети грудного и раннего возраста, особенно младше 2 лет",
        },
        {
          id: 1,
          name: "• беременные женщины",
        },
        {
          id: 2,
          name: "• лица любого возраста с хроническими заболеваниями легких (например, астма)",
        },
        {
          id: 3,
          name: "• лица любого возраста с хроническими заболеваниями сердца (например, сердеч- ная недостаточность)",
        },
      ],
      itemsX: [
        {
          id: 0,
          name: "• лица с расстройствами обмена веществ (например, диабет)",
        },
        {
          id: 1,
          name: "• лица с хроническими заболеваниями почек или печени, определенными неврологическими нарушениями или иммунодефицитом вследствие либо первичных иммунодефицитных состояний, например, ВИЧ-инфекции, либо таких состояний, обусловленных приемом иммуносупрессивных препаратов или онкологическим заболеванием.",
        },
        {
          id: 2,
          name: "• дети, получающие длительную терапию аспирином",
        },
        {
          id: 3,
          name: "• лица в возрасте 65 лет и старше",
        },
      ],
      items1: [
        {
          id: 0,
          name: "Перед тем как надеть медицинскую маску, необходимо вымыть руки с мылом или обработать их антисептиком.",
        },
        {
          id: 1,
          name: "Проверить маску на наличие повреждений.",
        },
        {
          id: 2,
          name: " Поместить маску на лицо так, чтобы она плотно прилегала к нему по краям.",
        },
        {
          id: 3,
          name: "Маска должна закрывать нос, рот и подбородок.",
        },
        {
          id: 4,
          name: "Не касайтесь маски во время использования.",
        },
        {
          id: 5,
          name: " Перед снятием маски необходимо вымыть руки или продезинфицировать",
        },
        {
          id: 6,
          name: "Снимайте маску за завязки или ушные петли, взявшись за низ сзади",
        },
        {
          id: 7,
          name: "Отведите маску от лица",
        },
        {
          id: 8,
          name: "После снятия маски. обработайте антисептиком или вымойте руки с мылом.",
        },
        {
          id: 9,
          name: "Меняйте маску каждые 3 часа, при необходимости чаще.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tabImg {
  width: 100%;
  margin: 0 auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}

.tab_content-text {
  margin-bottom: 20px;
}
.video-player-wrap {
  margin: 20px 0;
}
.video-player {
  width: 100%;
}
</style>
