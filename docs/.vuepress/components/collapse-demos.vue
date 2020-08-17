<template>
  <templateDemos title="多项展开" :code="code">
    <Collapse :selected.sync="collapseSelected">
      <CollapseItem title="点击展开1" name="item1">
        柠檬（学名：Citrus limon (L.) Burm. f.），为双子叶植物纲芸香科柑橘属植物，柠檬又称柠果、洋柠檬、益母果等。 小乔木，枝少刺或近于无刺，嫩叶及花芽暗紫红色，叶片厚纸质，卵形或椭圆形。单花腋生或少花簇生。果椭圆形或卵形，果皮厚，通常粗糙，柠檬黄色，果汁酸至甚酸，种子小，卵形，端尖；种皮平滑，子叶乳白色，通常单或兼有多胚。花期4-5月，果期9-11月。
      </CollapseItem>
      <CollapseItem title="点击展开2" name="item2">
        柠檬因其味极酸，孕妇最喜食，故称益母果或益母子。柠檬中含有丰富的柠檬酸，因此被誉为“柠檬酸仓库”。它的果实汁多肉脆，有浓郁的芳香气。因为味道特酸，故只能作为上等调味料，用来调制饮料菜肴、化妆品和药品。此外，柠檬富含维生素C，能化痰止咳，生津健胃。用于支气管炎，百日咳，食欲不振，维生素缺乏，中暑烦渴等症状，它是"坏血病"的克星。
      </CollapseItem>
      <CollapseItem title="点击展开3" name="item3">
        柠檬性喜温暖，耐阴，不耐寒，也怕热，因此，适宜在冬暖夏凉的亚热带地区栽培。柠檬适宜的年平均气温17-19℃，年有效积温（≥10℃）在5500℃以上，1月平均气温6-8℃，极端最低温高于-3℃；年降雨量1000毫米以上，年日照时数1000小时以上。柠檬适宜栽植于温暖而土层深厚、排水良好的缓坡地，柠檬最适宜土壤pH值是5.5-7.0之间。柠檬植株生长较快，植株高达3-6米，需肥量较大，一年多次抽梢、开花、结果，常因管理好坏而产量差异较大。
      </CollapseItem>
    </Collapse>
  </templateDemos>

</template>

<script>
import templateDemos from "./template-demos";
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  name: "collapse-demos",
  components: {
    Collapse,
    CollapseItem,
    templateDemos,
  },
  data() {
    return {
      collapseSelected: [],
      code: `
<Collapse :selected.sync="collapseSelected">
  <CollapseItem title="点击展开1" name="item1">
    柠檬（学名：Citrus limon (L.) Burm. f.），为双子叶植物纲芸香科柑橘属植物，柠檬又称柠果、洋柠檬、益母果等。 小乔木，枝少刺或近于无刺，嫩叶及花芽暗紫红色，叶片厚纸质，卵形或椭圆形。单花腋生或少花簇生。果椭圆形或卵形，果皮厚，通常粗糙，柠檬黄色，果汁酸至甚酸，种子小，卵形，端尖；种皮平滑，子叶乳白色，通常单或兼有多胚。花期4-5月，果期9-11月。
  </CollapseItem>
  <CollapseItem title="点击展开2" name="item2">
    柠檬因其味极酸，孕妇最喜食，故称益母果或益母子。柠檬中含有丰富的柠檬酸，因此被誉为“柠檬酸仓库”。它的果实汁多肉脆，有浓郁的芳香气。因为味道特酸，故只能作为上等调味料，用来调制饮料菜肴、化妆品和药品。此外，柠檬富含维生素C，能化痰止咳，生津健胃。用于支气管炎，百日咳，食欲不振，维生素缺乏，中暑烦渴等症状，它是"坏血病"的克星。
  </CollapseItem>
  <CollapseItem title="点击展开3" name="item3">
    柠檬性喜温暖，耐阴，不耐寒，也怕热，因此，适宜在冬暖夏凉的亚热带地区栽培。柠檬适宜的年平均气温17-19℃，年有效积温（≥10℃）在5500℃以上，1月平均气温6-8℃，极端最低温高于-3℃；年降雨量1000毫米以上，年日照时数1000小时以上。柠檬适宜栽植于温暖而土层深厚、排水良好的缓坡地，柠檬最适宜土壤pH值是5.5-7.0之间。柠檬植株生长较快，植株高达3-6米，需肥量较大，一年多次抽梢、开花、结果，常因管理好坏而产量差异较大。
  </CollapseItem>
</Collapse>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>