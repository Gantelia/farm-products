import { ProductProvider } from "../components/ui/provider-mark/provider-mark.jsx";

export const FEATURE_LIST = [
  {
    id: 0,
    provider: ProductProvider.FARM,
    image: "https://i.ibb.co/jyP5L6t/eat.png",
    title: "Еда намного вкуснее",
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
  },
  {
    id: 1,
    provider: ProductProvider.SHOP,
    image: "https://i.ibb.co/9tFXDTJ/garbage.png",
    title: "Просроченные продукты",
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
  },
  {
    id: 2,
    provider: ProductProvider.FARM,
    image: "https://i.ibb.co/8cjxRMm/sprout.png",
    title: "Натуральные продукты",
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
  },
  {
    id: 3,
    provider: ProductProvider.SHOP,
    image: "https://i.ibb.co/x7k6QGs/no-meat.png",
    title: "Некачественное мясо",
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
  },
];
