const PagesContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-[17.36%] flex flex-col">
      {children}
    </section>
  );
};

export default PagesContainer;