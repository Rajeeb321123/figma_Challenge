import UniversitiesCard from "./UniversitiesCard";

export default function Universities() {
  return (
    <section
      className="mt-28"
    >
      <div
        className="text-6xl text-blue-500 font-extrabold drop-shadow-xl"
      >
        Some of our Top Universities
      </div>

      <div className='flex gap-10 flex-row mt-20'>
        <UniversitiesCard />
      </div>
    </section>
  )
}
