const ListTilte = ({ title }: { title: string }) => {
  return <>
    <h2 className="mt-8 text-text font-semibold text-lg">LIST OF {title}</h2>

    <div className="mt-2 mb-8  h-[5px] w-full bg-gradient-to-r from-primary_gradient to-second_gradient text-foreground"></div>
  </>
} 

export default ListTilte;