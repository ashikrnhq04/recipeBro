import SidebarMenu from "./components/home/SidebarMenu";
import MenuList from "./components/recipe/MenuList";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title='Choose from thousands of recipes'
        description='Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas'
      />
      <section className='container py-8'>
        <div className='grid grid-cols-12 py-4'>
          <SidebarMenu />
          <MenuList />
        </div>
      </section>
    </>
  );
}
