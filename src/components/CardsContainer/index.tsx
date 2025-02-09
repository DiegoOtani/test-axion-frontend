const CardsContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="grid grid-cols-3 gap-8">
    {children}
  </section>
}

export default CardsContainer;