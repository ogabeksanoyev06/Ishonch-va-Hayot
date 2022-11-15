<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          {{ $t("TextModule9-1") }}
        </p>
      </div>
      <Accordion :activeProp="0">
        <AccordionItem>
          <template slot="accordion-trigger">
            <div class="module__accordion-header">
              <div class="accordion-img">
                <img src="/svg/lineIcon.svg" alt="" />
              </div>
              <h4 class="accordion-text">
                {{ $t("TextModule9-2") }}
              </h4>
            </div>
          </template>
          <template slot="accordion-content">
            <div style="padding: 0 15px 15px">
              <div class="accordion-item">
                <h4 class="accordion-text">• {{ $t("TextModule9-3") }}</h4>
                <h4 class="accordion-text">• {{ $t("TextModule9-4") }}</h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">
        {{ $t("TextModule9-5") }}
      </div>
      <div class="module_title bgTab mt-3">{{ $t("TextModule9-6") }}</div>
      <div class="tab_content-text">
        {{ $t("TextModule9-7") }}
      </div>
      <div class="tab_content-text">
        {{ $t("TextModule9-8") }}
      </div>
      <div class="tab_content-text">
        {{ $t("TextModule9-9") }}
      </div>
      <div class="content_flex">
        <div class="tab_content-text content_flex-info">
          {{ $t("TextModule9-10") }}
        </div>
        <div class="content_flex-img">
          <img src="/images/tabImg/image 203.png" alt="" />
        </div>
      </div>
      <div class="tabImg" style="max-width: 700px">
        <img src="/images/tabImg/155.jpg" alt="" />
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title mb-3">
          {{ $t("TextModule9-11") }}
        </div>
        <div class="tab_content-text">
          1) {{ $t("TextModule9-11-1") }}; <br />
          2) {{ $t("TextModule9-11-2") }}; <br />
          3) {{ $t("TextModule9-11-3") }}
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("TextModule9-12") }}</div>
        <div class="tab_content-text">
          {{ $t("TextModule9-12-4") }} <br />
          <br />
          1. {{ $t("TextModule9-12-1") }}; <br />
          2. {{ $t("TextModule9-12-2") }}; <br />
          3. {{ $t("TextModule9-12-3") }}.
        </div>
        <div class="tabImg" style="max-width: 760px">
          <img src="/images/tabImg/156.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("TextModule9-13") }}</div>
        <div class="tab_content-text">
          {{ $t("TextModule9-13-1") }}
        </div>
        <div class="tabImg" style="max-width: 750px">
          <img src="/images/tabImg/157.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("TextModule9-14") }}
        </div>
        <div class="tab_content-text">
          {{ $t("TextModule9-14-1") }}
        </div>
        <div class="tabImg" style="max-width: 720px">
          <img src="/images/tabImg/158.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("TextModule9-15") }}</div>
        <div class="tab_content-text">
          {{ $t("TextModule9-15-1") }}
        </div>
        <div class="tabImg" style="max-width: 730px">
          <img src="/images/tabImg/159.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("TextModule9-16") }}
        </div>
        <div class="tab_content-text">
          {{ $t("TextModule9-16-1") }}
        </div>
        <div class="tab_content-title">{{ $t("TextModule9-17") }}</div>
        <div class="tabImg" style="max-width: 800px">
          <img src="/images/tabImg/160.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("TextModule9-18") }}
        </div>
        <div class="tab_content-text">
          {{ $t("TextModule9-18-1") }}
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
    return {};
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
  max-width: 500px;
  width: 100%;
}
.content_flex-img {
  max-width: 280px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
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
