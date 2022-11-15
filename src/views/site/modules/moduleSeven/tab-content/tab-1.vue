<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          {{$t("Text7-1")}}
        </p>
      </div>
      <Accordion :activeProp="0">
        <AccordionItem>
          <template slot="accordion-trigger">
            <div class="module__accordion-header">
              <div class="accordion-img">
                <img src="/svg/lineIcon.svg" alt="" />
              </div>
              <h4 class="accordion-text">{{$t("Text5-1-1")}}</h4>
            </div>
          </template>
          <template slot="accordion-content">
            <div style="padding: 0 15px 15px">
              <div class="accordion-item">
                <h4 class="accordion-text">
                  • {{$t("Text7-1-1")}}
                </h4>
                <h4 class="accordion-text">
                  • {{$t("Text7-1-2")}}
                </h4>
                <h4 class="accordion-text">
                  • {{$t("Text7-1-3")}}
                </h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">{{$t("Text7-1-4")}}</div>
      <div class="tab_content-text">
        <strong class="strongColor">{{$t("Text7-1-4")}}—</strong> {{$t("Text7-1-5")}}
      </div>
      <div class="tab_content-text">
        {{$t("Text7-1-6")}}
      </div>
      <div class="tab_content-text">
        {{$t("Text7-1-7")}}
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{$t("Text7-1-8")}}
        </div>
        <div class="tab_content-text">
          {{$t("Text7-1-9")}}
        </div>
      </div>
      <div class="content_flex">
        <div class="tab_content-block content_flex-info">
          <div class="tab_content-text">
            <strong class="strongColor">{{$t("Text7-1-4")}} -</strong> {{$t("Text7-1-10")}}
          </div>
          <div class="tab_content-text">
            {{$t("Text7-1-11")}}
          </div>
        </div>
        <div class="content_flex-img" style="max-width: 420px">
          <img src="/images/tabImg/129.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{$t("Text7-1-12")}}</div>
        <div class="tab_content-text">
          {{$t("Text7-1-13")}}
        </div>
      </div>
      <div class="tab_content-title text-center">{{$t("Text7-1-14")}}</div>
      <div class="tabImg" style="max-width: 650px">
        <img src="/images/tabImg/130.jpg" alt="" />
      </div>
      <div class="tab_content-title text-center mt-5">
        {{$t("Text7-1-15")}}
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{$t(item.name) }}</span>
          </li>
        </div>
      </ul>
      <div class="tabImg" style="max-width: 620px">
        <img src="/images/tabImg/131.jpg" alt="" />
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{$t("Text7-1-16")}}</div>
        <div class="tab_content-text">
          {{$t("Text7-1-17")}}
        </div>
        <div class="tab_content-text">
          {{$t("Text7-1-18")}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "tab-1",
  components: { Accordion, AccordionItem },
  data() {
    return {
      items: [
        {
          id: 0,
          name: "в целях обследования и лечения гражданина, не способного из-за своего состояния выразить свою волю;",
        },
        {
          id: 1,
          name: "при угрозе распространения инфекционных заболеваний массовых отравлений и поражений;",
        },
        {
          id: 2,
          name: "по запросу органов дознания и следствия, прокуратуры и суда в связи с проведением расследования или судебным разбирательством;",
        },
        {
          id: 3,
          name: "в случае оказания помощи несовершеннолетнему в возрасте до пятнадцати лет для информи-рования его родителей или законных представителей;",
        },
        {
          id: 4,
          name: "при наличии оснований, позволяющих полагать, что вред здоровью гражданина причинен в результате противоправных действий либо несчастного случая.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-info {
  width: 100%;
  margin: 0 auto;
}
.content_flex-img {
  max-width: 250px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .content_flex {
    flex-wrap: wrap;
    justify-content: center;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    max-width: 100%;
    order: 2;
  }
}
</style>
