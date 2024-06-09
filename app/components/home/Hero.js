export default function Hero({ title, description }) {
  return (
    <section className='container'>
      <div className="py-4 bg-[url('/assets/images/cover.png')] rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12">
        <div className='col-span-12 md:col-span-6'>
          <h1 className='font-bold text-3xl md:text-5xl text-white'>{title}</h1>
          <p className='text-white my-4'>{description}</p>
        </div>
      </div>
    </section>
  );
}
