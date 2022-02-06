import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm.jsx";
import { getHeoresByName } from "../../selectors/getHeoresByName.jsx";
import { HeroCard } from "../hero/HeroCard";
export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const [{ searchText }, handleInputChange, reset] = useForm({ searchText: q });

  const listado = useMemo(() => getHeoresByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busqueda</h1>
      <hr className="mb-5" />
      <div className="d-flex gap-3">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="buscar heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-outline-primary mt-3 d-grap"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>

        <div className="col-5">
          <h4>Lista de heroes</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info animate__animated animate__bounceIn">
              Buscar un heroe
            </div>
          ) : listado.length === 0 ? (
            <div className="alert alert-danger animate__animated animate__bounceIn">
              No se encontraron resultados
            </div>
          ) : (
            <h5 className=" animate__animated animate__bounceIn">
              {listado.length > 1 ? "Se han encontrado" : "Se ha encontrado"}{" "}
              {listado.length} resultado{listado.length > 1 && "s"}{" "}
            </h5>
          )}
          {listado.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
