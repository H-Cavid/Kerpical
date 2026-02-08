import ProductClient from "./ProductClient";
import { Metadata } from "next";

// SEO Məlumat Bazası
const seoData = {
  'kerpic-19-19-8-5': {
    az: { title: 'Kərpic 8.5x19x19 Satışı və Qiyməti | Kerpical.az', desc: 'Yüksək keyfiyyətli 8.5x19x19 ölçülü kərpiclərin ən münasib qiymətə satışı.' },
    ru: { title: 'Кирпич 8.5x19x19 - Цена и Продажа в Баку | Kerpical.az', desc: 'Продажа качественного кирпича размером 8.5x19x19 по лучшим ценам.' },
    en: { title: 'Brick 8.5x19x19 for Sale | Best Prices - Kerpical.az', desc: 'High-quality 8.5x19x19 size bricks for sale in Azerbaijan.' }
  },
  'kerpic-19-19-10-5': {
    az: { title: 'Kərpic 10.5x19x19 Münasib Qiymətə | Kerpical.az', desc: '10.5x19x19 ölçülü kərpiclərin topdan və pərakəndə satışı.' },
    ru: { title: 'Кирпич 10.5x19x19 Купить в Баку - Лучшая Цена | Kerpical.az', desc: 'Надежный кирпич 10.5x19x19 для вашего строительства.' },
    en: { title: 'Brick 10.5x19x19 Sale and Prices | Kerpical.az', desc: 'High durability 10.5x19x19 size bricks for sale.' }
  },
  'kerpic-19-19-13-5': {
    az: { title: 'Kərpic 13.5x19x19 Sərfəli Qiymət | Kerpical.az', desc: '13.5x19x19 kərpicləri ilə tikintidə qənaət edin.' },
    ru: { title: 'Кирпич 13.5x19x19 Выгодная Цена - Купить в Азербайджане', desc: 'Экономьте на строительстве с кирпичом 13.5x19x19.' },
    en: { title: 'Affordable Brick 13.5x19x19 Price | Kerpical.az', desc: 'Save on construction with 13.5x19x19 size bricks.' }
  },
  'kerpic-29-19-19': {
    az: { title: 'Böyük Ölçülü Kərpic 29x19x19 Satışı | Kerpical.az', desc: '29x19x19 kərpicləri ilə divarları daha sürətli hörün.' },
    ru: { title: 'Крупноформатный Кирпич 29x19x19 - Продажа и Доставка', desc: 'Стройте быстрее с кирпичом 29x19x19.' },
    en: { title: 'Large Format Brick 29x19x19 Sale | Kerpical.az', desc: 'Build faster with 29x19x19 large size bricks.' }
  },
  'kerpic-39-19-19': {
    az: { title: 'Maksimum Ölçü: Kərpic 39x19x19 Qiyməti | Kerpical.az', desc: 'İri həcmli tikintilər üçün 39x19x19 kərpic satışı.' },
    ru: { title: 'Кирпич 39x19x19 по Оптовым Ценам в Баку | Kerpical.az', desc: 'Продажа больших кирпичей 39x19x19 для масштабных строек.' },
    en: { title: 'Wholesale Brick 39x19x19 Prices | Kerpical.az', desc: 'Get the best offers for 39x19x19 size bricks.' }
  },
  'kerpic-saxta': {
    az: { title: 'Dekorativ (Saxta) Kərpic Satışı | Kerpical.az', desc: 'Evinizin dizaynı üçün estetik dekorativ kərpiclər.' },
    ru: { title: 'Декоративный Кирпич для Облицовки - Купить в Баку', desc: 'Эстетичные декоративные кирпичи для вашего интерьера.' },
    en: { title: 'Decorative Bricks for Interior Design | Kerpical.az', desc: 'Beautiful decorative bricks for home styling.' }
  }
};

// Metadata Generator
export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
  const { slug } = await params;
  const lang = (await searchParams).lang || 'az';

  const currentProduct = seoData[slug as keyof typeof seoData] || seoData['kerpic-19-19-8-5'];
  const metadata = currentProduct[lang as keyof typeof currentProduct] || currentProduct['az'];

  return {
    title: metadata.title,
    description: metadata.desc,
    alternates: {
      canonical: `https://kerpical.az/products/${slug}?lang=${lang}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductClient slug={slug} />;
}