"use client";

export default function Page() {
  const filters = Array.from({ length: 3 });

  return (
    <main className="site">
      <section className="sign">
        <header className="sign__header">
          <span className="sign__subtitle">Premium Stock</span>
          <h1 className="sign__title">Medwakh Filters Available</h1>
        </header>
        <div className="filters">
          {filters.map((_, index) => (
            <div key={index} className="filter">
              <div className="filter__core" />
              <div className="filter__mesh" />
            </div>
          ))}
        </div>
        <footer className="sign__footer">
          Clean draw. Smooth pull. Switch now.
        </footer>
      </section>
    </main>
  );
}
