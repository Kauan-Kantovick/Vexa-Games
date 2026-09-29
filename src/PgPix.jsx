import { useUser } from "./contexts/UserContext";

function PixPage() {
  const { usuario } = useUser();

  return (
    <>
      {usuario.bloqueio ? (
        <h1>Usuario bloqueio</h1>
      ) : (
        <ul>
          {usuario.chavesPix.map((chave) => {
            return (
                <li>{chave}</li>
            )
          })}
        </ul>
      )}
    </>
  );
}

export default PixPage;
