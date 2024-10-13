import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colorChoice = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";
  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={2}
        borderRadius={10}
        colorScheme={colorChoice}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
