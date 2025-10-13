import MainNavbar from "@/components/MainNavbar";
import MainLayout from "@/layout/MainLayout";
import carpet from "@/assets/images/carpet.png";
import arrow from "@/assets/images/arrow.png";
import PromoSection from "@/components/PromoSection";
import CategoryGrid from "@/components/CategoryGrid";

export default function HomePage() {



  // const category2Data=[
  //   {id:1 , bg: '' , label: '' , buttonText:''},
  //   {id:2 , bg: '' , label: '' , buttonText:''},
  //   {id:3 , bg: '' , label: '' , buttonText:''},
  //   {id:4 , bg: '' , label: '' , buttonText:''},
  // ]

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
            secondaryBtn={{toPage: "/" , text: 'محصولات ویژه ایرانی فرش'}}
          />
          <CategoryGrid />
        </>
      </MainLayout>
    </div>
  );
}
