import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(gener.image_background)}
            ></Image>
            <Text fontSize="lg">{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
