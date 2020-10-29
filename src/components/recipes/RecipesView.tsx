import React from "react";

import { Container } from "@material-ui/core";

import IngredientFilters from "./IngredientFilters";
import useRecipes from "./useRecipes";
import SearchBar from "./SearchBar";
import Paginator from "./Paginator";
import Recipes from "./Recipes";

export default function RecipesView(): React.ReactElement {
  const { data, loading, params, setParams } = useRecipes();
  const { query } = params;

  const handleSubmit = (ingredient: string) => {
    const newIngredients = [query, ingredient].filter((i) => i).join(",");
    setParams({ ...params, query: newIngredients });
  };

  const handleDelete = (ingredient?: string) => {
    if (!ingredient) {
      setParams({ page: 1, query: "" });
      return;
    }
    const ingredientsToArray = query.split(",");
    const newIngredients = ingredientsToArray.filter(i => i !== ingredient);

    setParams({ page: 1, query: newIngredients.join(",") });
  };

  const handlePageChange = (value: number) => {
    setParams({ ...params, page: value });
  };

  return (
    <Container maxWidth="lg">
      <SearchBar onSubmit={handleSubmit} />
      <IngredientFilters onDelete={handleDelete} ingredients={query} />
      <Recipes data={data} loading={loading} ingredients={query} />
      <Paginator data={data} loading={loading} onChange={handlePageChange} />
    </Container>
  );
}
