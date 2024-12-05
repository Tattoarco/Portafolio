const ModalGmail = ({ cerrarModal }) => {
  const closeModal = () => {
    cerrarModal();
  };

  return (
    <>
      <main className="h-screen absolute inset-0 z-20 grid place-content-center">
        <section className="w-[50rem] h-[30rem] bg-white">
            <h3 className="text-red-500">hola</h3>
          <form action="" >
          </form>
        </section>
        <section className="inset-0 bg-[#0000006a] -z-10 fixed flex items-center justify-center backdrop-blur-[3px] cursor-pointer" onClick={closeModal} />
      </main>
    </>
  );
};

export { ModalGmail };
