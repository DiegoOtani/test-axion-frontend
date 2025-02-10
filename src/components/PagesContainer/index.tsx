const PagesContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-[17.36%] pt-24 flex flex-col min-h-[1300px]">
      {children}
    </section>
  );
};

export default PagesContainer;