import MainNavbar from "@/components/MainNavbar";
import MainLayout from "@/layout/MainLayout";
import carpet from "@/assets/images/carpet.png";
import arrow from "@/assets/images/arrow.png";
import PromoSection from "@/components/PromoSection";
import ProductSection from "@/components/ProductSection";
export default function HomePage() {
  return (
    <div>
      <MainLayout>
        <>
          <MainNavbar />
          <PromoSection
            src={carpet}
            arrow={arrow}
            title={"خرید راحت فرش، در"}
            highlight={"ایرانی فرش"}
            description={"  با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و  از تنوع بی نظیر فرش ها لذت ببر"}
            primaryBtn={{toPage: "/SignUp", extraClass: 'redBtn' , text: 'عضویت در باشگاه مشتریان'}}
            secondryBtn={{toPage: "/SignUp" , text: 'محصولات ویژه ایرانی فرش'}}
          />
          <ProductSection/>
        </>
      </MainLayout>
    </div>
  );
}
