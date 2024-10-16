import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;

  return (<>
  
  <Heading fontSize={"2xl"} marginBottom={3}> Genres</Heading>
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(gener.image_background)}
              objectFit={"cover"}
            ></Image>
            <Button whiteSpace={"normal"} textAlign={"left"}
              fontWeight={selectedGenre?.id === gener.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(gener)}
              variant={"link"}
              fontSize="lg"
            >
              {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  
  </>
  );
};

export default GenreList;
