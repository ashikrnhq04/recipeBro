import SidebarMenu from "./components/views/home/SidebarMenu";
import MenuList from "./components/recipe/MenuList";
import Hero from "./components/views/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className='container py-8'>
        <div className='grid grid-cols-12 py-4'>
          <SidebarMenu />
          <MenuList />
        </div>
      </section>
    </>
  );
}
