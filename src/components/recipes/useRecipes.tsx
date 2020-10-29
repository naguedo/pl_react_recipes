import { useState, useEffect } from "react";
import { DataType, ParamsType } from "./recipes.types";

import axios from "axios";

export default function useRecipes() {
  const [data, setData] = useState<DataType | undefined>(undefined);
  const [params, setParams] = useState<ParamsType>({
    query: "",
    page: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://pl-api-recipes.herokuapp.com/api/v1/recipes", {
        params: params,
      })
      .then((result) => {
        setData(result.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, [params]);

  return { data, loading, params, setParams };
}
