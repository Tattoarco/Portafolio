/**
 * Componente que representa la tarjeta de contacto que se muestra en la seccion de contacto
 * @param {{ children: React.ReactNode, header: string, ...props: React.HTMLAttributes<HTMLDivElement> }} props
 * @returns {React.ReactElement}
 */
const ContactCard = ({ children, header = 'Header', ...props }) => {
  return (
    <article className="p-6 bg-light-blue shadow-md backdrop-blur-lg rounded-xl w-full max-w-md h-72 grid grid-rows-[auto_1fr] gap-6" {...props}>
      <header>
        <h3 className="text-4xl sm:text-5xl text-center font-semibold text-white">{header}</h3>
      </header>
      {children}
    </article>
  )
}

export { ContactCard }