import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"', // 1024px
      }}
      templateColumns={{
        base: "1fr",

        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <GameGrid selectedGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
