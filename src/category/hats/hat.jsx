import * as React from "react";
import { HatData } from "./hatdata";
import GridCol4 from "../../container/GridCol4";

export default function HatCard() {
  return (
    <>
    <GridCol4 catName={HatData} /> 
    </>
  );
}