import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid } from "../../components/Grid";

export function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Resultaten</title>
        <meta name="description" content="Fibonacci Game" />
      </Helmet>
      <div id={'page-top wrapper'}>
        <Grid />
      </div>
    </>
  );
}
